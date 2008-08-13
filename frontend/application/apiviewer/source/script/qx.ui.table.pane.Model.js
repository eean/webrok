{type:"class",attributes:{"name":"Model","packageName":"qx.ui.table.pane","superClass":"qx.core.Object","fullName":"qx.ui.table.pane.Model","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The model of a table pane. This model works as proxy to a\n{@link qx.ui.table.columnmodel.Basic} and manages the visual order of the columns shown in\na {@link TablePane}.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The TableColumnModel of which this\n   model is the proxy.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Basic"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"modelChanged"},children:[{type:"desc",attributes:{"text":"<p>Fired when the model changed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"String","name":"EVENT_TYPE_MODEL_CHANGED","value":"modelChanged"},children:[{type:"desc",attributes:{"text":"<p>The type of the event fired when the model changed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"string"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Model#firstColumnX","name":"_applyFirstColumnX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>firstColumnX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFirstColumnX}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.table.pane.Model#maxColumnCount","name":"_applyMaxColumnCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Number"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>maxColumnCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyMaxColumnCount}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onColVisibilityChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>the event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when the visibility of a column has changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getColumnAtX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"xPos"},children:[{type:"desc",attributes:{"text":"<p>the x postion in the table pane of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the model index of the column at the position <code>xPos</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumnCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the number of columns in this model.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the number of columns in this model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getColumnLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"col"},children:[{type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Gets the position of the left side of a column (in pixels, relative to the\nleft side of the table pane).</p>\n\n<p>This value corresponds to the sum of the widths of all columns left of the\ncolumn.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the position of the left side of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getFirstColumnX","fromProperty":"firstColumnX"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>firstColumnX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstColumnX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>firstColumnX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaxColumnCount","fromProperty":"maxColumnCount"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxColumnCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxColumnCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxColumnCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTotalWidth"},children:[{type:"desc",attributes:{"text":"<p>Returns the total width of all columns in the model.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the total width of all columns in the model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"name":"getX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"col"},children:[{type:"desc",attributes:{"text":"<p>the model index of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns the x position of the column <code>col</code>.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the x postion in the table pane of the column.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initFirstColumnX","fromProperty":"firstColumnX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>firstColumnX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>firstColumnX</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #firstColumnX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxColumnCount","fromProperty":"maxColumnCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxColumnCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxColumnCount</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxColumnCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetFirstColumnX","fromProperty":"firstColumnX"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>firstColumnX</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #firstColumnX}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaxColumnCount","fromProperty":"maxColumnCount"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxColumnCount</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxColumnCount}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setFirstColumnX","fromProperty":"firstColumnX"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>firstColumnX</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>firstColumnX</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #firstColumnX}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setMaxColumnCount","fromProperty":"maxColumnCount"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxColumnCount</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxColumnCount</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxColumnCount}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTableColumnModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>the column model</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Basic"}}]}]}]},{type:"desc",attributes:{"text":"<p>Connects the table model to the column model</p>"}}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyFirstColumnX","defaultValue":"0","propertyType":"new","name":"firstColumnX","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The visible x position of the first column this model should contain.</p>"}}]},{type:"property",attributes:{"apply":"_applyMaxColumnCount","defaultValue":"-1","propertyType":"new","name":"maxColumnCount","check":"Number"},children:[{type:"desc",attributes:{"text":"<p>The maximum number of columns this model should contain. If -1 this model will\ncontain all remaining columns.</p>"}}]}]}]}