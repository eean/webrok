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

#
# Framework basics
#
FRAMEWORK_NAMESPACE = qx
FRAMEWORK_PATH = $(QOOXDOO_PATH)/frontend/framework


#
# Framework paths
#
FRAMEWORK_NAMESPACE_PATH := $(shell echo $(FRAMEWORK_NAMESPACE) | sed s:\\.:/:g)
FRAMEWORK_SOURCE_PATH = $(FRAMEWORK_PATH)/source
FRAMEWORK_CACHE_PATH = $(FRAMEWORK_PATH)/.cache
FRAMEWORK_TOOL_PATH = $(FRAMEWORK_PATH)/tool
TOOL2_PATH = $(QOOXDOO_PATH)/frontend/tool/bin


#
# Framework config
#
FRAMEWORK_VERSION := $(shell svn propget qx:version $(QOOXDOO_PATH)/frontend)
FRAMEWORK_SVNINFO := $(shell python $(TOOL2_PATH)/svninfo.py $(QOOXDOO_PATH)/frontend)

ifneq ($(FRAMEWORK_SVNINFO),"")
  FRAMEWORK_FULL_VERSION = $(FRAMEWORK_VERSION) $(FRAMEWORK_SVNINFO)
else
  FRAMEWORK_FULL_VERSION = $(FRAMEWORK_VERSION)
endif



#
# Framework URIs
#
FRAMEWORK_URI = $(QOOXDOO_URI)/frontend/framework
FRAMEWORK_SOURCE_URI = $(FRAMEWORK_URI)/source
FRAMEWORK_CLDR_DOWNLOAD_URI = http://unicode.org/cldr/data/common/main


#
# Configure commands
#
CMD_LINE = echo "----------------------------------------------------------------------------"
CMD_NICE = nice -n 10
CMD_PYTHON = $(CMD_NICE) python -t -O
CMD_GENERATOR = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/generator.py --cache-directory $(FRAMEWORK_CACHE_PATH) --version "$(FRAMEWORK_FULL_VERSION)"
CMD_GENERATOR2 = $(CMD_PYTHON) $(TOOL2_PATH)/generator.py
CMD_CONTRIB = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/manifest.py
CMD_DOWNLOAD_CONTRIB = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/download-contrib.py
CMD_LINT = $(CMD_PYTHON) $(TOOL2_PATH)/ecmalint.py
CMD_CLDR = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/cldr.py
CMD_MSGFMT = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/msgfmt.py
CMD_CHECKLOCALES = $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/checklocales.py
CMD_REMOVE = $(CMD_NICE) rm -rf
CMD_COPY = $(CMD_NICE) cp -f
CMD_FIND = $(CMD_NICE) find
CMD_ZIP = $(CMD_NICE) zip
CMD_TAR = $(CMD_NICE) tar
CMD_ZIP_CREATE = $(CMD_ZIP) -rq
CMD_TAR_CREATE = $(CMD_TAR) cfzp
CMD_DIR = $(CMD_NICE) mkdir -p
CMD_ANY2DOS = | xargs $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/textutil.py --command any2Dos
CMD_ANY2UNIX = | xargs $(CMD_PYTHON) $(FRAMEWORK_TOOL_PATH)/modules/textutil.py --command any2Unix
CMD_MKEXEC = $(CMD_NICE) chmod a+rx

# Optimized for remote sync (ssh etc.)
CMD_SYNC_ONLINE = $(CMD_NICE) rsync --checksum --compress --recursive --delete --inplace --links --safe-links --exclude .svn

# Optimized for local sync (same computer, filesystem)
CMD_SYNC_OFFLINE = $(CMD_NICE) rsync --recursive --delete --inplace --links --safe-links --exclude .svn




#
# Configure files
#
FILES_TEXT = \( -name "*.py" -o -name "*.sh" -o -name "*.js" -o -name "*.html" -o -name "*.css" -o -name "*.xml" -o -name Makefile -o -name AUTHORS -o -name LICENSE -o -name README -o -name RELEASENOTES -o -name TODO \)
FILES_TEMP = \( -name "*.rej" -o -name "*.orig" -o -name "*.pyc" -o -name "*.pyo" -o -name "*.bak" -o -name "*.old" -o -name "*~" -o -name "messages.pot" \)
FILES_EXEC = \( -name "*.py" -o -name "*.sh" \)
