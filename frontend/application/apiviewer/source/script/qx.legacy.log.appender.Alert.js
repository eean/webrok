{type:"class",attributes:{"name":"Alert","packageName":"qx.legacy.log.appender","superClass":"qx.legacy.log.appender.Abstract","fullName":"qx.legacy.log.appender.Alert","type":"class"},children:[{type:"desc",attributes:{"text":"<p>An appender that writes each message to a native alert().</p>\n\n<p>This class does not depend on qooxdoo widgets, so it also works when there\nare problems with widgets or when the widgets are not yet initialized.</p>\n\n<p>It allows to go through the log messages step-by-step, since the alert\nwindow temporarily halts the regular program execution. That way even\nthe dispose process can easily be debugged.</p>"}},{type:"constructor",children:[{type:"method",attributes:{"isCtor":"true","name":"ctor"}}]},{type:"properties",children:[{type:"property",attributes:{"name":"useLongFormat","docFrom":"qx.legacy.log.appender.Abstract","defaultValue":"false","refine":"true","propertyType":"new","overriddenFrom":"qx.legacy.log.appender.Abstract"}}]},{type:"methods",children:[{type:"method",attributes:{"docFrom":"qx.legacy.log.appender.Abstract","overriddenFrom":"qx.legacy.log.appender.Abstract","name":"appendLogEvent"},children:[{type:"params",children:[{type:"param",attributes:{"name":"evt"}}]}]}]}]}