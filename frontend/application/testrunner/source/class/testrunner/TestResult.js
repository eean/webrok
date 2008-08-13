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

qx.Class.define("testrunner.TestResult",
{
  extend : qx.core.Object,



  /*
  *****************************************************************************
     EVENTS
  *****************************************************************************
  */

  events :
  {
    startTest : "qx.event.type.Data",
    endTest   : "qx.event.type.Data",
    error     : "qx.event.type.Data",
    failure   : "qx.event.type.Data"
  },




  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    /**
     * TODOC
     *
     * @param testResult {var} TODOC
     * @param test {var} TODOC
     * @param testFunction {var} TODOC
     * @return {void}
     */
    run : function(testResult, test, testFunction) {
      testResult.run(test, testFunction);
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
     * TODOC
     *
     * @param test {var} TODOC
     * @param testFunction {var} TODOC
     * @return {void}
     */
    run : function(test, testFunction)
    {
      this.fireDataEvent("startTest", test);

      try {
        testFunction();
      }
      catch(e)
      {
        var error = true;

        if (e.classname == "qx.dev.unit.AssertionError") {
          this.__createError("failure", e, test);
        } else {
          this.__createError("error", e, test);
        }
      }

      if (!error) {
        this.fireDataEvent("endTest", test);
      }
    },


    /**
     * TODOC
     *
     * @param eventName {var} TODOC
     * @param exception {var} TODOC
     * @param test {var} TODOC
     * @return {void}
     */
    __createError : function(eventName, exception, test)
    {
      // WebKit and Opera
      var error =
      {
        exception : exception,
        test      : test
      };

      this.fireDataEvent(eventName, error);
      this.fireDataEvent("endTest", test);
    }
  }
});
