{type:"class",attributes:{"name":"Slider","packageName":"qx.ui.form","superClass":"qx.ui.form.AbstractSlider","fullName":"qx.ui.form.Slider","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The Slider widget provides a vertical or horizontal slider.</p>\n\n<p>The Slider is the classic widget for controlling a bounded value.\nIt lets the user move a slider handle along a horizontal or vertical\ngroove and translates the handle&#8217;s position into an integer value\nwithin the defined range.</p>\n\n<p>The Slider has very few of its own functions; most of the functionality\nis in {@link AbstractSlider}. The most useful functions are slideTo()\nto set the slider directly to some value; setSingleStep(), setPageStep()\nto set the steps; and setMinimum() and setMaximum() to define the\nrange of the slider.</p>\n\n<p>A slider accepts focus on Tab and provides both a mouse wheel and\na keyboard interface. The keyboard interface is the following:</p>\n\n<ul>\n<li>Left/Right move a horizontal slider by one single step.</li>\n<li>Up/Down move a vertical slider by one single step.</li>\n<li>PageUp moves up one page.</li>\n<li>PageDown moves down one page.</li>\n<li>Home moves to the start (mininum).</li>\n<li>End moves to the end (maximum).</li>\n</ul>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"orientation"},children:[{type:"desc",attributes:{"text":"<p>Configure the {@link #orientation} property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"slider\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"focusable","docFrom":"qx.ui.core.Widget","defaultValue":"true","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_onKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming keypress event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Keypress"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler for keypress events.</p>\n\n<p>Adds support for arrow keys, page up, page down, home and end keys.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_onMouseWheel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>Incoming event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Listener of mousewheel event</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}