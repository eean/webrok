{type:"class",attributes:{"isStatic":"true","name":"Flash","packageName":"qx.bom","fullName":"qx.bom.Flash","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Flash&#8482; embed via script</p>\n\n<p>Include:</p>\n\n<ul>\n<li>Simple movie embedding (returning a cross-browser working <span class=\"caps\">DOM</span> node)</li>\n<li>Support for custom parameters and attributes</li>\n<li>Support for Flash&#8482; variables</li>\n</ul>\n\n<p>Does not include the following features from SWFFix:</p>\n\n<ul>\n<li>Active content workarounds for already inserted movies (via markup)</li>\n<li>Express install support</li>\n<li>Transformation of standard conformance markup to cross browser support</li>\n<li>Support for alternative content (alt text)</li>\n</ul>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__fixOutOfMemoryError"},children:[{type:"desc",attributes:{"text":"<p>Internal helper to prevent leaks in IE</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"create"},children:[{type:"params",children:[{type:"param",attributes:{"name":"movie"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">URI</span> to the movie</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"variables"},children:[{type:"desc",attributes:{"text":"<p>? {Map} Flash variable data (these are available in the movie later)</p>"}}]},{type:"param",attributes:{"name":"params"},children:[{type:"desc",attributes:{"text":"<p>? {Map} Flash parameter data (these are used to configure the movie itself)</p>"}}]},{type:"param",attributes:{"name":"win"},children:[{type:"desc",attributes:{"text":"<p>Window to create the element for</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Window"}}]}]}]},{type:"desc",attributes:{"text":"<p>Creates an <span class=\"caps\">DOM</span> element</p>\n\n<p>The dimension of the movie should define through <span class=\"caps\">CSS</span> styles {@link qx.bom.element.Style}</p>\n\n<p>It is possible to add these parameters as supported by Flash movies:\n<a href=\"http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701\">http://kb.adobe.com/selfservice/viewContent.do?externalId=tn_12701</a></p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> element node with the Flash movie</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]}]}]}