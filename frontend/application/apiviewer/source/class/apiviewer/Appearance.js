/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 1&1 Internet AG, Germany, http://www.1and1.org
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
   * Jonathan Rass (jonathan_rass)

************************************************************************* */

/**
 * Mixin for the default qooxdoo appearance theme.
 */
qx.Theme.define("apiviewer.Appearance",
{
  title: "Theme for APIViewer",
  extend : qx.theme.modern.Appearance,

  appearances :
  {
    "legendview-label-important" :
    {
      style : function(states)
      {
        return {
          font: "large",
          textColor: "#134275"
        };
      }
    },
    "legendview-label" :
    {
      style : function(states)
      {
        return {
          textColor: "#134275"
        };
      }
    }
  }
});