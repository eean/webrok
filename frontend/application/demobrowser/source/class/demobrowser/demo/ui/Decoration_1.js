/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("demobrowser.demo.ui.Decoration_1",
{
  extend : qx.application.Standalone,

  members :
  {
    main: function()
    {
      this.base(arguments);

      var box = new qx.ui.layout.HBox();
      box.setSpacing(10);

      var container = new qx.ui.container.Composite(box);
      container.setPadding(20);

      this.getRoot().add(container, {left:0,top:0});

      container.add(this.getGrid1());
    },


    getGrid1 : function()
    {
      var theme = qx.theme.manager.Decoration.getInstance().getTheme();

      // auto size
      var layout = new qx.ui.layout.Grid();
      layout.setSpacing(10);

      var box = new qx.ui.container.Composite(layout).set({
        padding: 5,
        backgroundColor: "background"
      });

      var decorations = theme.decorations;
      var columns = 5;

      var i=0;
      for (var key in decorations)
      {
        box.add(new qx.ui.basic.Label(key).set({
          decorator: key,
          padding: 5,
          height: 100,
          width: 100
        }), {row: Math.floor(i/columns), column: i%columns});
        i += 1;
      }

      return box;
    }
  }
});
