{type:"class",attributes:{"name":"XmlHttp","hasWarning":"true","packageName":"qx.io.remote.transport","superClass":"qx.io.remote.transport.Abstract","fullName":"qx.io.remote.transport.XmlHttp","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"events",children:[{type:"event",attributes:{"hasError":"true","name":"aborted"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"completed"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"configured"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"created"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"failed"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"receiving"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"sending"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"timeout"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"53"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__dummy"},children:[{type:"desc",attributes:{"text":"<p>Dummy function to use for onreadystatechange after disposal</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>none</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"createRequestObject"},children:[{type:"desc",attributes:{"text":"<p>Return a new XMLHttpRequest object suitable for the client browser.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"isSupported"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"13","line":"128"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.io.remote.transport.Abstract#state","overriddenFrom":"qx.io.remote.transport.Abstract","name":"_applyState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onreadystatechange"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}},{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"21","line":"384"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"384"}}]}]},{type:"method",attributes:{"name":"failedLocally"},children:[{type:"desc",attributes:{"text":"<p>Force the transport into the failed state\n (&#8220;failed&#8221;).</p>\n\n<p>This method should be used only if the requests <span class=\"caps\">URI</span> was local\n access. I.e. it started with &#8220;file://&#8221;.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getFetchedLength"},children:[{type:"desc",attributes:{"text":"<p>Returns the length of the content as fetched thus far</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getReadyState"},children:[{type:"desc",attributes:{"text":"<p>Get the ready state of this transports request.</p>\n\n<p>For qx.io.remote.transport.XmlHttp, ready state is a number between 1 to 4.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"getRequest"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"167"}}]}]},{type:"method",attributes:{"hasError":"true","name":"getResponseContent"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"null"}},{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"698"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a specific header provided by the server upon sending a request,\n with header name determined by the argument headerName.</p>\n\n<p>Only available at readyState 3 and 4 universally and in readyState 2\n in Gecko.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"19","line":"488"}}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseHeaders"},children:[{type:"desc",attributes:{"text":"<p>Provides a hash of all response headers.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseText"},children:[{type:"desc",attributes:{"text":"<p>Provides the response text from the request when available and null\n otherwise.  By passing true as the &#8220;partial&#8221; parameter of this method,\n incomplete data will be made available to the caller.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getResponseXml"},children:[{type:"desc",attributes:{"text":"<p>Provides the <span class=\"caps\">XML</span> provided by the response if any and null otherwise.  By\n passing true as the &#8220;partial&#8221; parameter of this method, incomplete data will\n be made available to the caller.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusCode"},children:[{type:"desc",attributes:{"text":"<p>Returns the current status code of the request if available or -1 if not.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.io.remote.transport.Abstract","name":"getStatusText"},children:[{type:"desc",attributes:{"text":"<p>Provides the status text for the current request if available and null\n otherwise.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"getStringResponseHeaders"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"26","line":"505"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.transport.Abstract","name":"send"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"6","line":"185"}}]}]},{type:"method",attributes:{"hasError":"true","overriddenFrom":"qx.io.remote.transport.Abstract","name":"setRequestHeader"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vLabel"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vValue"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set a request header to this transports request.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vLabel</code> is not documented.","column":"18","line":"465"}},{type:"error",attributes:{"msg":"Parameter <code>vValue</code> is not documented.","column":"18","line":"465"}}]}]}]}]}