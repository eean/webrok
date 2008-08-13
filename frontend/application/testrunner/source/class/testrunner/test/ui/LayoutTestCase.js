/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2007-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/*
#use(qx.theme.Classic)
*/

qx.Class.define("testrunner.test.ui.LayoutTestCase",
{
  extend : qx.dev.unit.TestCase,

  members :
  {
    getRoot : function()
    {
      var cls = testrunner.test.ui.LayoutTestCase;
      qx.theme.manager.Meta.getInstance().initialize();

      if (!cls._root) {
        cls._root = new qx.ui.root.Application(document);
      }
      return cls._root;
    },


    _getFixedWidget : function()
    {
      var widget = new qx.ui.core.Widget();
      widget.set({
        width: 200,
        height: 100,
        maxWidth : "pref",
        minWidth : "pref",
        maxHeight : "pref",
        minHeight : "pref"
      });
      return widget;
    },


    assertSize : function(widget, width, height, msg)
    {
      qx.ui.core.queue.Manager.flush();
      var el = widget.getContainerElement().getDomElement();
      var elHeight = parseInt(el.style.height);
      var elWidth = parseInt(el.style.width);
      this.assertEquals(width, elWidth, msg);
      this.assertEquals(height, elHeight, msg);
    },


    assertPadding : function(widget, top, right, bottom, left, msg)
    {
      qx.ui.core.queue.Manager.flush();
      var container = widget.getContainerElement().getDomElement();
      var width = parseInt(container.style.width) || 0;
      var height = parseInt(container.style.height) || 0;

      var content = widget.getContentElement().getDomElement();
      var innerWidth = parseInt(content.style.width) || 0;
      var innerHeight = parseInt(content.style.height) || 0;
      var innerTop = parseInt(content.style.top) || 0;
      var innerLeft = parseInt(content.style.left) || 0;

      this.assertEquals(top, innerTop, msg);
      this.assertEquals(right, width-innerWidth-left, msg);

      this.assertEquals(bottom, height-innerHeight-top, msg);
      this.assertEquals(left, innerLeft, msg);
    },


    assertStyle : function(widget, style, value)
    {
      qx.ui.core.queue.Manager.flush();
      var widgetStyle = widget.getContainerElement().getDomElement().style[style];

      if (value && style.match(/color/i)) {
        this.assertCssColor(value, widgetStyle);
      } else {
        this.assertEquals(value, widgetStyle);
      }
    },


    assertContentStyle : function(widget, style, value)
    {
      qx.ui.core.queue.Manager.flush();
      var widgetStyle = widget.getContainerElement().getDomElement().style[style];
      if (value && style.match(/color/i)) {
        this.assertCssColor(value, widgetStyle);
      } else {
        this.assertEquals(value, widgetStyle);
      }
    },


    assertDecoratorStyle : function(widget, style, value)
    {
      qx.ui.core.queue.Manager.flush();
      var widgetStyle = widget._decorationElement.getDomElement().style[style];
      if (value && style.match(/color/i)) {
        this.assertCssColor(value, widgetStyle);
      } else {
        this.assertEquals(value, widgetStyle);
      }
    }

  }
});
