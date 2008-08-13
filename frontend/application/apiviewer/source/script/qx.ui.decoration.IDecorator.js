{type:"class",attributes:{"name":"IDecorator","hasWarning":"true","packageName":"qx.ui.decoration","implementations":"qx.ui.decoration.Abstract","fullName":"qx.ui.decoration.IDecorator","type":"interface"},children:[{type:"desc",attributes:{"text":"<p>A decorator is responsible for rendering a widget&#8217;s background and\nborder. It is passed the widget&#8217;s decoration element {@link qx.html.Element}\nand configures it to display the decoration. Each time a widget is resized\nthe decorator&#8217;s {@link #render} gets called. Each decorator must also support\nthe method {@link #reset} which is called when the decoration changed to\nanother class. Switches of a decoration object of the same class should\nbe supported by the {@link #render} method as well. This means that every\nupdate must apply all relevant styles for the decoration.</p>"}},{type:"methods",children:[{type:"method",attributes:{"name":"getInsets"},children:[{type:"desc",attributes:{"text":"<p>Get the amount of space, the decoration needs for its border on each\nside.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the desired insed a map with the keys <code>top</code>,\n    <code>right</code>, <code>bottom</code>, <code>left</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"render"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s decoration element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.html.Element"}}]}]},{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s new width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"height"},children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s new height</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"backgroundColor"},children:[{type:"desc",attributes:{"text":"<p>an optional <span class=\"caps\">CSS</span> background color value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"changes"},children:[{type:"desc",attributes:{"text":"<p>Flags for all changes: <code>init</code>, <code>size</code>,\n  <code>style</code> and <code>bgcolor</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Render the decoration size of the given decoration element.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Contains information for a non-existing parameter <code>updateSize</code>.","column":"8","line":"48"}}]}]},{type:"method",attributes:{"name":"reset"},children:[{type:"params",children:[{type:"param",attributes:{"name":"element"},children:[{type:"desc",attributes:{"text":"<p>The widget&#8217;s decoration element.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.html.Element"}}]}]}]},{type:"desc",attributes:{"text":"<p>Reset all properties set by the decoration on the widget&#8217;s decoration\nelement.</p>"}}]}]}]}