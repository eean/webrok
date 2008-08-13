{type:"class",attributes:{"isStatic":"true","name":"List","packageName":"qx","fullName":"qx.List","type":"bootstrap"},children:[{type:"desc",attributes:{"text":"<p>This class can be used to declare classes to list like data structures\nwhich. This is useful for exampleto build queues, string builders,\netc.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"access":"private","isStatic":"true","name":"__validateConfig"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>The name of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"config"},children:[{type:"desc",attributes:{"text":"<p>Configuration map</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Validates incoming configuration and checks keys and values</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"define"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>Name of the class</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"config"},children:[{type:"desc",attributes:{"text":"<p>Class definition structure. The configuration map has the following keys:\n    <table>\n      <tr><th>Name</th><th>Type</th><th>Description</th></tr>\n      <tr><th>statics</th><td>Map</td><td>Map of static members of the class.</td></tr>\n      <tr><th>members</th><td>Map</td><td>Map of instance members of the class.</td></tr>\n      <tr><th>defer</th><td>Function</td><td>Function that is called at the end of processing the class declaration. It allows access to the declared statics, members and properties.</td></tr>\n    </table></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Defines a new array like data structure class.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"internal","isInternal":"true","isStatic":"true","name":"genericToString"},children:[{type:"desc",attributes:{"text":"<p>This method will be attached to all lists to return\na nice identifier for them.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The interface identifier</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]}