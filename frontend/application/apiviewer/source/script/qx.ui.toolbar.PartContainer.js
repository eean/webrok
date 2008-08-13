{type:"class",attributes:{"name":"PartContainer","packageName":"qx.ui.toolbar","superClass":"qx.ui.container.Composite","fullName":"qx.ui.toolbar.PartContainer","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"toolbar/part/container\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"show","defaultValue":"\"inherit\"","allowNull":"true","inheritable":"true","propertyType":"new","possibleValues":"\"both\",\"label\",\"icon\",\"none\"","event":"changeShow"},children:[{type:"desc",attributes:{"text":"<p>Whether icons, labels, both or none should be shown.</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeShow"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #show}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"name":"getShow","fromProperty":"show"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>show</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>show</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initShow","fromProperty":"show"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>show</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>show</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetShow","fromProperty":"show"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>show</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setShow","fromProperty":"show"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>show</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>show</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #show}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]}]}