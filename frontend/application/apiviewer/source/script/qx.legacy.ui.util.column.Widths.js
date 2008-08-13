{type:"class",attributes:{"name":"Widths","hasWarning":"true","packageName":"qx.legacy.ui.util.column","superClass":"qx.core.Object","fullName":"qx.legacy.ui.util.column.Widths","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Column width array for a whole set of columns</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"numColumns"},children:[{type:"desc",attributes:{"text":"<p>The number of columns being used.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"name":"getData"},children:[{type:"desc",attributes:{"text":"<p>Get the array of column data.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Array of column data</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Array"}}]}]}]},{type:"method",attributes:{"overriddenFrom":"qx.core.Object","name":"set"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column number whose attributes are being set.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"map"},children:[{type:"desc",attributes:{"text":"<p>An object with any or all of the three members, &#8220;width&#8221;, &#8220;minWidth&#8221;,\n  &#8220;maxWidth&#8221;.  The property values are as described for {@link\n  #setWidth}, {@link #setMinWidth} and {@link #setMaxWidth}\n  respectively.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the width, minimum width and/or maximum width of a column at one\ntime.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"setMaxWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"}},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The maximum width of the specified column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the maximum width of a column.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>col</code>.","column":"13","line":"170"}},{type:"error",attributes:{"msg":"Parameter <code>column</code> is not documented.","column":"13","line":"170"}}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"setMinWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"}},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The minimum width of the specified column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the minimum width of a column.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>col</code>.","column":"13","line":"145"}},{type:"error",attributes:{"msg":"Parameter <code>column</code> is not documented.","column":"13","line":"145"}}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"setWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"}},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The width of the specified column.  The width may be specified as\n  integer number of pixels (e.g. 100), a string representing percentage\n  of the inner width of the Table (e.g. &#8220;25%&#8221;), or a string\n  representing a flex width (e.g. &#8220;1*&#8221;).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer, String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the width of a column.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>col</code>.","column":"10","line":"120"}},{type:"error",attributes:{"msg":"Parameter <code>column</code> is not documented.","column":"10","line":"120"}}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}