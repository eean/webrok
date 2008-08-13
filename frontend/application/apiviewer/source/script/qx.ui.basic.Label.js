{type:"class",attributes:{"name":"Label","packageName":"qx.ui.basic","superClass":"qx.ui.core.Widget","fullName":"qx.ui.basic.Label","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The label class brings typical text content to the widget system.</p>\n\n<p>It supports simple text nodes, but complex <span class=\"caps\">HTML</span> as well. The default\ncontent mode is for text. The mode is changeable through the property\n{@link #htmlMode}.</p>\n\n<p>The label supports heightForWidth when used in <span class=\"caps\">HTML</span> mode. This means\nthat multi line <span class=\"caps\">HTML</span> automatically computes the correct preferred height.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"content"},children:[{type:"desc",attributes:{"text":"<p>Text or <span class=\"caps\">HTML</span> content to use</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"allowGrowX","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"allowGrowY","docFrom":"qx.ui.core.LayoutItem","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"label\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"content","check":"String","allowNull":"true","propertyType":"new","apply":"_applyContent","event":"changeContent"},children:[{type:"desc",attributes:{"text":"<p>Contains the <span class=\"caps\">HTML</span> or text content. Interpretation depends on the value\nof {@link #rich}. In text mode entities and other <span class=\"caps\">HTML</span> special content\nis not supported. But it is possible to use unicode escape sequences\nto insert symbols and other non <span class=\"caps\">ASCII</span> characters.</p>"}}]},{type:"property",attributes:{"apply":"_applyRich","defaultValue":"false","propertyType":"new","name":"rich","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Switches between rich <span class=\"caps\">HTML</span> and text content. The text mode (<code>false</code>) supports\nadvanced features like ellipsis when the available space is not\nenough. <span class=\"caps\">HTML</span> mode (<code>true</code>) supports multi-line content and all the\nmarkup features of <span class=\"caps\">HTML</span> content.</p>"}}]},{type:"property",attributes:{"name":"textAlign","allowNull":"true","propertyType":"new","possibleValues":"\"left\",\"center\",\"right\"","apply":"_applyTextAlign","themeable":"true"},children:[{type:"desc",attributes:{"text":"<p>Control the text alignment</p>"}}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeContent"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #content}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__computeContentSize"},children:[{type:"desc",attributes:{"text":"<p>Internal utility to compute the content dimensions.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#content","name":"_applyContent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyContent}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#font","overriddenFrom":"qx.ui.core.Widget","name":"_applyFont"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Font"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Font"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>font</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyFont}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#rich","name":"_applyRich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyRich}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.basic.Label#textAlign","name":"_applyTextAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextAlign}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.core.Widget#textColor","overriddenFrom":"qx.ui.core.Widget","name":"_applyTextColor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Color"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>textColor</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyTextColor}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createContentElement"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_getContentHeightForWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_getContentHint"}},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.LayoutItem","overriddenFrom":"qx.ui.core.LayoutItem","name":"_hasHeightForWidth"}},{type:"method",attributes:{"name":"getContent","fromProperty":"content"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initContent","fromProperty":"content"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>content</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initRich","fromProperty":"rich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>rich</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>textAlign</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>rich</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetContent","fromProperty":"content"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>content</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>rich</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetTextAlign","fromProperty":"textAlign"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>textAlign</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setContent","fromProperty":"content"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>content</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>content</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #content}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setRich","fromProperty":"rich"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>rich</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setTextAlign","fromProperty":"textAlign"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>textAlign</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>textAlign</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #textAlign}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleRich","fromProperty":"rich"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>rich</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #rich}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]}]}