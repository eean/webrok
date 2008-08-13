{type:"class",attributes:{"packageName":"qx.legacy.ui.treevirtual","fullName":"qx.legacy.ui.treevirtual.MNode","type":"mixin","name":"MNode"},children:[{type:"methods",children:[{type:"method",attributes:{"isMixin":"true","name":"nodeGet"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node to get.  The node can be represented either by the node\n  object, or the node id (as would have been returned by addBranch(),\n  addLeaf(), etc.).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get a node object given its node id.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>If the nodeReference is a node object itself, that same node object\n  is returned (identity).  Otherwise, the node object is looked up\n  using the specified node id.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetCellStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the cell style is being retrieved.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the cell style for a node</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> style being applied for the tree column cell for this node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetHideOpenClose"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the hideOpenClose state is being retrieved.  The\n  node can be represented either by the node object, or the node id (as\n  would have been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the hideOpenClose state for a node.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The new hideOpenClose state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the icon is being retrieved.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the icon for a node when in its unselected (normal) state.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The path to the icon to be used when the node is not selected, if a\n  path has been previously provided (i.e. not using the default icon).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetLabel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the label is being retrieved.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the label for a node.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The label for the specified node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetLabelStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the label style is being retrieved.  The node can\n  be represented either by the node object, or the node id (as would\n  have been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the label style for a node</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> style being applied for the label for this node, if a style\n  has been previously provided (i.e. not using the default style).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetOpened"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the opened state is being retrieved.  The node can\n  be represented either by the node object, or the node id (as would\n  have been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the opened state for a node.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The opened state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetSelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the selected state is being retrieved.  The node\n  can be represented either by the node object, or the node id (as\n  would have been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the selected state for a node.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The selected state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeGetSelectedIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the icon is being retrieved.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Get the icon for a node when in its selected state.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The path to the icon to be used when the node is selected, if a path\n  has been previously provided (i.e. not using the default icon).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetCellStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the cell style is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> style to be applied for the tree column cell for this node,\n  if a style has been previously provided (i.e. not using the default\n  style).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the cell style for a node</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetHideOpenClose"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the hideOpenClose state is being set.  The node\n  can be represented either by the node object, or the node id (as\n  would have been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"b"},children:[{type:"desc",attributes:{"text":"<p>The new hideOpenClose state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the hideOpenClose state for a node.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the icon is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"path"},children:[{type:"desc",attributes:{"text":"<p>The path to the icon to be used when the node is not selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the icon for a node when in its unselected (normal) state.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetLabel"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the label is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"label"},children:[{type:"desc",attributes:{"text":"<p>The new label for the specified node</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the label for a node.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetLabelStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the label style is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"style"},children:[{type:"desc",attributes:{"text":"<p>The <span class=\"caps\">CSS</span> style to be applied for the label for this node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the label style for a node</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetOpened"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the opened state is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"b"},children:[{type:"desc",attributes:{"text":"<p>The new opened state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the opened state for a node.  (Note that this method has no effect\nif the requested state is the same as the current state.)</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetSelected"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the selected state is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"b"},children:[{type:"desc",attributes:{"text":"<p>The new selected state for the specified node.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the selected state for a node.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetSelectedIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which the icon is being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"path"},children:[{type:"desc",attributes:{"text":"<p>The path to the icon to be used when the node is selected</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set the icon for a node when in its selected state.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeSetState"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node for which attributes are being set.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"attributes"},children:[{type:"desc",attributes:{"text":"<p>Map with the node properties to be set.  The map may contain any of\n  the properties described in\n  {@link qx.legacy.ui.treevirtual.SimpleTreeDataModel}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Set state attributes of a tree node.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"isMixin":"true","name":"nodeToggleOpened"},children:[{type:"params",children:[{type:"param",attributes:{"name":"nodeReference"},children:[{type:"desc",attributes:{"text":"<p>The node to have its opened/closed state toggled.  The node can be\n  represented either by the node object, or the node id (as would have\n  been returned by addBranch(), addLeaf(), etc.)</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Object"}},{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Toggle the opened state of the node: if the node is opened, close\nit; if it is closed, open it.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]}]}]}