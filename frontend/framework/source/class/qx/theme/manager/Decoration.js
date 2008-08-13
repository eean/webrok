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
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

qx.Class.define("qx.theme.manager.Decoration",
{
  type : "singleton",
  extend : qx.util.ValueManager,




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    /** the currently selected decoration theme */
    theme :
    {
      check : "Theme",
      nullable : true,
      apply : "_applyTheme",
      event : "changeTheme"
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * Returns the dynamically interpreted result for the incoming value
     *
     * @param value {String} dynamically interpreted idenfier
     * @return {var} return the (translated) result of the incoming value
     */
    resolveDynamic : function(value) {
      return typeof value === "object" ? value : this._dynamic[value];
    },


    /**
     * Whether a value is interpreted dynamically
     *
     * @param value {String} dynamically interpreted idenfier
     * @return {Boolean} returns true if the value is interpreted dynamically
     */
    isDynamic : function(value) {
      return value && (typeof value == "object" || this._dynamic[value] !== undefined);
    },


    // property apply
    _applyTheme : function(value)
    {
      var dest = this._dynamic;

      for (var key in dest)
      {
        if (dest[key].themed)
        {
          dest[key].dispose();
          delete dest[key];
        }
      }

      if (value)
      {
        var source = value.decorations;

        for (var key in source)
        {
          var styles = source[key].style;
          var decorationClass = source[key].decorator;

          if (decorationClass === undefined) {
            decorationClass = qx.ui.decoration.Uniform;
          }

          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (decorationClass == null) {
              throw new Error("Could not find decoration class required by decorator: " + key + "!");
            }
          }

          dest[key] = (new decorationClass).set(styles);
          dest[key].themed = true;
        }
      }

      var alias = qx.util.AliasManager.getInstance();
      value ? alias.add("decoration", value.resource) : alias.remove("decoration");
    }
  }
});
