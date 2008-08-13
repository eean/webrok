{type:"class",attributes:{"name":"Progressive","hasWarning":"true","packageName":"qx.ui.progressive","superClass":"qx.ui.layout.VBox","fullName":"qx.ui.progressive.Progressive","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"structure"},children:[{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.structure.Abstract"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"progress"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after each batch of elements is rendered, and\ncontrol is about to be yielded to the browser.  This is an appropriate\nevent to listen for, to implement a progress bar.</p>\n\n<p>The event data is an object with the following members:\n<dl>\n  <dt>initial</dt>\n  <dd>\n    The number of elements that were available at the start of this\n    rendering request.\n  </dd></p>\n\n<dt>remaining</dt>\n  <dd>\n    The number of elements still remaining to be rendered.\n  </dd>\n</dl>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"progressDetail"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after each element is rendered.</p>\n\n<p>The event data is an object with the following members:\n<dl>\n  <dt>initial</dt>\n  <dd>\n    The number of elements that were available at the start of this\n    rendering request.\n  </dd></p>\n\n<dt>remaining</dt>\n  <dd>\n    The number of elements still remaining to be rendered.\n  </dd>\n\n<dt>element</dt>\n  <dd>\n    The object, returned by the data model's getNextElement() method,\n    that was just rendered.\n  </dd>\n</dl>\n\n<p>Note: Unless batchSize is set to 1 or we happen to be at the end of a\n      batch, widgets will not be rendered at this time.  Use this event\n      for programmatically processing rendered elements, but not for\n      such things as progress bars.  Instead, where only user-visible\n      changes such as progress bars are being updated, use the\n      &#8220;progress&#8221; event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"renderEnd"},children:[{type:"desc",attributes:{"text":"<p>Event fired when rendering ends.  The data is the state object.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"renderStart"},children:[{type:"desc",attributes:{"text":"<p>Event fired when rendering begins.</p>\n\n<p>The event data is an object with the following members:\n<dl>\n  <dt>state</dt>\n  <dd>\n    The state object.  \n  </dd></p>\n\n<dt>initial</dt>\n    The number of elements that are available to be rendered\n  <dd>\n  </dd>\n</dl>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"widthChanged"},children:[{type:"desc",attributes:{"text":"<p>This event is fired when the Progressive first appears, and whenever\nthe width of this Progressive changes.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Event"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","name":"__createStateRendererData"},children:[{type:"desc",attributes:{"text":"<p>Create the array of empty objects for use by the renderers.</p>"}}]},{type:"method",attributes:{"access":"private","hasError":"true","name":"__dataAvailable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"}}]},{type:"desc",attributes:{"text":"<p>Event callback for the &#8220;dataAvailable&#8221; event.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>e</code> is not documented.","column":"17","line":"439"}}]}]},{type:"method",attributes:{"access":"private","hasError":"true","name":"__renderElementBatch"},children:[{type:"params",children:[{type:"param",attributes:{"name":"state"}}]},{type:"desc",attributes:{"text":"<p>Render a batch of elements.  The batch size is determined by the\nProgressive&#8217;s batch size at the time that rendering began.  That batch\nsize was copied into the {@link qx.ui.progressive.State} object and is\nused herein.</p>"}},{type:"errors",children:[{type:"error",attributes:{"msg":"Parameter <code>state</code> is not documented.","column":"22","line":"362"}}]}]},{type:"method",attributes:{"access":"protected","apply":"qx.ui.progressive.Progressive#dataModel","name":"_applyDataModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new data model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.model.Abstract"}}]},{type:"desc",attributes:{"text":"<p>The old data model.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.model.Abstract"}}]}]},{type:"param",attributes:{"name":"old"}}]},{type:"desc",attributes:{"text":"<p>Called when the dataModel property is changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_changeInnerWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"newValue"}},{type:"param",attributes:{"name":"oldValue"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"324"}}]}]},{type:"method",attributes:{"name":"addRenderer"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>Name referenced in the data model when this renderer is to be used.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]},{type:"param",attributes:{"name":"renderer"},children:[{type:"desc",attributes:{"text":"<p>Renderer object used if the data model references the specified name.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.progressive.renderer.Abstract"}}]}]}]},{type:"desc",attributes:{"text":"<p>Add a renderer that can be referenced by the data model.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"getBatchSize","fromProperty":"batchSize"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>batchSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #batchSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>batchSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getDataModel","fromProperty":"dataModel"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>dataModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dataModel}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>dataModel</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initBatchSize","fromProperty":"batchSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>batchSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>batchSize</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #batchSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initDataModel","fromProperty":"dataModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>dataModel</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>dataModel</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #dataModel}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"removeRenderer"},children:[{type:"params",children:[{type:"param",attributes:{"name":"name"},children:[{type:"desc",attributes:{"text":"<p>Remove the renderer which was assigned this name.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Remove a previosly added renderer.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"render"},children:[{type:"desc",attributes:{"text":"<p>Render the elements available from the data model.  Elements are\nrendered in batches of size {@link #batchSize}.  After each batch of\nelements are rendered, control is returned temporarily to the\nbrowser, so that actual screen updates can take place.  A timer is\nused to regain control a short while later, in order to render the\nnext batch of element.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"Void"}}]}]}]},{type:"method",attributes:{"name":"resetBatchSize","fromProperty":"batchSize"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>batchSize</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #batchSize}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetDataModel","fromProperty":"dataModel"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>dataModel</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #dataModel}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setBatchSize","fromProperty":"batchSize"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>batchSize</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>batchSize</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #batchSize}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setDataModel","fromProperty":"dataModel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>dataModel</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>dataModel</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #dataModel}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"20","name":"batchSize","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>Number of elements to render at one time.  After this number of\nelements has been rendered, control will be yielded to the browser\nallowing the elements to actually be displayed.  A short-interval timer\nwill be set, to regain control to render the next batch of elements.</p>"}}]},{type:"property",attributes:{"apply":"_applyDataModel","name":"dataModel","propertyType":"new"},children:[{type:"desc",attributes:{"text":"<p>The data model.</p>"}}]}]}]}