{type:"class",attributes:{"name":"PasswordField","interfaces":"qx.ui.table.ICellEditorFactory","superClass":"qx.core.Object","fullName":"qx.ui.table.celleditor.PasswordField","type":"class","packageName":"qx.ui.table.celleditor"},children:[{type:"desc",attributes:{"text":"<p>A cell editor factory creating password fields fields.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.ui.table.ICellEditorFactory","name":"createCellEditor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"docFrom":"qx.ui.table.ICellEditorFactory","name":"getCellEditorValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellEditor"}}]}]},{type:"method",attributes:{"name":"getValidationFunction","fromProperty":"validationFunction"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>validationFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initValidationFunction","fromProperty":"validationFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>validationFunction</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetValidationFunction","fromProperty":"validationFunction"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>validationFunction</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setValidationFunction","fromProperty":"validationFunction"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>validationFunction</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>validationFunction</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #validationFunction}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"allowNull":"true","defaultValue":"null","propertyType":"new","name":"validationFunction","check":"Function"},children:[{type:"desc",attributes:{"text":"<p>function that validates the result\nthe function will be called with the new value and the old value and is\nsupposed to return the value that is set as the table value.</p>"}}]}]}]}