#!/usr/bin/env python
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
#    * Fabian Jakobs (fjakobs)
#
################################################################################

# -*- coding: iso-8859-1 -*-
# Written by Martin v. Lwis <loewis@informatik.hu-berlin.de>
# Plural forms support added by alexander smishlajev <alex@tycobka.lv>

##
#<h2>Module Description</h2>
#<pre>
# NAME
#  module.py -- module short description
#
# SYNTAX
#  module.py --help
#
#  or
#
#  import module
#  result = module.func()
#
# DESCRIPTION
#  The module module does blah.
#
# CAVEATS
#
# KNOWN ISSUES
#  There are no known issues.
#</pre>
##

"""
Generate qooxdoo message catalog from textual translation description.

This program converts a textual Uniforum-style message catalog (.po file) into
a qooxdoo JavaScript catalog (.js file).  This is essentially the same function as the
GNU msgfmt program, however, it is a simpler implementation.

Usage: msgfmt.py [OPTIONS] filename.po

Options:
    -d directory
    --output-directory=directory
        Specify the output directory to write to.  If omitted, output will the current directory

    -n namespace
    --namespace=namespace
        JavaScript target namespace

    -h
    --help
        Print this message and exit.

    -V
    --version
        Display version information and exit.
"""

import sys
import os
import getopt
import struct
import array

__version__ = "1.1"

MESSAGES = {}


##
# Some nice short description of foo(); this can contain html and
# {@link #foo Links} to items in the current file.
#
# @param     a        Describe a positional parameter
# @keyparam  b        Describe a keyword parameter
# @def       foo(name)    # overwrites auto-generated function signature
# @param     name     Describe aliased parameter
# @return             Description of the things returned
# @defreturn          The return type
# @exception IOError  The error it throws
#
def usage (ecode, msg=''):
    """
    Print usage and msg and exit with given code.
    """
    print >> sys.stderr, __doc__
    if msg:
        print >> sys.stderr, msg
    sys.exit(ecode)


def add (msgid, transtr, fuzzy):
    """
    Add a non-fuzzy translation to the dictionary.
    """
    global MESSAGES
    if not fuzzy and transtr and not transtr.startswith('\0'):
        MESSAGES[msgid] = transtr


def escapeJS(str):
    str = str.replace('"', '\\"')
    str = str.replace("'", "\\'")
    str = str.replace("\0", "\\0")
    str = str.replace("\b", "\\b")
    str = str.replace("\t", "\\t")
    str = str.replace("\n", "\\n")
    str = str.replace("\v", "\\v")
    str = str.replace("\f", "\\f")
    str = str.replace("\r", "\\r")
    return str


def generate(infile, languageCode, namespace):
    global MESSAGES
    if namespace != "": namespace += "."
    if len(languageCode.split("_")) > 1:
    	requireString = "#require(%s%s)" % (namespace, languageCode.split("_")[0])
    else:
    	requireString = ""

    output = '''/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2007 by 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     LGPL: http://www.gnu.org/licenses/lgpl.html
     EPL 1.0: http://www.eclipse.org/org/documents/epl-v10.php

   Authors:
     * Sebastian Werner (wpbasti)
     * Andreas Ecker (ecker)
     * Fabian Jakobs (fjakobs)

************************************************************************ */

/* ************************************************************************


%s
************************************************************************ */

/*
WARNING: This file is generated by the gettext tools from %s. Do not edit it by hand.
*/

qx.Locale.define("%s%s",
{
''' % (requireString, infile, namespace, languageCode)

    translations = []
    normalizedMessages = {}
    for msg in MESSAGES:
    	keys = msg.split("\0");
    	if len(keys) <= 1:
    		normalizedMessages[msg] = MESSAGES[msg]
    		continue
    	values = MESSAGES[msg].split("\0");
    	for i in range(len(keys)):
    		normalizedMessages[keys[i]] = values[i]

    for msg in normalizedMessages:
    	if msg == "": continue
    	translations.append('  "%s": "%s"' % (escapeJS(msg), escapeJS(normalizedMessages[msg])))
    output += (",\n").join(translations)
    output += "\n});"
    #print output
    return output


def make (filename, outdir, namespace):
    ID = 1
    STR = 2
    global MESSAGES
    MESSAGES = {}

    # Compute .mo name from .po name and arguments
    if filename.endswith('.po'):
        infile = filename
    else:
        infile = filename + '.po'

    basename = os.path.splitext(os.path.basename(infile))[0]
    outfile = os.path.join(outdir, basename + '.js')

    try:
        lines = open(infile).readlines()
    except IOError, msg:
        print >> sys.stderr, msg
        sys.exit(1)

    section = None
    fuzzy = 0

    # Parse the catalog
    msgid = msgstr = ''
    lno = 0
    for l in lines:
        lno += 1
        # If we get a comment line after a msgstr, this is a new entry
        if l[0] == '#' and section == STR:
            add(msgid, msgstr, fuzzy)
            section = None
            fuzzy = 0
        # Record a fuzzy mark
        if l[:2] == '#,' and (l.find('fuzzy') >= 0):
            fuzzy = 1
        # Skip comments
        if l[0] == '#':
            continue
        # Start of msgid_plural section, separate from singular form with \0
        if l.startswith('msgid_plural'):
            msgid += '\0'
            l = l[12:]
        # Now we are in a msgid section, output previous section
        elif l.startswith('msgid'):
            if section == STR:
                add(msgid, msgstr, fuzzy)
            section = ID
            l = l[5:]
            msgid = msgstr = ''
        # Now we are in a msgstr section
        elif l.startswith('msgstr'):
            section = STR
            l = l[6:]
            # Check for plural forms
            if l.startswith('['):
                # Separate plural forms with \0
                if not l.startswith('[0]'):
                    msgstr += '\0'
                # Ignore the index - must come in sequence
                l = l[l.index(']') + 1:]
        # Skip empty lines
        l = l.strip()
        if not l:
            continue
        # XXX: Does this always follow Python escape semantics?
        l = eval(l)
        if section == ID:
            msgid += l
        elif section == STR:
            msgstr += l
        else:
            print >> sys.stderr, 'Syntax error on %s:%d' % (infile, lno), \
                  'before:'
            print >> sys.stderr, l
            sys.exit(1)
    # Add last entry
    if section == STR:
        add(msgid, msgstr, fuzzy)

    # Compute output
    output = generate(infile, basename, namespace)


    try:
        open(outfile,"w").write(output)
    except IOError,msg:
        print >> sys.stderr, msg



def main ():
    try:
        opts, args = getopt.getopt(sys.argv[1:], 'hVd:n:',
                                   ['help', 'version', 'output-directory=', 'namespace='])
    except getopt.error, msg:
        usage(1, msg)

    outdir = "."
    ns = ""
    # parse options
    for opt, arg in opts:
        if opt in ('-h', '--help'):
            usage(0)
        elif opt in ('-V', '--version'):
            print >> sys.stderr, "msgfmt.py", __version__
            sys.exit(0)
        elif opt in ('-d', '--output-directory'):
            outdir = arg
        elif opt in ('-n', '--namespace'):
            ns = arg
    # do it
    if not args:
        print >> sys.stderr, 'No input file given'
        print >> sys.stderr, "Try `msgfmt --help' for more information."
        return

    for filename in args:
        make(filename, outdir, ns)


if __name__ == '__main__':
    main()
