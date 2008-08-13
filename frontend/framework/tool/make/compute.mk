################################################################################
#
#  qooxdoo - the new era of web development
#
#  http://qooxdoo.org
#
#  Copyright:
#    2006-2008 1&1 Internet AG, Germany, http://www.1und1.de
#
#  License:
#    LGPL: http://www.gnu.org/licenses/lgpl.html
#    EPL: http://www.eclipse.org/org/documents/epl-v10.php
#    See the LICENSE file in the project's top-level directory for details.
#
#  Authors:
#    * Sebastian Werner (wpbasti)
#    * Andreas Ecker (ecker)
#    * Fabian Jakobs (fjakobs)
#
################################################################################

################################################################################
# PROCESSING APPLICATION SETTINGS
################################################################################


# ==============================================================================
# Compute qooxdoo-contrib/include flags
# ==============================================================================

ifneq ($(APPLICATION_INCLUDES),false)

	QOOXDOO_INCLUDE_CACHE = $(FRAMEWORK_PATH)/.includes

	DOWNLOAD_CONTRIBS = $(filter contrib://%, $(APPLICATION_INCLUDES))
	LOCAL_INCLUDES = $(filter-out contrib://%, $(APPLICATION_INCLUDES))

	MANIFESTS = $(patsubst contrib://%, --manifest $(QOOXDOO_INCLUDE_CACHE)/%/Manifest.js , $(DOWNLOAD_CONTRIBS))
	MANIFESTS += $(patsubst %, --manifest %/Manifest.js , $(LOCAL_INCLUDES))

	MANIFEST_ARGS = \
	  --application-build-path $(APPLICATION_BUILD_PATH) \
	  --application-to-root-uri $(APPLICATION_HTML_TO_ROOT_URI) \
	  $(MANIFESTS)

	APPLICATION_ADDITIONAL_CLASS_PATH += `$(CMD_CONTRIB) $(MANIFEST_ARGS) --class-path`
	APPLICATION_ADDITIONAL_CLASS_URI += `$(CMD_CONTRIB) $(MANIFEST_ARGS) --class-uri`

	APPLICATION_ADDITIONAL_BUILD_OPTIONS += `$(CMD_CONTRIB) $(MANIFEST_ARGS) --resource-flags-build`
	APPLICATION_ADDITIONAL_SOURCE_OPTIONS += `$(CMD_CONTRIB) $(MANIFEST_ARGS) --resource-flags-source`
endif


# ==============================================================================
# Compute basics
# ==============================================================================

COMPUTED_CLASS_PATH = --class-path $(FRAMEWORK_SOURCE_PATH)/class,$(APPLICATION_SOURCE_PATH)/class --class-path "$(strip $(APPLICATION_ADDITIONAL_CLASS_PATH))"
COMPUTED_CLASS_URI = --class-uri $(FRAMEWORK_SOURCE_URI)/class,$(APPLICATION_HTML_TO_ROOT_URI)/class --class-uri "$(strip $(APPLICATION_ADDITIONAL_CLASS_URI))"

COMPUTED_BUILD_SCRIPT_NAME = $(APPLICATION_BUILD_PATH)/script/$(APPLICATION_SCRIPT_FILENAME)
COMPUTED_SOURCE_SCRIPT_NAME = $(APPLICATION_SOURCE_PATH)/script/$(APPLICATION_SCRIPT_FILENAME)





# ==============================================================================
# Compute resources
# ==============================================================================

COMPUTED_BUILD_RESOURCE = --copy-resources \
  --resource-input $(FRAMEWORK_SOURCE_PATH)/resource \
  --resource-output $(APPLICATION_BUILD_PATH)/resource \
  --resource-input $(APPLICATION_SOURCE_PATH)/resource \
  --resource-output $(APPLICATION_BUILD_PATH)/resource

ifeq ($(APPLICATION_RESOURCE_FILTER),true)
  COMPUTED_BUILD_RESOURCE += --enable-resource-filter
endif






# ==============================================================================
# Compute settings
# ==============================================================================

COMPUTED_BUILD_SETTING = \
  --use-setting $(FRAMEWORK_NAMESPACE).resourceUri:$(APPLICATION_HTML_TO_ROOT_URI)/resource \
  --use-setting $(APPLICATION_NAMESPACE).resourceUri:$(APPLICATION_HTML_TO_ROOT_URI)/resource

COMPUTED_SOURCE_SETTING = \
  --use-setting $(FRAMEWORK_NAMESPACE).resourceUri:$(FRAMEWORK_SOURCE_URI)/resource \
  --use-setting $(APPLICATION_NAMESPACE).resourceUri:$(APPLICATION_HTML_TO_ROOT_URI)/resource

ifeq ($(APPLICATION_ENABLE_GUI),true)
  COMPUTED_THEME_SETTING =

  ifneq ($(APPLICATION_THEME),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.theme:$(APPLICATION_THEME)
  endif

  ifneq ($(APPLICATION_THEME_COLOR),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.colorTheme:$(APPLICATION_THEME_COLOR)
  endif

  ifneq ($(APPLICATION_THEME_BORDER),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.borderTheme:$(APPLICATION_THEME_BORDER)
  endif

  ifneq ($(APPLICATION_THEME_FONT),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.fontTheme:$(APPLICATION_THEME_FONT)
  endif

  ifneq ($(APPLICATION_THEME_ICON),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.iconTheme:$(APPLICATION_THEME_ICON)
  endif

  ifneq ($(APPLICATION_THEME_WIDGET),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.widgetTheme:$(APPLICATION_THEME_WIDGET)
  endif

  ifneq ($(APPLICATION_THEME_APPEARANCE),)
    COMPUTED_THEME_SETTING += --use-setting qx.legacy.appearanceTheme:$(APPLICATION_THEME_APPEARANCE)
  endif

  COMPUTED_SOURCE_SETTING += $(COMPUTED_THEME_SETTING)
  COMPUTED_BUILD_SETTING += $(COMPUTED_THEME_SETTING)
endif

COMPUTED_SOURCE_SETTING += --use-setting qx.application:$(APPLICATION_NAMESPACE).$(APPLICATION_CLASSNAME)
COMPUTED_BUILD_SETTING += --use-setting qx.application:$(APPLICATION_NAMESPACE).$(APPLICATION_CLASSNAME)

# profiler settings
ifeq ($(APPLICATION_PROFILE_SOURCE),true)
	COMPUTED_SOURCE_SETTING += --use-setting qx.enableAspect:true
endif

ifeq ($(APPLICATION_PROFILE_BUILD),true)
	COMPUTED_BUILD_SETTING += --use-setting qx.enableAspect:true
endif











# ==============================================================================
# Compute locales
# ==============================================================================

ifndef APPLICATION_LOCALES
  COMPUTED_LOCALES = C
else
  COMPUTED_LOCALES = C $(APPLICATION_LOCALES)
endif







# ==============================================================================
# Compute includes
# ==============================================================================

ifeq ($(APPLICATION_ENABLE_GUI),false)
  COMPUTED_THEMES_INCLUDE =
else
  COMPUTED_THEMES_INCLUDE =

  ifneq ($(APPLICATION_THEME),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME)
  endif

  ifneq ($(APPLICATION_THEME_COLOR),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_COLOR)
  endif

  ifneq ($(APPLICATION_THEME_BORDER),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_BORDER)
  endif

  ifneq ($(APPLICATION_THEME_FONT),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_FONT)
  endif

  ifneq ($(APPLICATION_THEME_ICON),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_ICON)
  endif

  ifneq ($(APPLICATION_THEME_WIDGET),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_WIDGET)
  endif

  ifneq ($(APPLICATION_THEME_APPEARANCE),)
    COMPUTED_THEME_SETTING += --include $(APPLICATION_THEME_APPEARANCE)
  endif
endif

COMPUTED_FRAMEWORK_LOCALE_INCLUDE := $(COMPUTED_LOCALES:%= --include $(FRAMEWORK_NAMESPACE).locale.data.% )
COMPUTED_FRAMEWORK_TRANSLATION_INCLUDE := $(COMPUTED_LOCALES:%= --include $(FRAMEWORK_NAMESPACE).locale.translation.% )
COMPUTED_APPLICATION_TRANSLATION_INCLUDE := $(COMPUTED_LOCALES:%= --include $(APPLICATION_NAMESPACE).translation.% )

ifeq ($(APPLICATION_COMPLETE_SOURCE),false)
  COMPUTED_SOURCE_INCLUDE = --include $(APPLICATION_NAMESPACE).$(APPLICATION_CLASSNAME) \
    $(COMPUTED_FRAMEWORK_LOCALE_INCLUDE) \
    $(COMPUTED_FRAMEWORK_TRANSLATION_INCLUDE) \
    $(COMPUTED_APPLICATION_TRANSLATION_INCLUDE) \
    $(COMPUTED_THEMES_INCLUDE)
else
  COMPUTED_SOURCE_INCLUDE = --include '*'
endif

ifneq ($(APPLICATION_COMPLETE_BUILD),true)
  COMPUTED_BUILD_INCLUDE = --include $(APPLICATION_NAMESPACE).$(APPLICATION_CLASSNAME) \
    $(COMPUTED_FRAMEWORK_LOCALE_INCLUDE) \
    $(COMPUTED_FRAMEWORK_TRANSLATION_INCLUDE) \
    $(COMPUTED_APPLICATION_TRANSLATION_INCLUDE) \
    $(COMPUTED_THEMES_INCLUDE)
else
  COMPUTED_BUILD_INCLUDE = --include '*'
endif

ifeq ($(APPLICATION_COMPLETE_API),false)
  COMPUTED_API_INCLUDE = --include $(APPLICATION_NAMESPACE).$(APPLICATION_CLASSNAME)
else
  COMPUTED_API_INCLUDE =
endif





# ==============================================================================
# Compute dependencies
# ==============================================================================

# profiler requires
ifeq ($(APPLICATION_PROFILE_SOURCE),true)
	COMPUTED_SOURCE_DEPENDENCIES += --add-require qx.Class:qx.dev.Profile
endif

ifeq ($(APPLICATION_PROFILE_BUILD),true)
	COMPUTED_BUILD_DEPENDENCIES += --add-require qx.Class:qx.dev.Profile
endif












# ==============================================================================
# Compute variant configuration
# ==============================================================================

COMPUTED_BUILD_VARIANT = --use-variant qx.deprecationWarnings:off
COMPUTED_SOURCE_VARIANT =

ifeq ($(APPLICATION_OPTIMIZE_REMOVE_DEBUG),true)
  COMPUTED_BUILD_VARIANT += --use-variant qx.debug:off
else
  COMPUTED_BUILD_VARIANT += --use-variant qx.debug:on
endif

ifeq ($(APPLICATION_OPTIMIZE_REMOVE_COMPATIBILITY),true)
  COMPUTED_BUILD_VARIANT += --use-variant qx.compatibility:off
else
  COMPUTED_BUILD_VARIANT += --use-variant qx.compatibility:on
endif

ifeq ($(APPLICATION_PROFILE_SOURCE),true)
  COMPUTED_SOURCE_VARIANT += --use-variant qx.aspects:on
endif

# profiler variants
ifeq ($(APPLICATION_OPTIMIZE_REMOVE_ASPECTS),true)
	ifneq ($(APPLICATION_PROFILE_SOURCE),true)
	  COMPUTED_SOURCE_VARIANT += --use-variant qx.aspects:off
	endif
	ifneq ($(APPLICATION_PROFILE_BUILD),true)
	  COMPUTED_BUILD_VARIANT += --use-variant qx.aspects:off
	endif
endif










# ==============================================================================
# Compute options
# ==============================================================================

COMPUTED_SOURCE_OPTIONS =
COMPUTED_BUILD_OPTIONS =

ifeq ($(APPLICATION_OPTIMIZE_STRINGS),true)
  COMPUTED_BUILD_OPTIONS += --optimize-strings
endif

ifeq ($(APPLICATION_OPTIMIZE_VARIABLES),true)
  COMPUTED_BUILD_OPTIONS += --optimize-variables
endif

ifeq ($(APPLICATION_OPTIMIZE_BASE_CALL),true)
  COMPUTED_BUILD_OPTIONS += --optimize-base-call
endif

ifeq ($(APPLICATION_LINEBREAKS_SOURCE),true)
  COMPUTED_SOURCE_OPTIONS += --add-new-lines --add-file-ids
endif

ifeq ($(APPLICATION_LINEBREAKS_BUILD),true)
  COMPUTED_BUILD_OPTIONS += --add-new-lines --add-file-ids
endif

ifneq ($(APPLICATION_ADDITIONAL_SOURCE_OPTIONS),)
  COMPUTED_SOURCE_OPTIONS += $(APPLICATION_ADDITIONAL_SOURCE_OPTIONS)
endif

ifneq ($(APPLICATION_ADDITIONAL_BUILD_OPTIONS),)
  COMPUTED_BUILD_OPTIONS += $(APPLICATION_ADDITIONAL_BUILD_OPTIONS)
endif

ifneq ($(COMPUTED_SOURCE_DEPENDENCIES),)
  COMPUTED_SOURCE_OPTIONS += $(COMPUTED_SOURCE_DEPENDENCIES)
endif

ifneq ($(COMPUTED_SOURCE_DEPENDENCIES),)
  COMPUTED_BUILD_OPTIONS += $(COMPUTED_BUILD_DEPENDENCIES)
endif






# ==============================================================================
# Adobe AIR support
# ==============================================================================

# Auto detected by looking for binary "adl", the "adt" in "bin" is just a shell
# script or batch file which does not work via which under cygwin
ifneq ($(APPLICATION_AIR_PATH),)
	COMPUTED_CMD_AIR_ADT := $(APPLICATION_AIR_PATH)/lib/adt.jar
else
	COMPUTED_CMD_AIR_ADT := $(shell which adl 2> /dev/null | sed s:/bin/adl:/lib/adt.jar:g)
endif
