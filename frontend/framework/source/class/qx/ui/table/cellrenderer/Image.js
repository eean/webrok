/* ************************************************************************

    qooxdoo - the new era of web development

    http://qooxdoo.org

    Copyright:
      2007 by Tartan Solutions, Inc, http://www.tartansolutions.com

    License:
      LGPL 2.1: http://www.gnu.org/licenses/lgpl.html

    Authors:
      * Dan Hummon

************************************************************************ */

qx.Class.define("qx.ui.table.cellrenderer.Image",
{
  extend : qx.ui.table.cellrenderer.AbstractImage,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */


  /**
   * @param height {Integer?16} The height of the image. The default is 16.
   * @param width {Integer?16} The width of the image. The default is 16.
   */
  construct : function(width, height)
  {
    this.base(arguments);

    if (width) {
      this._imageWidth = width;
    } else {
      this._imageWidth = 16;
    }

    if (height) {
      this._imageHeight = height;
    } else {
      this._imageHeight = 16;
    }

    this._am = qx.util.AliasManager.getInstance();
    this._rm = qx.util.ResourceManager;
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // overridden
    _identifyImage : function(cellInfo)
    {
      var imageHints =
      {
        imageWidth  : this._imageWidth,
        imageHeight : this._imageHeight
      };

      if (cellInfo.value == "") {
        imageHints.url = null;
      } else {
        imageHints.url = this._rm.toUri(this._am.resolve(cellInfo.value));
      }

      return imageHints;
    }
  }
});
