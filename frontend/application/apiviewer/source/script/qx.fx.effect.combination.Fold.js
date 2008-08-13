{type:"class",attributes:{"name":"Fold","packageName":"qx.fx.effect.combination","superClass":"qx.fx.Base","fullName":"qx.fx.effect.combination.Fold","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Combination effect &#8220;Fold&#8221;</p>\n\n<p>The specified element will shrink in width and height and become invisible.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">DOM</span> element</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_cleanUp"},children:[{type:"desc",attributes:{"text":"<p>Restores style properties of animated element\nafter effect has finished.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_getStyle"},children:[{type:"desc",attributes:{"text":"<p>Retrieves style properties from element.</p>"}}]},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"afterFinish"}},{type:"method",attributes:{"name":"getMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>mode</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>modifyDisplay</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>modifyDisplay</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetMode","fromProperty":"mode"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>mode</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>modifyDisplay</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setMode","fromProperty":"mode"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>mode</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>mode</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #mode}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>modifyDisplay</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.fx.Base","overriddenFrom":"qx.fx.Base","name":"start"}},{type:"method",attributes:{"name":"toggleModifyDisplay","fromProperty":"modifyDisplay"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>modifyDisplay</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #modifyDisplay}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"possibleValues":"\"in\",\"out\"","defaultValue":"\"in\"","name":"mode","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>String indicating if element should fold in or out</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"modifyDisplay","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Flag indicating if the <span class=\"caps\">CSS</span> attribute &#8220;display&#8221;\nshould be modified by effect</p>"}}]}]}]}