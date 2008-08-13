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

qx.Class.define("qx.dev.unit.TestLoader",
{
  extend : qx.application.Native,



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
     * @return {var} TODOC
     */
    getInstance : function() {
      return this.instance;
    }
  },




  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    suite :
    {
      check    : "qx.dev.unit.TestSuite",
      nullable : true
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
     * @return {void}
     */
    main : function()
    {
      this.base(arguments);

      this.setTestNamespace(this.__getClassNameFromUrl());

      if (window.top.jsUnitTestSuite)
      {
        this.runJsUnit();
        return;
      }

      if (window == window.top)
      {
        this.runStandAlone();
        return;
      }
    },


    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    __getClassNameFromUrl : function()
    {
      var params = window.location.search;
      var className = params.match(/[\?&]testclass=([A-Za-z0-9_\.]+)/);

      if (className) {
        className = className[1];
      } else {
        className = "__unknown_class__";
      }

      return className;
    },


    /**
     * TODOC
     *
     * @param namespace {var} TODOC
     * @return {void}
     */
    setTestNamespace : function(namespace)
    {
      var suite = new qx.dev.unit.TestSuite();
      suite.add(namespace);
      this.setSuite(suite);
    },


    /**
     * TODOC
     *
     * @return {void}
     */
    runJsUnit : function()
    {
      var testResult = new qx.dev.unit.JsUnitTestResult();
      this.getSuite().run(testResult);
      testResult.exportToJsUnit();
    },


    /**
     * TODOC
     *
     * @return {void}
     */
    runStandAlone : function()
    {
      this.warn(this.getTestDescriptions());

      var testResult = new qx.dev.unit.TestResult();

      testResult.addListener("failure", function(e)
      {
        var ex = e.getData().exception;
        var test = e.getData().test;
        this.error("Test '" + test.getFullName() + "' failed: " + ex.getMessage() + " - " + ex.getComment());
        this.error("Stack trace: " + ex.getStackTrace().join("\n"));
      });

      testResult.addListener("error", function(e)
      {
        var ex = e.getData().exception;
        this.error("The test '" + e.getData().test.getFullName() + "' had an error: " + ex, ex);
      });

      this.getSuite().run(testResult);
    },


    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getTestDescriptions : function()
    {
      var desc = [];
      var classes = this.getSuite().getTestClasses();

      for (var i=0; i<classes.length; i++)
      {
        var cls = classes[i];
        var clsDesc = {};
        clsDesc.classname = cls.getName();
        clsDesc.tests = [];
        var methods = cls.getTestMethods();

        for (var j=0; j<methods.length; j++) {
          clsDesc.tests.push(methods[j].getName());
        }

        desc.push(clsDesc);
      }

      return qx.util.Json.stringify(desc);
    },


    /**
     * TODOC
     *
     * @param testResult {var} TODOC
     * @param className {var} TODOC
     * @param methodName {var} TODOC
     * @return {void}
     */
    runTests : function(testResult, className, methodName)
    {
      var classes = this.getSuite().getTestClasses();

      for (var i=0; i<classes.length; i++)
      {
        if (className == classes[i].getName())
        {
          var methods = classes[i].getTestMethods();

          for (var j=0; j<methods.length; j++)
          {
            if (methodName && methods[j].getName() != methodName) {
              continue;
            }

            methods[j].run(testResult);
          }

          return;
        }
      }
    },


    /**
     * TODOC
     *
     * @param testResult {var} TODOC
     * @param namespaceName {var} TODOC
     * @return {void}
     */
    runTestsFromNamespace : function(testResult, namespaceName)
    {
      var classes = this.getSuite().getTestClasses();

      for (var i=0; i<classes.length; i++)
      {
        if (classes[i].getName().indexOf(namespaceName) == 0) {
          classes[i].run(testResult);
        }
      }
    }
  }
});
