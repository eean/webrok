{type:"class",attributes:{"name":"DateChooser","packageName":"qx.ui.control","mixins":"qx.ui.core.MExecutable","superClass":"qx.ui.core.Widget","fullName":"qx.ui.control.DateChooser","type":"class","interfaces":"qx.ui.form.IFormElement"},children:[{type:"desc",attributes:{"text":"<p>A <strong>date chooser</strong> is a small calendar including a navigation bar to switch the shown\nmonth. It includes a column for the calendar week and shows one month. Selecting\na date is as easy as clicking on it.</p>\n\n<p>To be conform with all form widgets, the {@link qx.ui.form.IFormElement} interface \nis implemented.</p>\n\n<p>The following example creates and adds a date chooser to the root element.\nA listener alerts the user if a new date is selected.</p>\n\n<pre>\nvar chooser = new qx.ui.control.DateChooser();\nthis.getRoot().add(chooser, { left : 20, top: 20});\n\nchooser.addListener(\"changeValue\", function(e) {\n  alert(e.getData());\n});\n</pre>\n\n<p>Additionally to a selection event a execute event is available which is \nfired by doubleclick or taping the space / enter key. With this event you \ncan for example save the selection and close the date chooser.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"date"},children:[{type:"desc",attributes:{"text":"<p>The initial date to show. If <code>null</code>\nthe current day (today) is shown.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Date"}}]}]}]}]}]},{type:"constants",children:[{type:"constant",attributes:{"name":"MONTH_YEAR_FORMAT"},children:[{type:"desc",attributes:{"text":"<p>The format for the date year label at the top center.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"string"}}]}]}]},{type:"events",children:[{type:"event",attributes:{"name":"changeDate"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #date}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeName"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #name}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeShownMonth"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #shownMonth}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeShownYear"},children:[{type:"desc",attributes:{"text":"Fired on change of the property {@link #shownYear}."}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]},{type:"event",attributes:{"name":"changeValue"},children:[{type:"desc",attributes:{"text":"<p>Fired when the value was modified</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"methods",children:[{type:"method",attributes:{"access":"protected","apply":"qx.ui.control.DateChooser#date","name":"_applyDate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>new value of the property</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Date"}}]}]},{type:"param",attributes:{"name":"old"},children:[{type:"desc",attributes:{"text":"<p>previous value of the property (null if it was not yet set).</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Date"}}]}]}]},{type:"desc",attributes:{"text":"<p>Applies changes of the property value of the property <code>date</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #_applyDate}.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_checkDate"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Current date.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Date"}}]}]}]},{type:"desc",attributes:{"text":"<p>Returns a clone of the given date if one is given. If the value is \n<code>null</code>, <code>null</code> will be returned.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>A clone of the set Date.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Date"}},{type:"entry",attributes:{"type":"null"}}]}]}]},{type:"method",attributes:{"access":"protected","docFrom":"qx.ui.core.Widget","overriddenFrom":"qx.ui.core.Widget","name":"_createChildControlImpl"},children:[{type:"params",children:[{type:"param",attributes:{"name":"id"}}]}]},{type:"method",attributes:{"access":"protected","name":"_onDayClicked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>The event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when a day has been clicked.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onDayDblClicked"},children:[{type:"desc",attributes:{"text":"<p>Event handler. Called when a day has been double-clicked.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onkeypress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>The event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when a key was pressed.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onMouseUpDown"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The mouse up / down event</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Mouse"}}]}]}]},{type:"desc",attributes:{"text":"<p>Hendler which stops the propagation of the click event if\nthe Navigation bar or kalender headers will be clicked.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_onNavButtonClicked"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"},children:[{type:"desc",attributes:{"text":"<p>The data event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Called when a navigation button has been clicked.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"_updateDatePane"},children:[{type:"desc",attributes:{"text":"<p>Updates the date pane.</p>"}}]},{type:"method",attributes:{"name":"getDate","fromProperty":"date"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>date</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>date</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getShownMonth","fromProperty":"shownMonth"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>shownMonth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>shownMonth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getShownYear","fromProperty":"shownYear"},children:[{type:"desc",attributes:{"text":"<p>Returns the (computed) value of the property <code>shownYear</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>(Computed) value of <code>shownYear</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"getValue"},children:[{type:"desc",attributes:{"text":"<p>The element&#8217;s user set value (date) as a String.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The current set date.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"handleKeyPress"},children:[{type:"params",children:[{type:"param",attributes:{"name":"e"},children:[{type:"desc",attributes:{"text":"<p>The event.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"qx.event.type.Data"}}]}]}]},{type:"desc",attributes:{"text":"<p>Event handler. Used to handle the key events.</p>"}}]},{type:"method",attributes:{"access":"protected","name":"initDate","fromProperty":"date"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>date</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>date</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>name</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initShownMonth","fromProperty":"shownMonth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>shownMonth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>shownMonth</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"access":"protected","name":"initShownYear","fromProperty":"shownYear"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>Initial value for property <code>shownYear</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Calls the apply method and dispatches the change event of the property <code>shownYear</code>\nwith the default value defined by the class developer. This function can\nonly be called from the constructor of a class.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the default value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"resetDate","fromProperty":"date"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>date</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetName","fromProperty":"name"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>name</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetShownMonth","fromProperty":"shownMonth"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>shownMonth</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"resetShownYear","fromProperty":"shownYear"},children:[{type:"desc",attributes:{"text":"<p>Resets the user value of the property <code>shownYear</code>.</p>\n\n<p>The computed value falls back to the next available value e.g. appearance, init or\ninheritance value depeneding on the property configuration and value availability.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},{type:"return",children:[{type:"types",children:[{type:"entry",attributes:{"type":"void"}}]}]}]},{type:"method",attributes:{"name":"setDate","fromProperty":"date"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>date</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>date</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #date}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setName","fromProperty":"name"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>name</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>name</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #name}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setShownMonth","fromProperty":"shownMonth"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>shownMonth</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>shownMonth</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownMonth}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setShownYear","fromProperty":"shownYear"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>New value for property <code>shownYear</code>.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the user value of the property <code>shownYear</code>.</p>\n\n<p>For further details take a look at the property definition: {@link #shownYear}.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>The unmodified incoming value.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"var"}}]}]}]},{type:"method",attributes:{"name":"setValue"},children:[{type:"params",children:[{type:"param",attributes:{"name":"value"},children:[{type:"desc",attributes:{"text":"<p>The new date value as a JavaScript confrom date string.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"desc",attributes:{"text":"<p>Sets the element&#8217;s string value. The String should be excepted by the\nJavaScript Date-Object.</p>"}},{type:"return",children:[{type:"desc",attributes:{"text":"<p>the value</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"String"}}]}]}]},{type:"method",attributes:{"name":"showMonth"},children:[{type:"params",children:[{type:"param",attributes:{"defaultValue":"null","name":"month"},children:[{type:"desc",attributes:{"text":"<p>the month to show (0 = january). If not set \n     the month will remain the same.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]},{type:"param",attributes:{"defaultValue":"null","name":"year"},children:[{type:"desc",attributes:{"text":"<p>the year to show. If not set the year will \n     remain the same.</p>"}},{type:"types",children:[{type:"entry",attributes:{"type":"Integer"}}]}]}]},{type:"desc",attributes:{"text":"<p>Shows a certain month.</p>"}}]}]},{type:"properties",children:[{type:"property",attributes:{"name":"appearance","docFrom":"qx.ui.core.Widget","defaultValue":"\"datechooser\"","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.Widget"}},{type:"property",attributes:{"name":"date","defaultValue":"null","check":"Date","allowNull":"true","propertyType":"new","apply":"_applyDate","event":"changeDate"},children:[{type:"desc",attributes:{"text":"<p>The currently selected date.</p>"}}]},{type:"property",attributes:{"name":"height","docFrom":"qx.ui.core.LayoutItem","defaultValue":"150","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}},{type:"property",attributes:{"check":"String","allowNull":"true","propertyType":"new","name":"name","event":"changeName"},children:[{type:"desc",attributes:{"text":"<p>The name of the widget. Mainly used for serialization proposes.</p>"}}]},{type:"property",attributes:{"name":"shownMonth","defaultValue":"null","event":"changeShownMonth","allowNull":"true","propertyType":"new","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The currently shown month. 0 = january, 1 = february, and so on.</p>"}}]},{type:"property",attributes:{"name":"shownYear","defaultValue":"null","event":"changeShownYear","allowNull":"true","propertyType":"new","check":"Integer"},children:[{type:"desc",attributes:{"text":"<p>The currently shown year.</p>"}}]},{type:"property",attributes:{"name":"width","docFrom":"qx.ui.core.LayoutItem","defaultValue":"200","refine":"true","propertyType":"new","overriddenFrom":"qx.ui.core.LayoutItem"}}]}]}