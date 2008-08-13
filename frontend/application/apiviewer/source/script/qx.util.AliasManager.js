{type:"class",attributes:{"name":"AliasManager","packageName":"qx.util","superClass":"qx.util.ValueManager","isSingleton":"true","fullName":"qx.util.AliasManager","type":"class"},children:[{type:"desc",attributes:{"text":"<p>This singleton manages global resource aliases</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_preprocess"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>incoming value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>pre process incoming dynamic value</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>pre processed value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"alias"},children:[{type:"desc",attributes:{"text":"<p>alias name for the resource path/url</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"base"},children:[{type:"desc",attributes:{"text":"<p>first part of <span class=\"caps\">URI</span> for all images which use this alias</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Define an alias to a resource path</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"alias"},children:[{type:"desc",attributes:{"text":"<p>alias name for the resource path/url</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove a previously defined alias</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.util.ValueManager","name":"resolve"},children:[{type:"params",children:[{type:"param",attributes:{"name":"path"},children:[{type:"desc",attributes:{"text":"<p>input path</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Resolves a given path</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>resulting path (with interpreted aliases)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getInstance"},children:[{type:"desc",attributes:{"text":"<p>Returns a singleton instance of this class. On the first call the class\nis instantiated by calling the constructor with no arguments. All following\ncalls will return this instance.</p>\n\n<p>This method has been added by setting the &#8220;type&#8221; key in the class definition\n({@link qx.Class#define}) to &#8220;singleton&#8221;.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The singleton instance of this class.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.util.AliasManager"}}]}]}]}]}]}