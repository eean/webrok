{type:"class",attributes:{"name":"DomEvent","hasWarning":"true","packageName":"qx.legacy.event.type","superClass":"qx.event.type.Event","childClasses":"qx.legacy.event.type.KeyEvent,qx.legacy.event.type.MouseEvent","fullName":"qx.legacy.event.type.DomEvent","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vType"}},{type:"param",attributes:{"name":"vDomEvent"}},{type:"param",attributes:{"name":"vDomTarget"}},{type:"param",attributes:{"name":"vTarget"}},{type:"param",attributes:{"name":"vOriginalTarget"}}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"type":"Number","name":"META_MASK","value":"8"},children:[{type:"desc",attributes:{"text":"<p>The modifier mask for the meta key (e.g. apple key on Macs).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"ALT_MASK","value":"4"},children:[{type:"desc",attributes:{"text":"<p>The modifier mask for the alt key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"SHIFT_MASK","value":"1"},children:[{type:"desc",attributes:{"text":"<p>The modifier mask for the shift key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]},{type:"constant",attributes:{"type":"Number","name":"CTRL_MASK","value":"2"},children:[{type:"desc",attributes:{"text":"<p>The modifier mask for the control key.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"int"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_computeModifiers"},children:[{type:"desc",attributes:{"text":"<p>property computer</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isAltPressed"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the the alt key is pressed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the the alt key is pressed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isCtrlOrCommandPressed"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the ctrl key or (on the Mac) the command key is pressed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<code>true</code> if the command key is pressed on the Mac\n          or the ctrl key is pressed on another system."}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isCtrlPressed"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the the ctrl key is pressed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the the ctrl key is pressed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isMetaPressed"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the the meta key is pressed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the the meta key is pressed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isShiftPressed"},children:[{type:"desc",attributes:{"text":"<p>Returns whether the the shift key is pressed.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>whether the the shift key is pressed.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.event.type.Event","overriddenFrom":"qx.event.type.Event","name":"preventDefault"}},{type:"method",attributes:{"hasError":"true","name":"setDefaultPrevented"},children:[{type:"params",children:[{type:"param",attributes:{"name":"vValue"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>vValue</code> is not documented.","column":"1","line":"1"}},{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"1"}}]}]}]}]}