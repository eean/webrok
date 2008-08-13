/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2008 Derrell Lipman

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Derrell Lipman (derrell)

************************************************************************ */

/* ************************************************************************

#module(ui_progressive)

************************************************************************ */

/**
 * Data Model for Progressive renderer.  EXPERIMENTAL!  INTERFACE MAY CHANGE.
 */
qx.Class.define("qx.ui.progressive.model.Default",
{
  extend     : qx.ui.progressive.model.Abstract,


  construct : function()
  {
    this.base(arguments);

    this._elements = [ ];
  },


  members :
  {
    /**
     * Add elements to be progressively renderered.  Each element must be an
     * object which contains at least two members: renderer (the renderer
     * name) and data.
     *
     * @param elems {Array}
     *   An array of elements to be added to the element queue
     */
    addElements : function(elems)
    {
      // Add the new elements to our elements queue.
      this._elements = this._elements.concat(elems);

      // Tell Progressive that data is available
      this.fireDataEvent("dataAvailable", this._elements.length);
    },

    /**
     * Add a single element to be progressively renderered.  The element must
     * be an object which contains at least two members: renderer (the
     * renderer name) and data.
     *
     * @param elem {var}
     *   An element to be added to the element queue
     */
    addElement : function(elem)
    {
      // Add the new elements to our elements queue.
      this._elements.push(elem);

      // Tell Progressive that data is available
      this.fireDataEvent("dataAvailable", this._elements.length);
    },

    // overridden
    getElementCount : function()
    {
      return this._elements.length;
    },

    // overridden
    getNextElement : function()
    {
      // Do we have any remaining elements?
      if (this._elements.length > 0)
      {
        // Yup.  Give 'em the first one and remove it from our queue.
        return(
          {
            element   : this._elements.shift(),
            remaining : this._elements.length
          });
      }

      return null;
    }
  },

  destruct : function()
  {
    this._disposeFields("_elements");
  }
});
