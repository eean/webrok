{type:"class",attributes:{"isStatic":"true","name":"Dispose","packageName":"qx.ui.core.queue","fullName":"qx.ui.core.queue.Dispose","type":"class"},children:[{type:"desc",attributes:{"text":"<p>The DisposeQueue registers all widgets which are should be disposed.\nThis queue makes it possible to remove widgets from the <span class=\"caps\">DOM</span> using\nthe layout and element queues and dispose them afterwards.</p>"}},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"add"},children:[{type:"params",children:[{type:"param",attributes:{"name":"widget"},children:[{type:"desc",attributes:{"text":"<p>The widget to add.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.core.Widget"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds a widget to the queue.</p>\n\n<p>Should only be used by {@link qx.ui.core.Widget}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"flush"},children:[{type:"desc",attributes:{"text":"<p>Flushes the dispose queue.</p>\n\n<p>This is used exclusively by the {@link qx.ui.core.QueueManager}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}