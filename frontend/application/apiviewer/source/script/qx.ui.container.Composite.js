{type:"class",attributes:{"name":"Composite","packageName":"qx.ui.container","mixins":"qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling","superClass":"qx.ui.core.Widget","childClasses":"qx.ui.container.Resizer,qx.ui.popup.Popup,qx.ui.table.headerrenderer.HeaderCell,qx.ui.table.pane.Clipper,qx.ui.table.pane.FocusIndicator,qx.ui.tabview.Page,qx.ui.toolbar.PartContainer","fullName":"qx.ui.container.Composite","type":"class"},children:[{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"name":"layout"},children:[{type:"desc",attributes:{"text":"<p>A layout instance to use to\n  place widgets on the screen.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.layout.Abstract"}}]}]}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"addChildWidget"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after a child widget was added to this widget. The\n{@link qx.event.type.Data#getData} method of the event returns the\nadded child.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"removeChildWidget"},children:[{type:"desc",attributes:{"text":"<p>This event is fired after a child widget has been removed from this widget.\nThe {@link qx.event.type.Data#getData} method of the event returns the\nremoved child.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterAddChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_afterRemoveChild"},children:[{type:"params",children:[{type:"param",attributes:{"name":"child"}}]}]}]}]}