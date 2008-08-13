{type:"class",attributes:{"isStatic":"true","name":"Stylesheet","packageName":"qx.bom","fullName":"qx.bom.Stylesheet","type":"class"},children:[{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"addImport"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"url"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the external stylesheet file</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add an import of an external <span class=\"caps\">CSS</span> file to a stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"addRule"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the target Stylesheet object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"selector"},children:[{type:"desc",attributes:{"text":"<p>the selector</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"entry"},children:[{type:"desc",attributes:{"text":"<p>style rule</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Insert a new <span class=\"caps\">CSS</span> rule into a given Stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"createElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"text"},children:[{type:"desc",attributes:{"text":"<p>? {String} optional string of css rules</p>"}}]}]},{type:"desc",attributes:{"text":"<p>Create a new Stylesheet node and append it to the document</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the generates stylesheet element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Stylesheet"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"includeFile"},children:[{type:"params",children:[{type:"param",attributes:{"name":"href"},children:[{type:"desc",attributes:{"text":"<p>Href value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"doc"},children:[{type:"desc",attributes:{"text":"<p>? {Document} Document to modify</p>"}}]}]},{type:"desc",attributes:{"text":"<p>Include a <span class=\"caps\">CSS</span> file</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeAllImports"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove all imports from a stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeAllRules"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove all <span class=\"caps\">CSS</span> rules from a stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeImport"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the stylesheet object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"url"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">URL</span> of the importet <span class=\"caps\">CSS</span> file</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes an import from a stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeRule"},children:[{type:"params",children:[{type:"param",attributes:{"name":"sheet"},children:[{type:"desc",attributes:{"text":"<p>the Stylesheet</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"param",attributes:{"name":"selector"},children:[{type:"desc",attributes:{"text":"<p>the Selector of the rule to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove a <span class=\"caps\">CSS</span> rule from a stylesheet</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}