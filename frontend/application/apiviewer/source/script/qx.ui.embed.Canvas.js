{type:"class",attributes:{"name":"Canvas","packageName":"qx.ui.embed","superClass":"qx.ui.core.Widget","fullName":"qx.ui.embed.Canvas","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The Canvas widget embeds the <span class=\"caps\">HMTL</span> canvas element\n[<a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas.html#the-canvas\">W3C-HTML5</a>]</p>\n\n<p>Note: This widget does not work in Internet Explorer!</p>\n\n<p>To paint something on the canvas and keep the content updated on resizes you\neither have to override the {@link #_draw} method or redraw the content on\nthe {@link #redraw} event. The drawing context can be obtained by {@link #getCanvas2d}.</p>\n\n<p>Note that this widget operates on two different coordinate systems. The canvas\nhas its own coordinate system for drawing operations. This canvas coordinate\nsystem is scaled to fit actual size of the <span class=\"caps\">DOM</span> element. Each time the size of\nthe canvas dimensions is changes a redraw is required. In this case the\nprotected method {@link #_draw} is called and the event {@link #redraw}\nis fired. You can synchronize the internal canvas dimension with the\n<span class=\"caps\">CSS</span> dimension of the canvas element by setting {@link #syncDimension} to\n<code>true</code>.</p>\n\n<p><strong>Example</strong></p>\n\n<p>Here is a little example of how to use the canvas widget.</p>\n\n<pre class=\"javascript\">\nvar canvas = new qx.ui.embed.Canvas().set({\n  canvasWidth: 200,\n  canvasHeight: 200,\n  syncDimension: true\n});\ncanvas.addListener(\"redraw\", function(e)\n{\n  var data = e.getData();\n  var width = data.width;\n  var height = data.height;\n  var ctx = data.context;\n\n  ctx.fillStyle = \"rgb(200,0,0)\";\n  ctx.fillRect (20, 20, width-5, height-5);\n\n  ctx.fillStyle = \"rgba(0, 0, 200, 0.5)\";\n  ctx.fillRect (70, 70, 105, 100);\n}, this);\n</pre>\n\n<p><strong>External Documentation</strong></p>\n\n<a href=\"http://qooxdoo.org/documentation/0.8/widget/canvas\" target=\"_blank\">\nDocumentation of this widget in the qooxdoo wiki.</a>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"canvasWidth"},children:[{type:"desc",attributes:{"text":"<p>The internal with of the canvas coordinates.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"canvasHeight"},children:[{type:"desc",attributes:{"text":"<p>The internal height of the canvas coordinates.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"redraw"},children:[{type:"desc",attributes:{"text":"<p>The redraw event is fired each time the canvas dimension change and the\ncanvas needs to be updated. The data field contains a map containing the\n<code>width</code> and <code>height</code> of the canvas and the\nrendering <code>context</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__redraw"},children:[{type:"desc",attributes:{"text":"<p>This methods triggers the redraw of the canvas&#8217; content</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.embed.Canvas#canvasHeight","name":"_applyCanvasHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>canvasHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCanvasHeight}.</p>"}}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.embed.Canvas#canvasWidth","name":"_applyCanvasWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>canvasWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyCanvasWidth}.</p>"}}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createContentElement"}},{type:"method",attributes:{"access":"protected","name":"_draw"},children:[{type:"params",children:[{type:"param",attributes:{"name":"width"},children:[{type:"desc",attributes:{"text":"<p>New canvas width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"height"},children:[{type:"desc",attributes:{"text":"<p>New canvas height</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"context"},children:[{type:"desc",attributes:{"text":"<p>The rendering context to draw to</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"CanvasRenderingContext2D"}}]}]}]},{type:"desc",attributes:{"text":"<p>Template method, which can be used by derived classes to redraw the\ncontent. It is called each time the canvas dimension change and the\ncanvas needs to be updated.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onResize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The resize event object</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Widget resize event handler. Updates the canvas dimension if needed.</p>"}}]},{type:"method",attributes:{"name":"getCanvasHeight","fromProperty":"canvasHeight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>canvasHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>canvasHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getCanvasWidth","fromProperty":"canvasWidth"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>canvasWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>canvasWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getContext2d"},children:[{type:"desc",attributes:{"text":"<p>Get the native canvas 2D rendering context\n[<a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas.html#canvasrenderingcontext2d\">W3C-HTML5</a>].\nAll drawing operations are performed on this context.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The 2D rendering context.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"CanvasRenderingContext2D"}}]}]}]},{type:"method",attributes:{"name":"getSyncDimension","fromProperty":"syncDimension"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>syncDimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>syncDimension</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initCanvasHeight","fromProperty":"canvasHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>canvasHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>canvasHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initCanvasWidth","fromProperty":"canvasWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>canvasWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>canvasWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initSyncDimension","fromProperty":"syncDimension"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>syncDimension</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>syncDimension</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isSyncDimension","fromProperty":"syncDimension"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>syncDimension</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetCanvasHeight","fromProperty":"canvasHeight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>canvasHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasHeight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetCanvasWidth","fromProperty":"canvasWidth"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>canvasWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasWidth}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetSyncDimension","fromProperty":"syncDimension"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>syncDimension</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setCanvasHeight","fromProperty":"canvasHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>canvasHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>canvasHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setCanvasWidth","fromProperty":"canvasWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>canvasWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>canvasWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #canvasWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setSyncDimension","fromProperty":"syncDimension"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>syncDimension</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>syncDimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleSyncDimension","fromProperty":"syncDimension"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>syncDimension</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #syncDimension}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyCanvasHeight","defaultValue":"150","propertyType":"new","name":"canvasHeight","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The internal height of the canvas coordinates</p>"}}]},{type:"property",attributes:{"apply":"_applyCanvasWidth","defaultValue":"300","propertyType":"new","name":"canvasWidth","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The internal with of the canvas coordinates</p>"}}]},{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"syncDimension","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether canvas and widget coordinates should be synchronized</p>"}}]}]}]}