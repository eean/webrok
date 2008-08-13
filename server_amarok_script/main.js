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

print( "file included? " + Importer.include( "HttpServer.js" ) );

function fileResponse( path )
{
    print( "requesting " + path );
    var prefix = "/home/ian/work/qoo2/";
    if( path === "/" || path === "" )
    {
        path = "index.js.html";
    }
    //we need to make sure it doesn't ../ out of the root
    url = new QUrl( path );
    var fi = new QFileInfo( prefix + url.path() );
    if( fi.absoluteFilePath().indexOf( prefix ) == 0 )
    {
        print( "sending " + fi.absoluteFilePath() );
        var file = new QFile( fi.absoluteFilePath() );
        if( file.open( QIODevice.ReadOnly ) )
        {
            var ret = new Object();
            if( fi.completeSuffix() == "xml" )
            {
                ret.mimeType = "application/xml";
            }
            else
            {
                ret.mimeType = "text/html";
            }
            ret.content = file.readAll()
            return ret;
        }
        else
        {
            print("file not found")
            return null;
        }
    }
    else
    {
        print( fi.absoluteFilePath() + " fails security check." );
        return null; //send 404 error
    }
}

function testResponse()
{
    return "<h3>test</h3>";
}

function ajaxResponse( pathStr )
{
    url = new QUrl( pathStr );
    command = url.path();
    print( "the command is " + command );
    var ret = new Object();
    switch( command ) 
    {
        case "/play":
            row = Number( url.queryItemValue( "row" ) );
            Amarok.Playlist.playByIndex( row );
            print("playing file");
            ret.mimeType = "text/plain";
            ret.content =  "Playing row " + row;
        return ret;
        
        case "/savePlaylist":
            Amarok.Playlist.savePlaylist("//home/ian/work/qoo2/current.xspf");
            ret.mimeType = "text/plain";
            ret.content =  "saving playlist"
        return ret;
        
        case "/start":
            Amarok.Engine.Play();
            ret.mimeType = "text/plain";
            ret.content = "playing";
        return ret;
        
        case "/next":
            Amarok.Engine.Next();
            ret.mimeType = "text/plain";
            ret.content = "next track";
        return ret;
        
        case "/previous":
            Amarok.Engine.Previous();
            ret.mimeType = "text/plain";
            ret.content = "previous track";
        return ret;
        
        case "/pause":
            Amarok.Engine.Pause();
            ret.mimeType = "text/plain";
            ret.content = "pausing";
        return ret;
       
    }
    return null; //404
}

function iconResponse( pathStr )
{
  var iconName = new QFileInfo( pathStr ).fileName();
  var iconPath = Amarok.Info.iconPath( iconName, Amarok.Info.IconSizes.Medium );
  print( "iconPath: " + iconPath );
  var ret = new Object();
  ret.mimeType = "image/png";
  file = new QFile( iconPath )
  if( file.open( QIODevice.ReadOnly ) )
  {
    ret.content = file.readAll();
    return ret;
  }
  return null;
}

var http = new HttpServer();
http.register( "/ajax", ajaxResponse );
http.register( "/test", testResponse );
http.register( "/icon", iconResponse );
http.register( "/", fileResponse );
