{type:"class",attributes:{"isAbstract":"true","name":"Abstract","packageName":"qx.legacy.ui.table.model","superClass":"qx.core.Object","childClasses":"qx.legacy.ui.table.model.Remote,qx.legacy.ui.table.model.Simple","fullName":"qx.legacy.ui.table.model.Abstract","type":"class","interfaces":"qx.legacy.ui.table.ITableModel"},children:[{type:"desc",attributes:{"text":"<p>An abstract table model that performs the column handling, so subclasses only\nneed to care for row handling.</p>"}},{type:"events",children:[{type:"event",attributes:{"name":"dataChanged"},children:[{type:"desc",attributes:{"text":"<p>Fired when the table data changed (the stuff shown in the table body).\nThe data property of the event may be null or a map having the following attributes:\n<ul>\n  <li>firstRow: The index of the first row that has changed.</li>\n  <li>lastRow: The index of the last row that has changed.</li>\n  <li>firstColumn: The model index of the first column that has changed.</li>\n  <li>lastColumn: The model index of the last column that has changed.</li>\n</ul></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}]}]},{type:"event",attributes:{"name":"metaDataChanged"},children:[{type:"desc",attributes:{"text":"<p>Fired when the meta data changed (the stuff shown in the table header).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.DataEvent"}}]}]}]},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getColumnCount"}},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getColumnId"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getColumnIndexById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getColumnName"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getRowCount"}},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getRowData"},children:[{type:"params",children:[{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getSortColumnIndex"}},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"getValueById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}},{type:"param",attributes:{"name":"rowIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"isColumnEditable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"isColumnSortable"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"isSortAscending"}},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"prefetchRows"},children:[{type:"params",children:[{type:"param",attributes:{"name":"firstRowIndex"}},{type:"param",attributes:{"name":"lastRowIndex"}}]}]},{type:"method",attributes:{"name":"setColumnIds"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIdArr"},children:[{type:"desc",attributes:{"text":"<p>the IDs of the columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column IDs. These IDs may be used internally to identify a\ncolumn.</p>\n\n<p>Note: This will clear previously set column names.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumns"}}]},{type:"method",attributes:{"name":"setColumnNamesById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameMap"},children:[{type:"desc",attributes:{"text":"<p>a map containing the column IDs as keys and the\n         column name as values.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column names. These names will be shown to the user.</p>\n\n<p>Note: The column IDs have to be defined before.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumnIds"}}]},{type:"method",attributes:{"name":"setColumnNamesByIndex"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameArr"},children:[{type:"desc",attributes:{"text":"<p>the names of the columns.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column names. These names will be shown to the user.</p>\n\n<p>Note: The column IDs have to be defined before.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]},{type:"see",attributes:{"name":"#setColumnIds"}}]},{type:"method",attributes:{"name":"setColumns"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnNameArr"},children:[{type:"desc",attributes:{"text":"<p>The column names. These names will be shown to\n         the user.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"columnIdArr"},children:[{type:"desc",attributes:{"text":"<p>The column IDs. These IDs may be used\n         internally to identify a column. If null, the column names are used as\n         IDs.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String","dimensions":"1"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the column names (and optionally IDs)</p>\n\n<p>Note: You can not change the <em>number</em> of columns this way.  The number\n      of columns is highly intertwined in the entire table operation,\n      and dynamically changing it would require as much work as just\n      recreating your table.  If you must change the number of columns\n      in a table then you should remove the table and add a new one.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"setValueById"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnId"}},{type:"param",attributes:{"name":"rowIndex"}},{type:"param",attributes:{"name":"value"}}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.ui.table.ITableModel","name":"sortByColumn"},children:[{type:"params",children:[{type:"param",attributes:{"name":"columnIndex"}},{type:"param",attributes:{"name":"ascending"}}]}]}]}]}