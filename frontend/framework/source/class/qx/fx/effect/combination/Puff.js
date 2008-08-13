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
 * Combination effect "Puff"
 *
 * The given element resized from zero to it's original size
 * and faded in at the same time.
 */
qx.Class.define("qx.fx.effect.combination.Puff",
{

  extend : qx.fx.Base,

  /*
   *****************************************************************************
       CONSTRUCTOR
   *****************************************************************************
   */

  /**
   * @param element {Object} The DOM element
   */
  construct : function(element)
  {
    this.base(arguments, element);

    this._scaleEffect = new qx.fx.effect.core.Scale(this._element);
    this._fadeEffect = new qx.fx.effect.core.Fade(this._element);

    this._mainEffect = new qx.fx.effect.core.Parallel(this._scaleEffect, this._fadeEffect);
  },


  /*
   *****************************************************************************
      PROPERTIES
   *****************************************************************************
   */

   properties :
   {
      /**
       * Flag indicating if the CSS attribute "display"
       * should be modified by effect
       */
      modifyDisplay :
      {
        init : true,
        check : "Boolean"
      }

   },


  /*
   *****************************************************************************
      MEMBERS
   *****************************************************************************
   */

   members :
   {
    afterFinishInternal : function()
    {
      if (this.getModifyDisplay()) {
        qx.bom.element.Style.set(this._element, "display", "none");
      }
    },


    start : function()
    {
      if (!this.base(arguments)) {
        return;
      }

      var oldStyle = {
        opacity  : qx.bom.element.Style.get(this._element, "opacity")
      };

      this._fadeEffect.afterFinishInternal = function()
      {
        for (var property in oldStyle) {
          qx.bom.element.Style.set(this._element, property, oldStyle[property]);
        }
      };


      this._scaleEffect.set({
        scaleTo : 200,
        sync : true,
        scaleFromCenter : true,
        scaleContent : true,
        restoreAfterFinish : true
      });

      this._fadeEffect.set({
        sync: true,
        to: 0.0,
        modifyDisplay : false
      });

      this._mainEffect.start();
    }

   },


   /*
   *****************************************************************************
      DESTRUCTOR
   *****************************************************************************
   */

   destruct : function()
   {
     this._disposeArray("_effects");
     this._disposeObjects("_mainEffect");
   }
});
