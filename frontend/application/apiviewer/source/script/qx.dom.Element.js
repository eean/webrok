{type:"class",attributes:{"isStatic":"true","name":"Element","packageName":"qx.dom","fullName":"qx.dom.Element","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Manages children structures of an element. Easy and convenient APIs\nto insert, remove and replace children.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"hasChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"child"},children:[{type:"desc",attributes:{"text":"<p>child node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given <code>child</code> is a child of <code>parent</code></p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the given <code>child</code> is a child of <code>parent</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasChildElements"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>element to test</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given <code>element</code> has any child elements.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the given <code>element</code> has at least one child element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"hasChildren"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>element to test</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Whether the given <code>element</code> has children.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>true when the given <code>element</code> has at least one child node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"insertAfter"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"ref"},children:[{type:"desc",attributes:{"text":"<p>Node which will be used as reference for insertion</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Inserts <code>node</code> after <code>ref</code> in the same parent.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true (successful)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"insertAt"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>where to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Inserts <code>node</code> at the given <code>index</code>\ninside <code>parent</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true (successful)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"insertBefore"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"ref"},children:[{type:"desc",attributes:{"text":"<p>Node which will be used as reference for insertion</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Inserts <code>node</code> before <code>ref</code> in the same parent.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true (successful)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"insertBegin"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Insert <code>node</code> into <code>parent</code> as first child.\nIndexes of other children will be incremented by one.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true (successful)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"insertEnd"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent element node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Insert <code>node</code> into <code>parent</code> as last child.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>returns true (successful)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"remove"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes the given <code>node</code> from its parent element.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when node was successfully removed,\n  otherwise <code>false</code>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>Node to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent element which contains the <code>node</code></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes the given <code>node</code> from the <code>parent</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when node was successfully removed,\n  otherwise <code>false</code>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"removeChildAt"},children:[{type:"params",children:[{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>position of the node which should be removed</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent <span class=\"caps\">DOM</span> element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Removes the node at the given <code>index</code>\nfrom the <code>parent</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when node was successfully removed,\n  otherwise <code>false</code>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"replaceAt"},children:[{type:"params",children:[{type:"param",attributes:{"name":"newNode"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"index"},children:[{type:"desc",attributes:{"text":"<p>position of old <span class=\"caps\">DOM</span> node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"parent"},children:[{type:"desc",attributes:{"text":"<p>parent <span class=\"caps\">DOM</span> element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Replaces the node at <code>index</code> with <code>newNode</code> in\nthe given parent.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when node was successfully replaced"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"replaceChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"newNode"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> node to insert</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"oldNode"},children:[{type:"desc",attributes:{"text":"<p><span class=\"caps\">DOM</span> node to remove</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]}]},{type:"desc",attributes:{"text":"<p>Replaces <code>oldNode</code> with <code>newNode</code> in the current\nparent of <code>oldNode</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> when node was successfully replaced"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}