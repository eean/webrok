/***************************************************************************
 * copyright        : (C) 2008 Ian Monroe <ian@monroe.nu>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of
 * the License or (at your option) version 3 or any later version
 * accepted by the membership of KDE e.V. (or its successor approved
 * by the membership of KDE e.V.), which shall act as a proxy
 * defined in Section 14 of version 3 of the license.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 **************************************************************************/
/* 
#embed(qx.icontheme/16/actions/media-skip-backward.png)
#embed(qx.icontheme/16/actions/media-playback-start.png)
*/

qx.Class.define("webrok.Application",
{
  extend : qx.application.Gui,

  members :
  {
    main : function()
    {
        this.base(arguments);
        
        var doc = qx.ui.core.ClientDocument.getInstance();
        var dockLayout = new qx.ui.layout.DockLayout;
        dockLayout.setLocation(0, 0);
        dockLayout.setRight(0);
        dockLayout.setBottom(0);
        dockLayout.setBackgroundColor("white");

        var toolbar = new qx.ui.toolbar.ToolBar;
        var prevBtn = new qx.ui.toolbar.Button( "Previous", "icon/16/actions/media-skip-backward.png" );
        var playBtn =  new qx.ui.toolbar.Button("Play", "icon/16/actions/media-playback-start.png" );
        toolbar.add( prevBtn );
        toolbar.add( playBtn );
        dockLayout.addTop( toolbar );
        
        var playlistModel = new qx.ui.table.model.Simple();
        playlistModel.setColumns([ "#", "Title", "Artist", "Album", "Length" ]);

        var refreshPlaylist = new qx.io.remote.Request("/ajax/savePlaylist", "GET", "text/plain");
        refreshPlaylist.addEventListener("completed", function( response ) {
            this.debug( "hello" +  response.getStatusCode() );
            if( response.getStatusCode() != 200 )
            {
                 this.error( "statuscode was: + " + response.getStatusCode() );
                return;
            }
            var playlist = new qx.io.remote.Request("/current.xspf", "GET", "text/plain");
            playlist.addEventListener("completed", function( resp ) {
                var dom = XSPF.XMLfromString( resp.getContent() );
                var jspf = XSPF.toJSPF(dom);
                this.debug( jspf );
                this.debug( "the length:" + jspf.playlist.track.length );
                var rows = new Array();
                var tracks = jspf.playlist.track;
                for( var it = 0; it < tracks.length; it++ )
                {
                    var row = [tracks[it].trackNum, tracks[it].title, tracks[it].creator, tracks[it].album, tracks[it].duration ]
                    rows.push( row );
                    this.debug( "pushing " + row );
                }
                playlistModel.addRows( rows );
            });
            playlist.send();
        });
        refreshPlaylist.send();

        var table = new qx.ui.table.Table(playlistModel);
        table.set(
        {
        //  width   : "100%"
          height  : "100%"
        });
        table.addEventListener( "cellDblclick", function( cellEvent ) {
            var req = new qx.io.remote.Request("/ajax/play?row=" + cellEvent.getRow(), "GET", "text/plain");
            req.send();
        });
        dockLayout.addBottom( table );
        doc.add(dockLayout);
    },

    close : function()
    {
      this.base(arguments);

      // Prompt user
      // return "Do you really want to close the application?";
    },

    terminate : function() {
      this.base(arguments);
    }
  },

  settings : {
    "custom.resourceUri" : "./resource"
  }
});
