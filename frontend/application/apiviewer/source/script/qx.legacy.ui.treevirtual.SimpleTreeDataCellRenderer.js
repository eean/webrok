{type:"class",attributes:{"name":"SimpleTreeDataCellRenderer","hasWarning":"true","packageName":"qx.legacy.ui.treevirtual","superClass":"qx.legacy.ui.table.cellrenderer.Abstract","childClasses":"qx.legacy.ui.treevirtual.CheckBoxDataCellRenderer","fullName":"qx.legacy.ui.treevirtual.SimpleTreeDataCellRenderer","type":"class"},children:[{type:"desc",attributes:{"text":"<p>A data cell renderer for the tree column of a simple tree</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"constants",children:[{type:"constant",attributes:{"type":"String","name":"IMG_END","value":"\"/>"}},{type:"constant",attributes:{"hasError":"true","name":"MAIN_DIV_STYLE"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"1","line":"92"}}]}]},{type:"constant",attributes:{"type":"String","name":"IMG_TITLE_START","value":"\" title=\""}},{type:"constant",attributes:{"type":"String","name":"IMG_START","value":"<img src=\""}}]},{type:"methods",children:[{type:"method",attributes:{"access":"private","hasError":"true","name":"__addImage"},children:[{type:"params",children:[{type:"param",attributes:{"name":"urlAndToolTip"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"12","line":"176"}}]}]},{type:"method",attributes:{"access":"protected","name":"_addExtraContentBeforeIcon"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"},children:[{type:"desc",attributes:{"text":"<p>The information about the cell.\n         See {@link qx.legacy.ui.table.cellrenderer.Abstract#createDataCellHtml}.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"desc",attributes:{"text":"<p>Adds extra content just before the icon.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>with the <span class=\"caps\">HTML</span> and width in pixels of the rendered content.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Map"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.legacy.ui.table.cellrenderer.Abstract","name":"_getCellStyle"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.legacy.ui.table.cellrenderer.Abstract","overriddenFrom":"qx.legacy.ui.table.cellrenderer.Abstract","name":"_getContentHtml"},children:[{type:"params",children:[{type:"param",attributes:{"name":"cellInfo"}}]}]},{type:"method",attributes:{"access":"protected","name":"_getIndentSymbol"},children:[{type:"params",children:[{type:"param",attributes:{"name":"column"},children:[{type:"desc",attributes:{"text":"<p>The column of indentation being requested, zero-relative</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"name":"node"},children:[{type:"desc",attributes:{"text":"<p>The node being displayed in the row.  The properties of a node are\n  described in {@link qx.legacy.ui.treevirtual.SimpleTreeDataModel}</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Node"}}]}]},{type:"param",attributes:{"name":"bUseTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Whether to find an appropriate tree line icon, or simply provide\n  white space.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"bAlwaysShowOpenCloseSymbol"},children:[{type:"desc",attributes:{"text":"<p>Whether to display the open/close icon for a node even if it has no\n  children.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]},{type:"param",attributes:{"name":"bExcludeFirstLevelTreeLines"},children:[{type:"desc",attributes:{"text":"<p>If bUseTreeLines is enabled, then further filtering of the left-most\n  tree line may be specified here.  If <i>true</i> then the left-most\n  tree line, between top-level siblings, will not be displayed.\n  If <i>false</i>, then the left-most tree line wiill be displayed\n  just like all of the other tree lines.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"desc",attributes:{"text":"<p>Determine the symbol to use for indentation of a tree row, at a\nparticular column.  The indentation to use may be just white space or\nmay be a tree line.  Tree lines come in numerous varieties, so the\nappropriate one is selected.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>alwaysShowOpenCloseSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>alwaysShowOpenCloseSymbol</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>excludeFirstLevelTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>excludeFirstLevelTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>alwaysShowOpenCloseSymbol</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>alwaysShowOpenCloseSymbol</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>excludeFirstLevelTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>excludeFirstLevelTreeLines</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>useTreeLines</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>alwaysShowOpenCloseSymbol</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>excludeFirstLevelTreeLines</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>useTreeLines</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"resetAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>alwaysShowOpenCloseSymbol</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>excludeFirstLevelTreeLines</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>useTreeLines</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>alwaysShowOpenCloseSymbol</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>alwaysShowOpenCloseSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>excludeFirstLevelTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>excludeFirstLevelTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>useTreeLines</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleAlwaysShowOpenCloseSymbol","fromProperty":"alwaysShowOpenCloseSymbol"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>alwaysShowOpenCloseSymbol</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #alwaysShowOpenCloseSymbol}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleExcludeFirstLevelTreeLines","fromProperty":"excludeFirstLevelTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>excludeFirstLevelTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #excludeFirstLevelTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"toggleUseTreeLines","fromProperty":"useTreeLines"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>useTreeLines</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #useTreeLines}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"hasError":"true","name":"useTreeLines"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"14","line":"157"}}]}]}]},{type:"properties",children:[{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"alwaysShowOpenCloseSymbol","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Set whether the open/close button should be displayed on a branch, even\nif the branch has no children.</p>"}}]},{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"excludeFirstLevelTreeLines","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>When true, exclude only the first-level tree lines, creating,\neffectively, multiple unrelated root nodes.</p>"}}]},{type:"property",attributes:{"defaultValue":"true","propertyType":"new","name":"useTreeLines","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Set whether lines linking tree children shall be drawn on the tree.</p>"}}]}]}]}