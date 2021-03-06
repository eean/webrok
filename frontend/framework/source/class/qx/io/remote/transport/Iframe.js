/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
     2006 Derrell Lipman
     2006 STZ-IDA, Germany, http://www.stz-ida.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL: http://www.eclipse.org/org/documents/epl-v10.php
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Derrell Lipman (derrell)
     * Andreas Junghans (lucidcake)

************************************************************************ */

/* ************************************************************************

#asset(qx/static/image/blank.gif)

************************************************************************ */

/**
 * Transports requests to a server using an IFRAME.
 *
 * This class should not be used directly by client programmers.
 */
qx.Class.define("qx.io.remote.transport.Iframe",
{
  extend : qx.io.remote.transport.Abstract,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */

  construct : function()
  {
    this.base(arguments);

    var vUniqueId = (new Date).valueOf();
    var vFrameName = "frame_" + vUniqueId;
    var vFormName = "form_" + vUniqueId;

    // Mshtml allows us to define a full HTML as a parameter for createElement.
    // Using this method is the only (known) working to register the frame
    // to the known elements of the Internet Explorer.
    if (qx.core.Variant.isSet("qx.client", "mshtml")) {
      this._frame = document.createElement('<iframe name="' + vFrameName + '"></iframe>');
    } else {
      this._frame = document.createElement("iframe");
    }

    this._frame.src = "javascript:void(0)";
    this._frame.id = this._frame.name = vFrameName;
    this._frame.onload = qx.lang.Function.bind(this._onload, this);

    this._frame.style.display = "none";

    document.body.appendChild(this._frame);

    this._form = document.createElement("form");
    this._form.target = vFrameName;
    this._form.id = this._form.name = vFormName;

    this._form.style.display = "none";

    document.body.appendChild(this._form);

    this._data = document.createElement("textarea");
    this._data.id = this._data.name = "_data_";
    this._form.appendChild(this._data);

    this._frame.onreadystatechange = qx.lang.Function.bind(this._onreadystatechange, this);
  },




  /*
  *****************************************************************************
     STATICS
  *****************************************************************************
  */

  statics :
  {
    handles :
    {
      synchronous           : false,
      asynchronous          : true,
      crossDomain           : false,
      fileUpload            : true,
      programaticFormFields : true,
      responseTypes         : [ "text/plain", "text/javascript", "application/json", "application/xml", "text/html" ]
    },


    /**
     * TODOC
     *
     */
    isSupported : function() {
      return true;
    },




    /*
    ---------------------------------------------------------------------------
      EVENT LISTENER
    ---------------------------------------------------------------------------
    */

    // For reference:
    // http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/readyState_1.asp
    _numericMap :
    {
      "uninitialized" : 1,
      "loading"       : 2,
      "loaded"        : 2,
      "interactive"   : 3,
      "complete"      : 4
    }
  },




  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    _lastReadyState : 0,




    /*
    ---------------------------------------------------------------------------
      USER METHODS
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @return {void}
     */
    send : function()
    {
      var vMethod = this.getMethod();
      var vUrl = this.getUrl();

      // --------------------------------------
      //   Adding parameters
      // --------------------------------------
      var vParameters = this.getParameters();
      var vParametersList = [];

      for (var vId in vParameters)
      {
        var value = vParameters[vId];

        if (value instanceof Array)
        {
          for (var i=0; i<value.length; i++) {
            vParametersList.push(encodeURIComponent(vId) + "=" + encodeURIComponent(value[i]));
          }
        }
        else
        {
          vParametersList.push(encodeURIComponent(vId) + "=" + encodeURIComponent(value));
        }
      }

      if (vParametersList.length > 0) {
        vUrl += (vUrl.indexOf("?") >= 0 ? "&" : "?") + vParametersList.join("&");
      }

      // --------------------------------------
      //   Adding form fields
      // --------------------------------------
      var vFormFields = this.getFormFields();

      for (var vId in vFormFields)
      {
        var vField = document.createElement("textarea");
        vField.name = vId;
        vField.appendChild(document.createTextNode(vFormFields[vId]));
        this._form.appendChild(vField);
      }

      // --------------------------------------
      //   Preparing form
      // --------------------------------------
      this._form.action = vUrl;
      this._form.method = vMethod;

      // --------------------------------------
      //   Sending data
      // --------------------------------------
      this._data.appendChild(document.createTextNode(this.getData()));
      this._form.submit();
      this.setState("sending");
    },


    /**
     * Converting complete state to numeric value and update state property
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    _onload : function(e)
    {
      if (this._form.src) {
        return;
      }

      this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
    },


    /**
     * Converting named readyState to numeric value and update state property
     *
     * @param e {Event} TODOC
     * @return {void}
     */
    _onreadystatechange : function(e) {
      this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this._frame.readyState]);
    },


    /**
     * TODOC
     *
     * @param vReadyState {var} TODOC
     * @return {void}
     */
    _switchReadyState : function(vReadyState)
    {
      // Ignoring already stopped requests
      switch(this.getState())
      {
        case "completed":
        case "aborted":
        case "failed":
        case "timeout":
          this.warn("Ignore Ready State Change");
          return;
      }

      // Updating internal state
      while (this._lastReadyState < vReadyState) {
        this.setState(qx.io.remote.Exchange._nativeMap[++this._lastReadyState]);
      }
    },




    /*
    ---------------------------------------------------------------------------
      REQUEST HEADER SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @param vLabel {var} TODOC
     * @param vValue {var} TODOC
     * @return {void}
     */
    setRequestHeader : function(vLabel, vValue) {},

    // TODO
    // throw new Error("setRequestHeader is abstract");
    /*
    ---------------------------------------------------------------------------
      RESPONSE HEADER SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @param vLabel {var} TODOC
     * @return {Object} TODOC
     */
    getResponseHeader : function(vLabel) {
      return null;
    },

    // TODO
    // this.error("Need implementation", "getResponseHeader");
    /**
     * Provides an hash of all response headers.
     *
     * @return {Map} TODOC
     */
    getResponseHeaders : function() {
      return {};
    },

    // TODO
    // throw new Error("getResponseHeaders is abstract");
    /*
    ---------------------------------------------------------------------------
      STATUS SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * Returns the current status code of the request if available or -1 if not.
     *
     * @return {Integer} TODOC
     */
    getStatusCode : function() {
      return 200;
    },

    // TODO
    // this.error("Need implementation", "getStatusCode");
    /**
     * Provides the status text for the current request if available and null otherwise.
     *
     * @return {string} TODOC
     */
    getStatusText : function() {
      return "";
    },

    // TODO
    // this.error("Need implementation", "getStatusText");
    /*
    ---------------------------------------------------------------------------
      FRAME UTILITIES
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getIframeWindow : function() {
      return qx.bom.Iframe.getWindow(this._frame);
    },


    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getIframeDocument : function() {
      return qx.bom.Iframe.getDocument(this._frame);
    },


    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getIframeBody : function() {
      return qx.bom.Iframe.getBody(this._frame);
    },




    /*
    ---------------------------------------------------------------------------
      RESPONSE DATA SUPPORT
    ---------------------------------------------------------------------------
    */

    /**
     * TODOC
     *
     * @return {null | var} TODOC
     */
    getIframeTextContent : function()
    {
      var vBody = this.getIframeBody();

      if (!vBody) {
        return null;
      }

      if (!vBody.firstChild) {
        return "";
      }

      // Mshtml returns the content inside a PRE
      // element if we use plain text
      if (vBody.firstChild.tagName &&
          vBody.firstChild.tagName.toLowerCase() == "pre") {
        return vBody.firstChild.innerHTML;
      } else {
        return vBody.innerHTML;
      }
    },


    /**
     * TODOC
     *
     * @return {var} TODOC
     */
    getIframeHtmlContent : function()
    {
      var vBody = this.getIframeBody();
      return vBody ? vBody.innerHTML : null;
    },


    /**
     * Returns the length of the content as fetched thus far
     *
     * @return {Integer} TODOC
     */
    getFetchedLength : function() {
      return 0;
    },

    // TODO
    // throw new Error("getFetchedLength is abstract");
    /**
     * TODOC
     *
     * @return {null | var} TODOC
     */
    getResponseContent : function()
    {
      if (this.getState() !== "completed")
      {
        if (qx.core.Variant.isSet("qx.debug", "on"))
        {
          if (qx.core.Setting.get("qx.ioRemoteDebug")) {
            this.warn("Transfer not complete, ignoring content!");
          }
        }

        return null;
      }

      if (qx.core.Variant.isSet("qx.debug", "on"))
      {
        if (qx.core.Setting.get("qx.ioRemoteDebug")) {
          this.debug("Returning content for responseType: " + this.getResponseType());
        }
      }

      var vText = this.getIframeTextContent();

      switch(this.getResponseType())
      {
        case "text/plain":
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (qx.core.Setting.get("qx.ioRemoteDebugData"))
            {
              this.debug("Response: " + this._responseContent);
            }
          }
          return vText;
          break;

        case "text/html":
          vText = this.getIframeHtmlContent();
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (qx.core.Setting.get("qx.ioRemoteDebugData"))
            {
              this.debug("Response: " + this._responseContent);
            }
          }
          return vText;
          break;

        case "application/json":
          vText = this.getIframeHtmlContent();
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (qx.core.Setting.get("qx.ioRemoteDebugData"))
            {
              this.debug("Response: " + this._responseContent);
            }
          }

          try {
            return vText && vText.length > 0 ? qx.util.Json.parseQx(vText) : null;
          } catch(ex) {
            return this.error("Could not execute json: (" + vText + ")", ex);
          }

        case "text/javascript":
          vText = this.getIframeHtmlContent();
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (qx.core.Setting.get("qx.ioRemoteDebugData"))
            {
              this.debug("Response: " + this._responseContent);
            }
          }

          try {
            return vText && vText.length > 0 ? window.eval(vText) : null;
          } catch(ex) {
            return this.error("Could not execute javascript: (" + vText + ")", ex);
          }

        case "application/xml":
          vText = this.getIframeDocument();
          if (qx.core.Variant.isSet("qx.debug", "on"))
          {
            if (qx.core.Setting.get("qx.ioRemoteDebugData"))
            {
              this.debug("Response: " + this._responseContent);
            }
          }
          return vText;

        default:
          this.warn("No valid responseType specified (" + this.getResponseType() + ")!");
          return null;
      }
    }
  },



  /*
  *****************************************************************************
     DEFER
  *****************************************************************************
  */

  defer : function(statics, members, properties)
  {
    // basic registration to qx.io.remote.Exchange
    // the real availability check (activeX stuff and so on) follows at the first real request
    qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe, "qx.io.remote.transport.Iframe");
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    if (this._frame)
    {
      this._frame.onload = null;
      this._frame.onreadystatechange = null;

      // Reset source to a blank image for gecko
      // Otherwise it will switch into a load-without-end behaviour
      if (qx.core.Variant.isSet("qx.client", "gecko")) {
        this._frame.src = qx.util.ResourceManager.toUri("qx/static/image/blank.gif");
      }

      // Finally remove element node
      document.body.removeChild(this._frame);
    }

    if (this._form) {
      document.body.removeChild(this._form);
    }

    this._disposeFields("_frame", "_form");
  }
});
