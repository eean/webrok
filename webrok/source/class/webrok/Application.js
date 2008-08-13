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
#embed(qx/icon/${qx.icontheme}/16/actions/media-skip-backward.png)
#embed(qx/icon/${qx.icontheme}/16/actions/media-playback-start.png)
*/

qx.Class.define("webrok.Application",
{
  extend : qx.application.Standalone,

  members :
  {
    main : function()
    {
        this.base(arguments);
        //needed by generator bug:
        var appender = qx.log.appender.Native;
        this.debug("hello world");
        var layout = new qx.ui.layout.Dock();
    	var container = new qx.ui.container.Composite(layout);

        var toolbar = new qx.ui.toolbar.ToolBar;
        toolbar.setShow("both");
        //"icon/16/actions/media-skip-backward.png
        var prevBtn = new qx.ui.toolbar.Button( "Previous", "/icons/media-skip-backward" );
        prevBtn.addListener("activate", function() {
            var req = new qx.io.remote.Request("/ajax/previous", "GET", "text/plain");
            req.send();
        });
        var playBtn =  new qx.ui.toolbar.Button("Play", "/icons/media-playback-start" );
        playBtn.addListener("activate", function() {
            var req = new qx.io.remote.Request("/ajax/start", "GET", "text/plain");
            req.send();
        });
        var pauseBtn = new qx.ui.toolbar.Button("Pause", "/icons/media-playback-pause" );
        pauseBtn.addListener("activate", function() {
            var req = new qx.io.remote.Request("/ajax/pause", "GET", "text/plain");
            req.send();
        });
        var nextBtn = new qx.ui.toolbar.Button( "Next", "/icons/media-skip-forward" );
        nextBtn.addListener("activate", function() {
            var req = new qx.io.remote.Request("/ajax/next", "GET", "text/plain");
            req.send();
        });
        toolbar.add( prevBtn );
        toolbar.add( playBtn );
        toolbar.add( pauseBtn );
        toolbar.add( nextBtn );
        container.add( toolbar, { edge: "north"} );

        var playlistModel = new qx.ui.table.model.Simple();
        playlistModel.setColumns([ "#", "Title", "Artist", "Album", "Length" ]);

        var refreshPlaylist = new qx.io.remote.Request("/ajax/savePlaylist", "GET", "text/plain");
        refreshPlaylist.addListener("completed", function( response ) {
            this.debug( "hello" +  response.getStatusCode() );
            if( response.getStatusCode() != 200 )
            {
                 this.error( "statuscode was: + " + response.getStatusCode() );
                return;
            }
                    var playlist = new qx.io.remote.Request("/current.xspf", "GET", "text/plain");
            playlist.addListener("completed", function( resp ) {
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
        table.addListener( "cellDblclick", function( cellEvent ) {
            var req = new qx.io.remote.Request("/ajax/play?row=" + cellEvent.getRow(), "GET", "text/plain");
            req.send();
        });
        container.add( table, { edge: "center" } );
        this.getRoot().add(container, {edge:0});
    }
  }
});
