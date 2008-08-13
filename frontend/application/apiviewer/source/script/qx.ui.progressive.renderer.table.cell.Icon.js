{type:"class",attributes:{"isAbstract":"true","name":"Icon","hasWarning":"true","packageName":"qx.ui.progressive.renderer.table.cell","superClass":"qx.ui.progressive.renderer.table.cell.Abstract","childClasses":"qx.ui.progressive.renderer.table.cell.Boolean,qx.ui.progressive.renderer.table.cell.Image","fullName":"qx.ui.progressive.renderer.table.cell.Icon","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Abstract Icon cell renderer.  <span class=\"caps\">EXPERIMENTAL</span>!  <span class=\"caps\">INTERFACE</span> <span class=\"caps\">MAY</span> <span class=\"caps\">CHANGE</span>.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","hasError":"true","name":"__getImageData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"16","line":"165"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.progressive.renderer.table.cell.Abstract","overriddenFrom":"qx.ui.progressive.renderer.table.cell.Abstract","name":"_getCellStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.progressive.renderer.table.cell.Abstract","overriddenFrom":"qx.ui.progressive.renderer.table.cell.Abstract","name":"_getContentHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_identifyImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]},{type:"desc",attributes:{"text":"<p>Identify the image to be displayed in the cell.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The returned object should contain at least the <i>url</i> field, but\n  may contain any others of these:</p>\n\n<dl>\n    <dt>\n      url\n    </dt>\n    <dd>\n      The URL of the image to be displayed\n    </dd>\n\n<dt>\n      imageWidth\n    </dt>\n    <dd>\n      The width at which the image should be displayed\n    </dd>\n\n<dt>\n      imageHeight\n    </dt>\n    <dd>\n      The height at which the image should be displayed\n    </dd>\n\n<dt>\n      extras\n    </dt>\n    <dd>\n      Any extra attributes to be include in the 'image' tag.\n    </dd>\n  </dl>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>cellInfo</code> is not documented.","column":"16","line":"86"}}]}]}]}]}