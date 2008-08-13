{type:"class",attributes:{"name":"TextArea","hasWarning":"true","packageName":"qx.legacy.ui.form","superClass":"qx.legacy.ui.form.TextField","fullName":"qx.legacy.ui.form.TextArea","type":"class"},children:[{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.core.Widget#element","overriddenFrom":"qx.legacy.ui.form.TextField","name":"_applyElement"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>element</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyElement}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.form.TextArea#wrap","name":"_applyWrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyWrap}.</p>"}}]},{type:"method",attributes:{"access":"protected","hasError":"true","overriddenFrom":"qx.legacy.ui.form.TextField","name":"_computePreferredInnerHeight"},children:[{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"30","line":"149"}}]}]},{type:"method",attributes:{"name":"getWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>wrap</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>wrap</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>wrap</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setWrap","fromProperty":"wrap"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>wrap</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleWrap","fromProperty":"wrap"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>wrap</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #wrap}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"allowStretchY","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.form.TextField"}},{type:"property",attributes:{"name":"appearance","docFrom":"qx.legacy.ui.core.Widget","defaultValue":"\"text-area\"","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.form.TextField"}},{type:"property",attributes:{"name":"spellCheck","docFrom":"qx.legacy.ui.form.TextField","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.ui.form.TextField"}},{type:"property",attributes:{"apply":"_applyWrap","defaultValue":"true","propertyType":"new","name":"wrap","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Controls whether text wrap is activated or not.\nThis property uses the style property &#8220;wrap&#8221; (IE) respectively &#8220;whiteSpace&#8221;</p>"}}]}]}]}