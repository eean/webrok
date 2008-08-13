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
     * Til Schneider (til132)
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)
     * Jonathan Rass (jonathan_rass)

************************************************************************ */

/**
 * The GUI definition of the API viewer.
 *
 * The connections between the GUI components are established in
 * the {@link Controller}.
 */
qx.Class.define("apiviewer.Viewer",
{
  extend : qx.ui.container.Composite,




  /*
  *****************************************************************************
     CONSTRUCTOR
  *****************************************************************************
  */
  construct : function()
  {
    this.base(arguments);
    
    this.setLayout(new qx.ui.layout.Dock);

    this.add(this.__createHeader(), {
      edge : "north"
    });

    var tree = new apiviewer.ui.PackageTree();
    tree.setId("tree");

    var buttonView = this.__createTabView(
      tree,
      new apiviewer.ui.SearchView(),
      new apiviewer.ui.LegendView()
    );

    var mainFrame = this.__createMainFrame(
      this.__createToolbar(),
      this.__createDetailFrame()
    );

    this.add(this.__createSplitPane(buttonView, mainFrame));

  },


  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    /**
     * Create the header widget
     *
     * @return {qx.ui.embed.HtmlEmbed} The header widget
     */
    __createHeader : function()
    {
      var header = new qx.ui.embed.HtmlEmbed(
        "<h1>" +
        "<span>" + qx.core.Setting.get("apiviewer.title") + "</span>" +
        " API Documentation" +
        "</h1>" +
        "<div class='version'>qooxdoo " + qx.core.Setting.get("qx.version") + "</div>"
      );
      
      var el = header.getContentElement();
      el.setAttribute("id", "header");
      
      el.setStyle(
        "background",
        "#134275 url(" +
        qx.util.ResourceManager.toUri("apiviewer/image/colorstrip.gif") +
        ") top left repeat-x"
      );

      header.setHeight(70);

      return header;
    },


    /**
     * Creates the button view widget on the left
     *
     * @param treeWidget {qx.ui.core.Widget} The widget for the "tree" pane
     * @param infoWidget {qx.ui.core.Widget} The widget for the "legend" pane
     * @return {qx.ui.tabview.TabView} The configured button view widget
     */
    __createTabView : function(treeWidget, searchWidget, infoWidget)
    {
      
      var tabView = new qx.ui.tabview.TabView;
      tabView.setPadding(5)

      var packageTab = new qx.ui.tabview.Page(null, apiviewer.TreeUtil.ICON_PACKAGE);
      packageTab.setLayout(new qx.ui.layout.Grow);
      packageTab.getButton().setToolTip( new qx.ui.tooltip.ToolTip("Packages"));
      packageTab.add(treeWidget);
      tabView.add(packageTab);
      
      var searchTab = new qx.ui.tabview.Page(null, apiviewer.TreeUtil.ICON_SEARCH);
      searchTab.setLayout(new qx.ui.layout.Grow);
      searchTab.getButton().setToolTip( new qx.ui.tooltip.ToolTip("Search"));
      searchTab.add(searchWidget);
      tabView.add(searchTab);
      
      var infoTab = new qx.ui.tabview.Page(null, apiviewer.TreeUtil.ICON_INFO);
      infoTab.setLayout(new qx.ui.layout.Grow);
      infoTab.getButton().setToolTip( new qx.ui.tooltip.ToolTip("Information"));
      infoTab.add(infoWidget);
      tabView.add(infoTab);

      return tabView;
    },


   /**
     * Creates the tool bar
     *
     * @return {qx.ui.toolbar.ToolBar} The configured tool bar
     */
    __createToolbar : function()
    {
      function createButton(text, clazz, icon, tooltip, checked, id)
      {
        if (!clazz) {
          clazz = qx.ui.toolbar.Button;
        }
        var button = new clazz(text, icon);
        if (checked) {
          button.setChecked(true);
        }

        if (tooltip) {
          button.setToolTip( new qx.ui.tooltip.ToolTip(tooltip));
        }

        button.setId(id);
        return button;
      }

      var toolbar = new qx.ui.toolbar.ToolBar;
      
      toolbar.addSpacer();

      var part = new qx.ui.toolbar.Part;
      toolbar.add(part);

      part.add(createButton(
        "Expand",
        qx.ui.toolbar.CheckBox,
        "apiviewer/image/property18.gif",
        "Expand properties",
        false,
        "btn_expand"
      ));
      part.add(createButton(
        "Inherited",
        qx.ui.toolbar.CheckBox,
        "apiviewer/image/method_public_inherited18.gif",
        "Show inherited items",
        false,
        "btn_inherited"
      ));
      part.add(createButton(
        "Protected",
        qx.ui.toolbar.CheckBox,
        "apiviewer/image/method_protected18.gif",
        "Show protected items",
        false,
        "btn_protected"
      ));
      part.add(createButton(
        "Private",
        qx.ui.toolbar.CheckBox,
        "apiviewer/image/method_private18.gif",
        "Show private/internal items",
        false,
        "btn_private"
      ));

      return toolbar;
    },


    /**
     * Create the detail Frame and adds the Class-, Package and Loader-views to it.
     *
     * @return {qx.ui.layout.CanvasLayout} The detail Frame
     */
    __createDetailFrame : function()
    {
      var detailFrame = new qx.ui.container.Composite(new qx.ui.layout.Canvas);

      detailFrame.getContentElement().setAttribute("id", "content");
      detailFrame.setBackgroundColor("white");

      this._detailLoader = new qx.ui.embed.HtmlEmbed('<div style="padding:10px;"><h1><small>please wait</small>Loading data...</h1></div>');
      this._detailLoader.getContentElement().setAttribute("id", "SplashScreen");

      this._detailLoader.setId("detail_loader");
      detailFrame.add(this._detailLoader, {edge : 0});

      this._classViewer = new apiviewer.ui.ClassViewer;
      this._classViewer.setId("class_viewer");
      detailFrame.add(this._classViewer, {edge : 0});

      this._packageViewer = new apiviewer.ui.PackageViewer;
      this._packageViewer.setId("package_viewer");
      detailFrame.add(this._packageViewer, {edge : 0});

      return detailFrame;
    },


    /**
     * Creates the main frame at the right
     *
     * @param toolbar {qx.legacy.ui.toolbar.ToolBar} Toolbar of the main frame
     * @param detailFrame {qx.legacy.ui.core.Widget} the detail widget
     * @return {qx.legacy.ui.layout.VerticalBoxLayout} the main frame
     */
    __createMainFrame : function(toolbar, detailFrame)
    {
      var mainFrame = new qx.ui.container.Composite;
      mainFrame.setLayout(new qx.ui.layout.VBox);

      mainFrame.add(toolbar);
      mainFrame.add(detailFrame, {flex:1});

      return mainFrame;
    },


    /**
     * Creates the vertival splitter and populates the split panes
     *
     * @param leftWidget {qx.ui.core.Widget} the widget on the left of the splitter
     * @param rightWidget {qx.ui.core.Widget} the widget on the right of the splitter
     * @return {qx.legacy.ui.splitpane.HorizontalSplitPane} the split pane
     */
    __createSplitPane : function(leftWidget, rightWidget)
    {
      var mainSplitPane = new qx.ui.splitpane.Pane("horizontal");
      leftWidget.setWidth(270)
      mainSplitPane.add(leftWidget, 0);
      mainSplitPane.add(rightWidget, 4);
      return mainSplitPane;
    }

  },




  /*
  *****************************************************************************
     SETTINGS
  *****************************************************************************
  */

  settings :
  {
    "apiviewer.title"            : "qooxdoo",
    "apiviewer.initialTreeDepth" : 1
  },




  /*
  *****************************************************************************
     DESTRUCTOR
  *****************************************************************************
  */

  destruct : function()
  {
    this._disposeFields("_classTreeNodeHash");
    this._disposeObjects("_tree", "_detailLoader", "_classViewer", "_packageViewer");
  }
});
