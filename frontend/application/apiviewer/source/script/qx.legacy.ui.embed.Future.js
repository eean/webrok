{type:"class",attributes:{"name":"Future","hasWarning":"true","packageName":"qx.legacy.ui.embed","superClass":"qx.legacy.ui.basic.Terminator","fullName":"qx.legacy.ui.embed.Future","type":"class"},children:[{type:"desc",attributes:{"text":"<p>Embed a new qooxdoo 0.8 widget into a legacy ui application.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.core.Widget","overriddenFrom":"qx.legacy.ui.core.Widget","name":"_afterAppear"}},{type:"method",attributes:{"access":"protected","apply":"qx.legacy.ui.embed.Future#content","name":"_applyContent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyContent}.</p>"}}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_changeInnerHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vNew"}},{type:"param",attributes:{"name":"vOld"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"20","line":"128"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_changeInnerWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vNew"}},{type:"param",attributes:{"name":"vOld"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"120"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.basic.Terminator","overriddenFrom":"qx.legacy.ui.basic.Terminator","name":"_computePreferredInnerHeight"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.basic.Terminator","overriddenFrom":"qx.legacy.ui.basic.Terminator","name":"_computePreferredInnerWidth"}},{type:"method",attributes:{"access":"protected","name":"_setPaneHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"height"},children:[{type:"desc",attributes:{"text":"<p>new height</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the size of the content</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_setPaneWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>new width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the size of the content</p>"}}]},{type:"method",attributes:{"name":"getContent","fromProperty":"content"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initContent","fromProperty":"content"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>content</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetContent","fromProperty":"content"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>content</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setContent","fromProperty":"content"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"content","defaultValue":"null","allowNull":"true","propertyType":"new","apply":"_applyContent","check":"qx.ui.core.Widget"},children:[{type:"desc",attributes:{"text":"<p>The qooxdoo 0.8 widget to embed. The widget will be stretched to the size\nof the embed widget.</p>"}}]}]}]}