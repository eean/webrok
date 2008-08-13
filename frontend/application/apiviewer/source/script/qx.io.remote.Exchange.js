{type:"class",attributes:{"name":"Exchange","hasWarning":"true","isInternal":"true","packageName":"qx.io.remote","access":"internal","superClass":"qx.core.Object","fullName":"qx.io.remote.Exchange","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vRequest"}}]}]}]},{type:"events",children:[{type:"event",attributes:{"hasError":"true","name":"aborted"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.remote.Response"}}]}]},{type:"event",attributes:{"name":"changeState"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #state}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"hasError":"true","name":"completed"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.remote.Response"}}]}]},{type:"event",attributes:{"hasError":"true","name":"failed"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.remote.Response"}}]}]},{type:"event",attributes:{"hasError":"true","name":"receiving"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"sending"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]},{type:"event",attributes:{"hasError":"true","name":"timeout"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"8","line":"68"}}]},{type:"types",children:[{type:"entry",attributes:{"type":"qx.io.remote.Response"}}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"canHandle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vImpl"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vNeeds"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vResponseType"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vImpl</code> is not documented.","column":"11","line":"153"}},{type:"error",attributes:{"msg":"Parameter <code>vNeeds</code> is not documented.","column":"11","line":"153"}},{type:"error",attributes:{"msg":"Parameter <code>vResponseType</code> is not documented.","column":"11","line":"153"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"153"}}]}]},{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"initTypes"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"123"}}]}]},{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"registerType"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vClass"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vId"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vClass</code> is not documented.","column":"14","line":"112"}},{type:"error",attributes:{"msg":"Parameter <code>vId</code> is not documented.","column":"14","line":"112"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"112"}}]}]},{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"statusCodeToString"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vStatusCode"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"string"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vStatusCode</code> is not documented.","column":"20","line":"359"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"359"}}]}]},{type:"method",attributes:{"hasError":"true","isStatic":"true","name":"wasSuccessful"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vStatusCode"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vReadyState"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"vIsLocal"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"boolean"}},{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vStatusCode</code> is not documented.","column":"15","line":"224"}},{type:"error",attributes:{"msg":"Parameter <code>vReadyState</code> is not documented.","column":"15","line":"224"}},{type:"error",attributes:{"msg":"Parameter <code>vIsLocal</code> is not documented.","column":"15","line":"224"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"15","line":"224"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.io.remote.Exchange#implementation","name":"_applyImplementation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.io.remote.Exchange#state","name":"_applyState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onabort"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"10","line":"740"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"10","line":"740"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_oncompleted"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"14","line":"729"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"729"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onfailed"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"11","line":"751"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"11","line":"751"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onreceiving"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"14","line":"718"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"718"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_onsending"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"12","line":"707"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"707"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_ontimeout"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"Event"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"12","line":"762"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"762"}}]}]},{type:"method",attributes:{"name":"abort"},children:[{type:"desc",attributes:{"text":"<p>Force the transport into the aborted (&#8220;aborted&#8221;)\n state.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getImplementation","fromProperty":"implementation"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>implementation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #implementation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>implementation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getRequest","fromProperty":"request"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>request</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #request}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>request</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getState","fromProperty":"state"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>state</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initImplementation","fromProperty":"implementation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>implementation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>implementation</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #implementation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRequest","fromProperty":"request"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>request</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>request</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #request}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initState","fromProperty":"state"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>state</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetImplementation","fromProperty":"implementation"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>implementation</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #implementation}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRequest","fromProperty":"request"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>request</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #request}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetState","fromProperty":"state"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>state</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"send"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}},{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"6","line":"546"}}]}]},{type:"method",attributes:{"name":"setImplementation","fromProperty":"implementation"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>implementation</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>implementation</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #implementation}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRequest","fromProperty":"request"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>request</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>request</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #request}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setState","fromProperty":"state"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>state</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>state</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #state}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"timeout"},children:[{type:"desc",attributes:{"text":"<p>Force the transport into the timeout state.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"check":"qx.io.remote.transport.Abstract","allowNull":"true","propertyType":"new","name":"implementation","apply":"_applyImplementation"},children:[{type:"desc",attributes:{"text":"<p>Set the implementation to use to send the request with.</p>\n\n<p>The implementation should be a subclass of qx.io.remote.transport.Abstract and\n must implement all methods in the transport <span class=\"caps\">API</span>.</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"request","check":"qx.io.remote.Request"},children:[{type:"desc",attributes:{"text":"<p>Set the request to send with this transport.</p>"}}]},{type:"property",attributes:{"possibleValues":"\"configured\",\"sending\",\"receiving\",\"completed\",\"aborted\",\"timeout\",\"failed\"","hasError":"true","name":"state","defaultValue":"\"configured\"","propertyType":"new","apply":"_applyState","event":"changeState"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"493"}}]}]}]}]}