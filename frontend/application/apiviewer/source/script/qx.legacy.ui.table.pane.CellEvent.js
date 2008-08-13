{type:"class",attributes:{"name":"CellEvent","hasWarning":"true","packageName":"qx.legacy.ui.table.pane","superClass":"qx.legacy.event.type.MouseEvent","fullName":"qx.legacy.ui.table.pane.CellEvent","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A cell event instance contains all data for mouse events related to cells in a table.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"scroller"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.ui.table.pane.Scroller"}}]}]},{type:"param",attributes:{"name":"type"}},{type:"param",attributes:{"name":"me"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.legacy.event.type.MouseEvent"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_computeColumn"},children:[{type:"desc",attributes:{"text":"<p>Compute the column where the event has happened.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>zero based column number</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_computeRow"},children:[{type:"desc",attributes:{"text":"<p>Compute the row where the event has happened.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>0-based row number</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumn","fromProperty":"column"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>column</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getRow","fromProperty":"row"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>row</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initColumn","fromProperty":"column"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>column</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRow","fromProperty":"row"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>row</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetColumn","fromProperty":"column"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>column</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRow","fromProperty":"row"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>row</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setColumn","fromProperty":"column"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>column</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>column</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #column}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRow","fromProperty":"row"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>row</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>row</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #row}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"hasError":"true","propertyType":"new","name":"column","check":"Integer"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"60"}}]}]},{type:"property",attributes:{"hasError":"true","propertyType":"new","name":"row","check":"Integer"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"60"}}]}]}]}]}