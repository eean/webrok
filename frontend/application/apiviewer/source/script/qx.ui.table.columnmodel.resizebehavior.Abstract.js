{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.ui.table.columnmodel.resizebehavior","superClass":"qx.core.Object","childClasses":"qx.ui.table.columnmodel.resizebehavior.Default","fullName":"qx.ui.table.columnmodel.resizebehavior.Abstract","type":"class"},children:[{type:"desc",attributes:{"text":"<p>An abstract resize behavior.  All resize behaviors should extend this\nclass.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","name":"_getAvailableWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]}]},{type:"desc",attributes:{"text":"<p>Determine the inner width available to columns in the table.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The available width</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"_setNumColumns"},children:[{type:"params",children:[{type:"param",attributes:{"name":"numColumns"},children:[{type:"desc",attributes:{"text":"<p>The numbrer of columns in use.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when the ResizeTableColumnModel is initialized, and upon loading of\na new TableModel, to allow the Resize Behaviors to know how many columns\nare in use.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"onAppear"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.  Of particular interest is the property\n    <i>_table</i> which is a reference to the table widget.  This allows\n    access to any other features of the table, for use in calculating widths\n    of columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The <i>onappear</i> event object.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"defaultValue":"false","name":"forceRefresh"},children:[{type:"desc",attributes:{"text":"<p>Whether a refresh should be forced</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when the table has first been rendered.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"onColumnWidthChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.  Of particular interest is the property\n    <i>_table</i> which is a reference to the table widget.  This allows\n    access to any other features of the table, for use in calculating widths\n    of columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The <i>widthChanged</i> event object.  This event has data, obtained via\n    event.getValue(), which is an object with three properties: the column\n    which changed width (data.col), the old width (data.oldWidth) and the new\n    width (data.newWidth).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when a column width is changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"onTableWidthChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.  Of particular interest is the property\n    <i>_table</i> which is a reference to the table widget.  This allows\n    access to any other features of the table, for use in calculating widths\n    of columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The <i>tableWidthChanged</i> event object.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when the table width changes due to either a window size change\nor a parent object changing size causing the table to change size.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"onVerticalScrollBarChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.  Of particular interest is the property\n    <i>_table</i> which is a reference to the table widget.  This allows\n    access to any other features of the table, for use in calculating widths\n    of columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The <i>verticalScrollBarChanged</i> event object.  This event has data,\n    obtained via event.getValue(), which is a boolean indicating whether a\n    vertical scroll bar is now present.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when the use of vertical scroll bar in the table changes, either\nfrom present to not present, or vice versa.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"onVisibilityChanged"},children:[{type:"params",children:[{type:"param",attributes:{"name":"tableColumnModel"},children:[{type:"desc",attributes:{"text":"<p>The table column model in use.  Of particular interest is the property\n    <i>_table</i> which is a reference to the table widget.  This allows\n    access to any other features of the table, for use in calculating widths\n    of columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.ui.table.columnmodel.Resize"}}]}]},{type:"param",attributes:{"name":"event"},children:[{type:"desc",attributes:{"text":"<p>The <i>visibilityChanged</i> event object.  This event has data, obtained\n    via event.getValue(), which is an object with two properties: the column\n    which changed width (data.col) and the new visibility of the column\n    (data.visible).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Called when a column visibility is changed.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}