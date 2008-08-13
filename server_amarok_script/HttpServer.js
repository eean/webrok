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
 
Importer.loadQtBinding( "qt.core" );
Importer.loadQtBinding( "qt.network" );

QByteArray.prototype.toString = function()
{
   ts = new QTextStream( this, QIODevice.ReadOnly );
   return ts.readAll();
}

HttpServer = function()
{
  QTcpServer.call( this, null );
  var portNumber = 8080;
  do {
    var connected = this.listen(new QHostAddress( QHostAddress.Any ), portNumber);
    portNumber++;
  } while( !connected && ((this.serverError() & QAbstractSocket.AddressInUseError) == 0 ) && portNumber < 9000 )
  if( !this.isListening() )
  {
    print( "Unable to open a port for the web server" );
    return;
  }
  print("Web server started at port " + this.serverPort() );
  this.newConnection.connect( this, this.newIncomingConnection );
  this.registry = new Object();
}

HttpServer.prototype = new QTcpServer();

HttpServer.prototype.newIncomingConnection = function()
{
  var socket = this.nextPendingConnection();
  var request = new QByteArray();
  var thisHttp = this;
  socket.readyRead.connect( function() {
      request.append( socket.readAll() );
      var endOfRequest =  request.indexOf("\r\n\r\n");
      if( endOfRequest > 0 )
      {
      try{
       request = thisHttp.parseHeader( request, socket, endOfRequest + 4 );
       }
       catch( error ) {
        print( error)
       }
      }
  });
}

HttpServer.prototype.parseHeader = function( request, socket, endOfRequest )
{
    var header = new QHttpRequestHeader( request.left( endOfRequest ).toString() );
    if( header.method() == "GET" )
    {
        this.sendResponse( socket, header.path() ); 
        socket.close();
    }
    return request.mid( endOfRequest );
}

HttpServer.prototype.sendResponse = function( socket, path )
{
   var userResponse = null;
   for( var registeredPath in this.registry )
   {
       print( path.indexOf( registeredPath ) + " for " + registeredPath + " in " + path );
       if( path.indexOf( registeredPath ) == 0 )
       {
           userResponse = this.registry[registeredPath]( path.substring( registeredPath.length )  );
           break;
       }
   }

   print( "respondTo says::" + userResponse + "::");
   if( userResponse == null )
   {
        //var response404 = new QHttpResponseHeader( 404, "Not found", 1, 1 );
//        responseHeader.setStatusLine( 404 );
        //responseHeader.setContentType( "text/html" )
        content = "HTTP/1.1 404 Not found\n"
        content += "Content-Type: text/html\n";
        content += "Server: AmarokServer\n\r\n";
        content += "<html><head><title>File not found</title></head>\n";
        content += "<h1>404 Error</h1>\n"
        content += path + " not found.\n\r\n";
        //responseHeader.setContentLength( content.length() );
        var writeMe = new QByteArray();
        //writeMe.append( response404.toString() )
        writeMe.append( content )
        socket.write( writeMe );
        //print("response:\n" + writeMe.toString() + " sent.");
   }
   else
   {
   try{
        content = "HTTP/1.1 200\n"
        content += "Content-Type: " + userResponse.mimeType + "\n";
        content += "Server: AmarokServer\n\r\n";
        var writeMe = new QByteArray();
        writeMe.append( content );
        writeMe.append( userResponse.content );
        socket.write( writeMe );
        //print("response:\n" + writeMe.toString() + " sent.");
    }
    catch( e )
    {
        print( e )
    }
   }
}

HttpServer.prototype.register = function( path, responseFn )
{
    this.registry[path] = responseFn;
    if( path.charAt(0) === "/" )
    {
        path = path.slice(1);
    }
}