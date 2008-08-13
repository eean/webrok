{type:"class",attributes:{"name":"Window","hasWarning":"true","packageName":"qx.legacy.log.appender","superClass":"qx.legacy.log.appender.Abstract","fullName":"qx.legacy.log.appender.Window","type":"class"},children:[{type:"desc",attributes:{"text":"<p>An appender that writes all messages to a log window.</p>\n\n<p>This class does not depend on qooxdoo widgets, so it also works when there\nare problems with widgets or when the widgets are not yet initialized.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"\"qx_log\"","name":"name"},children:[{type:"desc",attributes:{"text":"<p>the name of the log window.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]}]}]},{type:"methods-static",children:[{type:"method",attributes:{"isStatic":"true","name":"getAppender"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"},children:[{type:"desc",attributes:{"text":"<p>the ID of the wanted WindowAppender.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a previously registered WindowAppender.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the WindowAppender or null if no\n      WindowAppender with this ID is registered.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"WindowAppender"}}]}]}]},{type:"method",attributes:{"isStatic":"true","name":"register"},children:[{type:"params",children:[{type:"param",attributes:{"name":"appender"},children:[{type:"desc",attributes:{"text":"<p>the WindowAppender to register.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"WindowAppender"}}]}]}]},{type:"desc",attributes:{"text":"<p>Registers a WindowAppender. This is used by the WindowAppender internally.\nYou don&#8217;t have to call this.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the ID.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.legacy.log.appender.Window#autoCloseWithErrors","name":"_applyAutoCloseWithErrors"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>Previous value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]}]},{type:"method",attributes:{"access":"protected","name":"_autoCloseWindow"},children:[{type:"desc",attributes:{"text":"<p>Called when the window should be automatically closed (because the page that opened\nis is unloaded). Will only close the window if the autoClose***-Properties allow it</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_openWindowCallback"},children:[{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"21","line":"252"}}]}]},{type:"method",attributes:{"access":"protected","hasError":"true","name":"_setDivVisibility"},children:[{type:"params",children:[{type:"param",attributes:{"name":"divDataSet"}}]},{type:"errors",children:[{type:"error",attributes:{"msg":"Documentation is missing.","column":"19","line":"484"}}]}]},{type:"method",attributes:{"access":"protected","name":"_showMessageInLog"},children:[{type:"params",children:[{type:"param",attributes:{"name":"msg"},children:[{type:"desc",attributes:{"text":"<p>message to show, may be <span class=\"caps\">HTML</span></p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Appends a line to the log showing the given text</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"docFrom":"qx.legacy.log.appender.Abstract","overriddenFrom":"qx.legacy.log.appender.Abstract","name":"appendLogEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"}}]}]},{type:"method",attributes:{"name":"closeWindow"},children:[{type:"desc",attributes:{"text":"<p>Closes the log window.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"getAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>autoCloseWithErrors</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>autoCloseWithErrors</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getMaxMessages","fromProperty":"maxMessages"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>maxMessages</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>maxMessages</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getPopUnder","fromProperty":"popUnder"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>popUnder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>popUnder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWindowHeight","fromProperty":"windowHeight"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>windowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>windowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWindowLeft","fromProperty":"windowLeft"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>windowLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>windowLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWindowTop","fromProperty":"windowTop"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>windowTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>windowTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getWindowWidth","fromProperty":"windowWidth"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>windowWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>windowWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>autoCloseWithErrors</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>autoCloseWithErrors</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initMaxMessages","fromProperty":"maxMessages"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>maxMessages</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>maxMessages</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initPopUnder","fromProperty":"popUnder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>popUnder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>popUnder</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWindowHeight","fromProperty":"windowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>windowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>windowHeight</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #windowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWindowLeft","fromProperty":"windowLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>windowLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>windowLeft</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #windowLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWindowTop","fromProperty":"windowTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>windowTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>windowTop</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #windowTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initWindowWidth","fromProperty":"windowWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>windowWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>windowWidth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #windowWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"isAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>autoCloseWithErrors</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"isPopUnder","fromProperty":"popUnder"},children:[{type:"desc",attributes:{"text":"<p>Check whether the (computed) value of the boolean property <code>popUnder</code> equals <code>true</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>Whether the property equals <code>true</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"openWindow"},children:[{type:"desc",attributes:{"text":"<p>Creates and opens the log window if it doesn&#8217;t alread exist.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>autoCloseWithErrors</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetMaxMessages","fromProperty":"maxMessages"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>maxMessages</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetPopUnder","fromProperty":"popUnder"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>popUnder</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWindowHeight","fromProperty":"windowHeight"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>windowHeight</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #windowHeight}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWindowLeft","fromProperty":"windowLeft"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>windowLeft</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #windowLeft}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWindowTop","fromProperty":"windowTop"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>windowTop</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #windowTop}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetWindowWidth","fromProperty":"windowWidth"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>windowWidth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #windowWidth}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>autoCloseWithErrors</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>autoCloseWithErrors</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setFilterText"},children:[{type:"params",children:[{type:"param",attributes:{"name":"text"},children:[{type:"desc",attributes:{"text":"<p>filter text</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the filter text to use. Only log events containing all words of the\ngiven text will be shown</p>"}}]},{type:"method",attributes:{"name":"setMaxMessages","fromProperty":"maxMessages"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>maxMessages</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>maxMessages</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #maxMessages}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setPopUnder","fromProperty":"popUnder"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>popUnder</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>popUnder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWindowHeight","fromProperty":"windowHeight"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>windowHeight</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>windowHeight</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowHeight}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWindowLeft","fromProperty":"windowLeft"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>windowLeft</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>windowLeft</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowLeft}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWindowTop","fromProperty":"windowTop"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>windowTop</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>windowTop</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowTop}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setWindowWidth","fromProperty":"windowWidth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>windowWidth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>windowWidth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #windowWidth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"toggleAutoCloseWithErrors","fromProperty":"autoCloseWithErrors"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>autoCloseWithErrors</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #autoCloseWithErrors}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]},{type:"method",attributes:{"name":"togglePopUnder","fromProperty":"popUnder"},children:[{type:"desc",attributes:{"text":"<p>Toggles the (computed) value of the boolean property <code>popUnder</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #popUnder}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the new value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Boolean"}}]}]}]}]},{type:"properties",children:[{type:"property",attributes:{"apply":"_applyAutoCloseWithErrors","defaultValue":"true","propertyType":"new","name":"autoCloseWithErrors","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the window should automatically be closed when its creating page is unloaded and\nerrors have been logged. Note that errors that have been logged before this property has been\nturned off will be ignored. Warning: Turning this off may create a memory hole because the disposer\nof this class will auto-close the window, i. e. it may stay open after dispose(), still holding\nmemory. However, for diagnostics it is often more important to get information about errors\nthan to save memory.</p>"}}]},{type:"property",attributes:{"defaultValue":"500","propertyType":"new","name":"maxMessages","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The maximum number of messages to show. If null the number of messages is not\nlimited.</p>"}}]},{type:"property",attributes:{"defaultValue":"false","propertyType":"new","name":"popUnder","check":"Boolean"},children:[{type:"desc",attributes:{"text":"<p>Whether the window should appear under the main window.</p>"}}]},{type:"property",attributes:{"defaultValue":"350","propertyType":"new","name":"windowHeight","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>height of the window</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"windowLeft","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>left screen position of the window</p>"}}]},{type:"property",attributes:{"allowNull":"true","propertyType":"new","name":"windowTop","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>top screen position of the window</p>"}}]},{type:"property",attributes:{"defaultValue":"600","propertyType":"new","name":"windowWidth","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>width of the window</p>"}}]}]}]}