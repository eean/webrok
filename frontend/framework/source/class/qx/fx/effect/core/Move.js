/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2008 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Jonathan Rass (jonathan_rass)

   ======================================================================

   This class contains code based on the following work:

   * script.aculo.us
       http://script.aculo.us/
       Version 1.8.1

     Copyright:
       (c) 2008 Thomas Fuchs

     License:
       MIT: http://www.opensource.org/licenses/mit-license.php

     Author:
       Thomas Fuchs

************************************************************************ */

/**
 * Core effect "Move"
 *
 * This effect moves to element to the given coordinates.
 */
qx.Class.define("qx.fx.effect.core.Move",
{

  extend : qx.fx.Base,


   /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */

  properties :
  {
    /**
     * String indicating if the coordinates are relative
     * to element's position or absolute.
     */
    mode :
    {
      init : "relative",
      check : [ "relative", "absolute" ]
    },

    /**
     * X coordinate the element should be moved to.
     */
    x :
    {
      init : 0,
      check : "Number"
    },

    /**
     * Y coordinate the element should be moved to.
     */
    y :
    {
      init : 0,
      check : "Number"
    }

  },

  /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */

  members :
  {

    setup : function()
    {
      this.base(arguments);

      if(this._element.parentNode)
      {
        this._originalLeft = qx.bom.element.Location.getLeft(this._element) - qx.bom.element.Location.getLeft(this._element.parentNode);
        this._originalTop = qx.bom.element.Location.getTop(this._element) - qx.bom.element.Location.getTop(this._element.parentNode);
      }
      else
      {
        this._originalLeft = qx.bom.element.Location.getLeft(this._element);
        this._originalTop = qx.bom.element.Location.getTop(this._element);
      }
      this._originalPosition = qx.bom.element.Style.get(this._element, "position");

      if (this.getMode() == 'absolute') {
        this._x = this.getX() - this._originalLeft;
        this._y = this.getY() - this._originalTop;
      }else{
        this._x = this.getX();
        this._y = this.getY();
      }
    },


    update : function(position)
    {
      this.base(arguments);

      var left = Math.round(this._x  * position + this._originalLeft);
      var top = Math.round(this._y  * position + this._originalTop);

      qx.bom.element.Style.set(this._element, "left", left + "px");
      qx.bom.element.Style.set(this._element, "top", top + "px");
    },

    afterFinishInternal : function() {
      qx.bom.element.Style.set(this._element, "position", this._originalPosition);
    }
  }
});
