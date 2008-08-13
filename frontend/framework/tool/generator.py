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
#    * Sebastian Werner (wpbasti)
#    * Andreas Ecker (ecker)
#    * Fabian Jakobs (fjakobs)
#    * Alessandro Sala (asala)
#
################################################################################

import sys, re, os, optparse, math

# reconfigure path to import own modules from modules subfolder
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(sys.argv[0])), "modules"))

import config, tokenizer, loader, api, tree, treegenerator, settings, variants, resources
import filetool, stringoptimizer, optparseext, privateoptimizer, variableoptimizer, compiler
import migrator, textutil, graph, variantoptimizer, basecalloptimizer
import obfuscator, accessorobfuscator





def getparser():
    parser = optparse.OptionParser("usage: %prog [options]", option_class=optparseext.ExtendAction)


    #################################################################################
    # GENERAL
    #################################################################################

    # From/To File
    parser.add_option("--from-file", dest="fromFile", metavar="FILENAME", help="Read options from FILENAME.")
    parser.add_option("--export-to-file", dest="exportToFile", metavar="FILENAME", help="Store options to FILENAME.")

    # Directories (Lists, Match using index)
    parser.add_option("--class-path", action="extend", dest="classPath", metavar="DIRECTORY", type="string", default=[], help="Define a class path.")
    parser.add_option("--class-uri", action="extend", dest="classUri", metavar="PATH", type="string", default=[], help="Define a script path for the source version.")
    parser.add_option("--class-encoding", action="extend", dest="classEncoding", metavar="ENCODING", type="string", default=[], help="Define the encoding for a class path.")
    parser.add_option("--resource-input", action="extend", dest="resourceInput", metavar="DIRECTORY", type="string", default=[], help="Define a resource input directory.")
    parser.add_option("--resource-output", action="extend", dest="resourceOutput", metavar="DIRECTORY", type="string", default=[], help="Define a resource output directory.")

    # Available Actions
    parser.add_option("--generate-compiled-script", action="store_true", dest="generateCompiledScript", default=False, help="Compile source files.")
    parser.add_option("--generate-source-script", action="store_true", dest="generateSourceScript", default=False, help="Generate source version.")
    parser.add_option("--generate-api-documentation", action="store_true", dest="generateApiDocumentation", default=False, help="Generate API documentation.")
    parser.add_option("--copy-resources", action="store_true", dest="copyResources", default=False, help="Copy resource files.")
    parser.add_option("--fix-source", action="store_true", dest="fixSource", default=False, help="Fix source files")
    parser.add_option("--pretty-print", action="store_true", dest="prettyPrint", default=False, help="Pretty print source code.")
    parser.add_option("--migrate-source", action="store_true", dest="migrateSource", default=False, help="Migrate existing code to new version.")

    # Debug Actions
    parser.add_option("--store-tokens", action="store_true", dest="storeTokens", default=False, help="Store tokenized content of source files. (Debugging)")
    parser.add_option("--store-tree", action="store_true", dest="storeTree", default=False, help="Store tree content of source files. (Debugging)")
    parser.add_option("--print-files", action="store_true", dest="printFiles", default=False, help="Output known files. (Debugging)")
    parser.add_option("--print-modules", action="store_true", dest="printModules", default=False, help="Output known modules. (Debugging)")
    parser.add_option("--print-files-without-modules", action="store_true", dest="printFilesWithoutModules", default=False, help="Output files which have no module connection. (Debugging)")
    parser.add_option("--print-includes", action="store_true", dest="printIncludes", default=False, help="Output sorted file list. (Debugging)")
    parser.add_option("--print-includes-file", dest="printIncludesFile", default=False, help="Save sorted include list to a file. (Debugging)")
    parser.add_option("--print-dependencies", action="store_true", dest="printDependencies", default=False, help="Output dependencies of files. (Debugging)")
    parser.add_option("--dependencies-graphviz-file", dest="depDotFile", metavar="FILENAME", help="Save dependencies as graphviz dot file. (Debugging)")

    # Output files
    parser.add_option("--source-script-file", dest="sourceScriptFile", metavar="FILENAME", help="Name of output file from source build process.")
    parser.add_option("--source-template-input-file", dest="sourceTemplateInputFile", metavar="FILENAME", help="Name of a template file to patch")
    parser.add_option("--source-template-output-file", dest="sourceTemplateOutputFile", metavar="FILENAME", help="Name of the resulting file to store the modified template to.")
    parser.add_option("--source-template-replace", dest="sourceTemplateReplace", default="<!-- qooxdoo-script-block -->", metavar="CODE", help="Content of the template which should be replaced with the script block.")
    parser.add_option("--compiled-script-file", dest="compiledScriptFile", metavar="FILENAME", help="Name of output file from compiler.")
    parser.add_option("--api-documentation-json-file", dest="apiDocumentationJsonFile", metavar="FILENAME", help="Name of JSON API file.")
    parser.add_option("--api-documentation-xml-file", dest="apiDocumentationXmlFile", metavar="FILENAME", help="Name of XML API file.")
    parser.add_option("--api-separate-files", action="store_true", dest="apiSeparateFiles", default=False, help="Output each class documentation into a separate file.")
    parser.add_option("--api-documentation-index-file", dest="apiDocumentationIndexFile", metavar="FILENAME", help="Name of API search index file.")

    # Encoding
    parser.add_option("--script-output-encoding", dest="scriptOutputEncoding", default="utf-8", metavar="ENCODING", help="Defines the encoding used for script output files.")
    parser.add_option("--xml-output-encoding", dest="xmlOutputEncoding", default="utf-8", metavar="ENCODING", help="Defines the encoding used for XML output files.")



    #################################################################################
    # OPTIONS
    #################################################################################

    # General options
    parser.add_option("-q", "--quiet", action="store_false", dest="verbose", default=False, help="Quiet output mode.")
    parser.add_option("-v", "--verbose", action="store_true", dest="verbose", help="Verbose output mode.")
    parser.add_option("--version", dest="version", default="0.0", metavar="VERSION", help="Version number of qooxdoo")
    parser.add_option("--package-id", dest="packageId", default="", metavar="ID", help="Defines a package ID (required for string optimization etc.)")
    parser.add_option("--disable-internal-check", action="store_true", dest="disableInternalCheck", default=False, help="Disable check of modifications to internal files.")

    # Options for source and compiled version
    parser.add_option("--use-setting", action="extend", dest="useSetting", type="string", metavar="NAMESPACE.KEY:VALUE", default=[], help="Define a setting.")
    parser.add_option("--use-variant", action="extend", dest="useVariant", type="string", metavar="NAMESPACE.KEY:VALUE", default=[], help="Optimize for the given variant.")
    parser.add_option("--add-new-lines", action="store_true", dest="addNewLines", default=False, help="Keep newlines in compiled files.")
    parser.add_option("--add-require", action="extend", dest="addRequire", metavar="CLASS1:CLASS2", type="string", default=[], help="Define that CLASS1 requires CLASS2.")
    parser.add_option("--add-use", action="extend", dest="addUse", metavar="CLASS1:CLASS2", type="string", default=[], help="Define that CLASS1 uses CLASS2.")

    # Options for compiled version
    parser.add_option("--add-file-ids", action="store_true", dest="addFileIds", default=False, help="Add file IDs to compiled output.")
    parser.add_option("--optimize-strings", action="store_true", dest="optimizeStrings", default=False, help="Optimize strings. Increase mshtml performance.")
    parser.add_option("--optimize-variables", action="store_true", dest="optimizeVariables", default=False, help="Optimize variables. Reducing size.")
    parser.add_option("--optimize-variables-skip-prefix", action="store", dest="optimizeVariablesSkipPrefix", metavar="PREFIX", default="", help="Skip optimization of variables beginning with PREFIX [default: optimize all variables].")
    parser.add_option("--optimize-base-call", action="store_true", dest="optimizeBaseCall", default=False, help="Optimize call to 'this.base'. Optimizing runtime of super class calls.")
    parser.add_option("--optimize-private", action="store_true", dest="optimizePrivate", default=False, help="Optimize private members. Reducing size and testing private.")
    parser.add_option("--obfuscate", action="store_true", dest="obfuscate", default=False, help="Enable obfuscation")
    parser.add_option("--obfuscate-accessors", action="store_true", dest="obfuscateAccessors", default=False, help="Enable accessor obfuscation")

    # Options for pretty printing
    compiler.addCommandLineOptions(parser)

    # Options for resource copying
    parser.add_option("--enable-resource-filter", action="store_true", dest="enableResourceFilter", default=False, help="Enable filtering of resource files used by classes (based on #embed).")

    # Options for token/tree storage
    parser.add_option("--token-output-directory", dest="tokenOutputDirectory", metavar="DIRECTORY", help="Define output directory for tokenizer result of the incoming JavaScript files. (Debugging)")
    parser.add_option("--tree-output-directory", dest="treeOutputDirectory", metavar="DIRECTORY", help="Define output directory for generated tree of the incoming JavaScript files. (Debugging)")

    # Cache Directory
    parser.add_option("--cache-directory", dest="cacheDirectory", metavar="DIRECTORY", help="If this is defined the loader trys to use cache to optimize the performance.")

    # Options for migration support
    parser.add_option("--migration-target", dest="migrationTarget", metavar="VERSION", help="Define the target for migration of source code.")
    parser.add_option("--migration-input", action="extend", dest="migrationInput", metavar="DIRECTORY", type="string", default=[], help="Define additional directories for to directories to migrate e.g. HTML files, ...")




    #################################################################################
    # INCLUDE/EXCLUDE
    #################################################################################

    # Include/Exclude
    parser.add_option("-i", "--include", action="extend", dest="include", metavar="ID", type="string", default=[], help="Include ID")
    parser.add_option("-e", "--exclude", action="extend", dest="exclude", metavar="ID", type="string", default=[], help="Exclude ID")
    parser.add_option("--include-without-dependencies", action="extend", dest="includePure", metavar="ID", type="string", default=[], help="Include ID")
    parser.add_option("--exclude-without-dependencies", action="extend", dest="excludePure", metavar="ID", type="string", default=[], help="Exclude ID")

    return parser






def argparser(cmdlineargs):

    # Parse arguments
    parser = getparser()
    (options, args) = parser.parse_args(cmdlineargs)

    if options.generateSourceScript and (
                                         options.obfuscateAccessors or
                                         options.optimizeStrings or
                                         options.optimizeVariables or
                                         options.optimizeVariablesSkipPrefix or
                                         options.optimizeBaseCall or
                                         options.optimizePrivate or
                                         options.obfuscate
                                         ):
        parser.error("The option --generate-source-script cannot be used with source code optimizations!")


    # Export to file
    if options.exportToFile != None:
        print
        print "  EXPORTING:"
        print "----------------------------------------------------------------------------"

        print "  * Translating options..."

        optionString = "# Exported configuration from build.py\n\n"
        ignoreValue = True
        lastWasKey = False

        for arg in cmdlineargs:
            if arg == "--export-to-file":
                ignoreValue = True

            elif arg.startswith("--"):
                if lastWasKey:
                    optionString += "\n"

                optionString += arg[2:]
                ignoreValue = False
                lastWasKey = True

            elif arg.startswith("-"):
                print "     - Could not export short argument: %s" % arg
                optionString += "\n# Ignored short argument %s\n" % arg
                ignoreValue = True

            elif not ignoreValue:
                optionString += " = %s\n" % arg
                ignoreValue = True
                lastWasKey = False



        print "  * Export to file: %s" % options.exportToFile
        filetool.save(options.exportToFile, optionString)

        sys.exit(0)

    # Read from file
    elif options.fromFile != None:

        print
        print "  INITIALIZATION:"
        print "----------------------------------------------------------------------------"

        print "  * Reading configuration..."

        # Convert file content into arguments
        fileargs = {}
        fileargpos = 0
        fileargid = "default"
        currentfileargs = []
        fileargs[fileargid] = currentfileargs

        alternativeFormatBegin = re.compile("\s*\[\s*")
        alternativeFormatEnd = re.compile("\s*\]\s*=\s*")
        emptyLine = re.compile("^\s*$")

        for line in file(options.fromFile).read().split("\n"):
            line = line.strip()

            if emptyLine.match(line) or line.startswith("#") or line.startswith("//"):
                continue

            # Translating...
            line = alternativeFormatBegin.sub(" = ", line)
            line = alternativeFormatEnd.sub(":", line)

            # Splitting line
            line = line.split("=")

            # Extract key element
            key = line.pop(0).strip()

            # Separate packages
            if key == "package":
                fileargpos += 1
                fileargid = line[0].strip()

                print "    - Found package: %s" % fileargid

                currentfileargs = []
                fileargs[fileargid] = currentfileargs
                continue

            currentfileargs.append("--%s" % key)

            if len(line) > 0:
                value = line[0].strip()
                currentfileargs.append(value)

        # Parse
        defaultargs = fileargs["default"]

        if len(fileargs) > 1:
            (fileDb, moduleDb) = load(getparser().parse_args(defaultargs)[0])

            for filearg in fileargs:
                if filearg == "default":
                    continue

                print
                print
                print
                print
                print "  PACKAGE: %s" % filearg
                print "----------------------------------------------------------------------------"

                combinedargs = []
                combinedargs.extend(defaultargs)
                combinedargs.extend(fileargs[filearg])

                options = getparser().parse_args(combinedargs)[0]
                execute(fileDb, moduleDb, options, filearg)

        else:
            options = getparser().parse_args(defaultargs)[0]
            (fileDb, moduleDb) = load(options)

            execute(fileDb, moduleDb, options, "")

    else:
        print
        print "  INITIALIZATION:"
        print "----------------------------------------------------------------------------"

        print "  * Processing arguments..."

        (fileDb, moduleDb) = load(options)

        execute(fileDb, moduleDb, options, options.packageId)







def main():
    if len(sys.argv[1:]) == 0:
        basename = os.path.basename(sys.argv[0])
        print "usage: %s [options]" % basename
        print "Try '%s -h' or '%s --help' to show the help message." % (basename, basename)
        sys.exit(1)

    argparser(sys.argv[1:])






def load(options):

    ######################################################################
    #  SOURCE LOADER
    ######################################################################

    print
    print "  SOURCE LOADER:"
    print "----------------------------------------------------------------------------"

    if options.classPath == None or len(options.classPath) == 0:
        if len(options.migrationInput) == 0:
            basename = os.path.basename(sys.argv[0])
            print "You must define at least one class path!"
            print "usage: %s [options]" % basename
            print "Try '%s -h' or '%s --help' to show the help message." % (basename, basename)
            sys.exit(1)

    (fileDb, moduleDb) = loader.indexAll(options)





    ######################################################################
    #  DEBUG OUTPUT JOBS
    ######################################################################

    if options.printFiles:
        print
        print "  OUTPUT OF KNOWN FILES:"
        print "----------------------------------------------------------------------------"
        print "  * These are all known files:"
        for fileEntry in fileDb:
            print "    - %s (%s)" % (fileEntry, fileDb[fileEntry]["path"])

    if options.printModules:
        print
        print "  OUTPUT OF KNOWN MODULES:"
        print "----------------------------------------------------------------------------"
        print "  * These are all known modules:"
        for moduleEntry in moduleDb:
            print "    * %s" % moduleEntry
            for fileEntry in moduleDb[moduleEntry]:
                print "      - %s" % fileEntry

    if options.printFilesWithoutModules:
        print
        print "  OUTPUT OF FILES WHICH HAVE NO MODULE CONNECTION:"
        print "----------------------------------------------------------------------------"
        print "  * These are all files without a module connection:"
        for fileEntry in fileDb:
            fileFound = False

            for moduleEntry in moduleDb:
                for moduleFile in moduleDb[moduleEntry]:
                    if moduleFile == fileEntry:
                        fileFound = True
                        break

            if not fileFound:
                print "    - %s" % fileEntry

    return fileDb, moduleDb








def execute(fileDb, moduleDb, options, pkgid="", names=[]):


    ######################################################################
    #  SORT OF INCLUDE LIST
    ######################################################################

    print
    print "  GENERATE CLASS INCLUDE LIST:"
    print "----------------------------------------------------------------------------"

    sortedIncludeList = loader.getSortedList(options, fileDb, moduleDb)

    if options.printIncludes:
        print
        print "  PRINT OF INCLUDE ORDER:"
        print "----------------------------------------------------------------------------"
        print "  * The files will be included in this order:"
        for fileId in sortedIncludeList:
            print "    - %s" % fileId


    if options.printIncludesFile:
        includeFile = open(options.printIncludesFile, "w")
        for fileId in sortedIncludeList:
            includeFile.write(fileId + "\n")
        includeFile.close()


    if options.printDependencies:
        print
        print "  OUTPUT OF DEPENDENCIES:"
        print "----------------------------------------------------------------------------"
        print "  * These are all included files with their dependencies:"
        for fileId in sortedIncludeList:
            print "    - %s" % fileId
            if len(fileDb[fileId]["loadtimeDeps"]) > 0:
                print "      - Loadtime: "
                for depEntry in fileDb[fileId]["loadtimeDeps"]:
                    print "        - %s" % depEntry

            if len(fileDb[fileId]["runtimeDeps"]) > 0:
                print "      - Runtime: "
                for depEntry in fileDb[fileId]["runtimeDeps"]:
                    print "        - %s" % depEntry

            if len(fileDb[fileId]["optionalDeps"]) > 0:
                print "      - Optional: "
                for depEntry in fileDb[fileId]["optionalDeps"]:
                    print "        - %s" % depEntry





    ######################################################################
    #  GRAPHVIZ OUTPUT
    ######################################################################

    if options.depDotFile:
        graph.store(fileDb, sortedIncludeList, options)






    ######################################################################
    #  SOURCE MIGRATION
    ######################################################################

    if options.migrateSource:
        print
        print "  SOURCE MIGRATION:"
        print "----------------------------------------------------------------------------"

        print "  * Migrate Source Code..."

        migrator.handle(fileDb, options, options.migrationTarget,
                        options.migrationInput, options.verbose)

        # Return after migration: Ignore other jobs
        return





    ######################################################################
    #  GENERATION OF FIXED CODE
    ######################################################################

    if options.fixSource:
        print
        print "  FIX SOURCE CODE:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Fixing code..."
        else:
            print "  * Fixing code: ",

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - Reading %s" % fileId

            fileEntry = fileDb[fileId]

            filePath = fileEntry["path"]
            fileEncoding = fileEntry["encoding"]

            fileContent = filetool.read(filePath, fileEncoding)
            fixedContent = textutil.removeTrailingSpaces(textutil.tab2Space(textutil.any2Unix(fileContent), 2))

            if fixedContent != fileContent:
                if options.verbose:
                    print "      - Storing modifications..."
                else:
                    sys.stdout.write("!")
                    sys.stdout.flush()

                filetool.save(filePath, fixedContent, fileEncoding)

            elif not options.verbose:
                sys.stdout.write(".")
                sys.stdout.flush()

        if not options.verbose:
            print

        # Return after fixing: Ignore other jobs
        return






    ######################################################################
    #  GENERATION OF PRETTY PRINTED CODE
    ######################################################################

    if options.prettyPrint:
        print
        print "  GENERATION OF PRETTY PRINTED CODE:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Pretty printing..."
        else:
            print "  * Pretty printing: ",

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - Compiling %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            prettyFileContent = compiler.compile(loader.getTree(fileDb, fileId, options), options)

            if not prettyFileContent.endswith("\n"):
                prettyFileContent += "\n"

            filetool.save(fileDb[fileId]["path"], prettyFileContent)

        if not options.verbose:
            print

        # Return after pretty print: Ignore other jobs
        return





    ######################################################################
    #  INLINE CODE
    ######################################################################

    inlineSourceCode = []
    inlineCompiledCode = []







    ######################################################################
    #  SUPPORT FOR VARIANTS
    ######################################################################

    if len(options.useVariant) > 0 and not options.generateSourceScript:
        print
        print "  VARIANT OPTIMIZATION:"
        print "----------------------------------------------------------------------------"

        variantMap = {}
        for variant in options.useVariant:
            keyValue = variant.split(":")
            if len(keyValue) != 2:
                print "  * Error: Variants must be specified as key value pair separated by ':'!"
                sys.exit(1)

            variantMap[keyValue[0]] = keyValue[1]

        if options.verbose:
            print "  * Optimizing for variant setup..."
        else:
            print "  * Optimizing for variant setup: ",

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            if variantoptimizer.search(loader.getTree(fileDb, fileId, options), variantMap, fileId, options.verbose):
                if options.verbose:
                    print "      - Modified!"

        if not options.verbose:
            print









    ######################################################################
    #  BASE CALL OPTIMIZATION
    ######################################################################

    if options.optimizeBaseCall:
        print
        print "  BASE CALL OPTIMIZATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Optimizing this.base calls..."
        else:
            print "  * Optimizing this.base calls: ",

        counter = 0

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            counter += basecalloptimizer.patch(loader.getTree(fileDb, fileId, options))

        if not options.verbose:
            print

        print "  * Optimized %s calls" % counter





    ######################################################################
    #  ACCESSOR OBFUSCATION
    ######################################################################

    if options.obfuscateAccessors:
        print
        print "  ACCESSOR OBFUSCATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Obfuscating..."
        else:
            print "  * Obfuscating: ",

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            accessorobfuscator.process(loader.getTree(fileDb, fileId, options), options.verbose)

        if not options.verbose:
            print




    ######################################################################
    #  STRING OPTIMIZATION
    ######################################################################

    if options.optimizeStrings:
        print
        print "  STRING OPTIMIZATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Searching strings..."
        else:
            print "  * Searching strings: ",

        stringMap = {}

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            localMap = stringoptimizer.search(loader.getTree(fileDb, fileId, options), options.verbose)

            for value in localMap:
                if value in stringMap:
                    stringMap[value] += localMap[value]
                else:
                    stringMap[value] = localMap[value]

        if not options.verbose:
            print

        counter = 0
        for value in stringMap:
            counter += stringMap[value]

        stringList = stringoptimizer.sort(stringMap)

        print "  * Found %s string instances (%s unique)" % (counter, len(stringMap))

        if options.verbose:
            print "  * Replacing strings..."
        else:
            print "  * Replacing strings: ",

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            stringoptimizer.replace(loader.getTree(fileDb, fileId, options), stringList, "$" + pkgid, options.verbose)

        if not options.verbose:
            print

        print "  * Generating replacement..."
        inlineCompiledCode.append(stringoptimizer.replacement(stringList, "$" + pkgid))









    ######################################################################
    #  LOCAL VARIABLE OPTIMIZATION
    ######################################################################

    if options.optimizeVariables or options.obfuscate:
        print
        print "  LOCAL VARIABLE OPTIMIZATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Optimizing variables..."
        else:
            print "  * Optimizing variables: ",

        counter = 0

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            counter += variableoptimizer.search(
                loader.getTree(fileDb, fileId, options),
                [], 0, 0, "$",
                skipPrefix = options.optimizeVariablesSkipPrefix,
                verbose = options.verbose
            )

        if not options.verbose:
            print

        print "  * Optimized %s variables" % counter





    ######################################################################
    #  PRIVATE MEMBER OPTIMIZATION
    ######################################################################

    if options.optimizePrivate:
        print
        print "  PRIVATE MEMBER OPTIMIZATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Optimizing private members..."
        else:
            print "  * Optimizing private members: ",

        counter = 0

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            counter += privateoptimizer.patch(loader.getTree(fileDb, fileId, options), {}, "$", options.verbose)

        if not options.verbose:
            print

        print "  * Optimized %s keys" % counter





    ######################################################################
    #  OBFUSCATION
    ######################################################################

    if options.obfuscate:
        print
        print "  OBFUSCATION:"
        print "----------------------------------------------------------------------------"

        if options.verbose:
            print "  * Searching for assignments..."
        else:
            print "  * Searching for assignments: ",

        identifiers = {}

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            obfuscator.search(loader.getTree(fileDb, fileId, options), identifiers, options.verbose)

        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            obfuscator.patch(loader.getTree(fileDb, fileId, options), identifiers, options.verbose)

        if not options.verbose:
            print





    ######################################################################
    #  TOKEN STORAGE
    ######################################################################

    if options.storeTokens:
        print
        print "  TOKEN STORAGE:"
        print "----------------------------------------------------------------------------"

        if options.tokenOutputDirectory == None:
            print "  * You must define the token output directory!"
            sys.exit(1)

        if options.verbose:
            print "  * Storing tokens..."
        else:
            print "  * Storing tokens: ",

        for fileId in sortedIncludeList:
            tokenString = tokenizer.convertTokensToString(loader.getTokens(fileDb, fileId, options))

            if options.verbose:
                print "    * Writing tokens for %s (%s KB)..." % (fileIdm, len(tokenString) / 1000.0)
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            filetool.save(os.path.join(filetool.normalize(options.tokenOutputDirectory), fileId + config.TOKENEXT), tokenString)

        if not options.verbose:
            print







    ######################################################################
    #  TREE STORAGE
    ######################################################################

    if options.storeTree:
        print
        print "  TREE STORAGE:"
        print "----------------------------------------------------------------------------"

        if options.treeOutputDirectory == None:
            print "  * You must define the tree output directory!"
            sys.exit(1)

        if options.verbose:
            print "  * Storing tree..."
        else:
            print "  * Storing tree: ",

        for fileId in sortedIncludeList:
            treeString = "<?xml version=\"1.0\" encoding=\"" + options.xmlOutputEncoding + "\"?>\n" + tree.nodeToXmlString(loader.getTree(fileDb, fileId, options))

            if options.verbose:
                print "    * Writing tree for %s (%s KB)..." % (fileId, len(treeString) / 1000.0)
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            filetool.save(os.path.join(filetool.normalize(options.treeOutputDirectory), fileId + config.XMLEXT), treeString)

        if not options.verbose:
            print








    ######################################################################
    #  GENERATION OF API
    ######################################################################

    if options.generateApiDocumentation:
        print
        print "  GENERATION OF API:"
        print "----------------------------------------------------------------------------"

        if options.apiDocumentationJsonFile == None and options.apiDocumentationXmlFile == None:
            print "  * You must define one of JSON or XML API documentation file!"

        docTree = None

        if options.verbose:
            print "  * Generating API tree..."
        else:
            print "  * Generating API tree: ",

        hasDocError = False
        for fileId in sortedIncludeList:
            if options.verbose:
                print "    - %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()


            (docTree, error) = api.createDoc(loader.getTree(fileDb, fileId, options), docTree)
            hasDocError = hasDocError or error

        if hasDocError:
            print
            print "  * Building API failed!!"
            sys.exit(0)

        if not options.verbose:
            print

        if docTree:
            print "  * Finalizing tree..."
            api.postWorkPackage(docTree, docTree)

        if options.addNewLines:
            childPrefix = "  "
            newLine = "\n"
        else:
            childPrefix = ""
            newLine = ""


        if options.apiDocumentationXmlFile != None:
            print "  * Writing XML API file to %s" % options.apiDocumentationXmlFile

            if options.apiSeparateFiles:
                packages = api.packagesToXmlString(docTree, "", childPrefix, newLine)
                filetool.save(options.apiDocumentationXmlFile, packages, options.scriptOutputEncoding)

                for cls in api.classNodeIterator(docTree):
                    classContent = "<?xml version=\"1.0\" encoding=\"" + options.xmlOutputEncoding + "\"?>\n"
                    classContent += tree.nodeToXmlString(cls, "", childPrefix, newLine)
                    fileName = os.path.join(os.path.dirname(options.apiDocumentationXmlFile), cls.get("fullName") + ".xml")
                    filetool.save(fileName, classContent, options.xmlOutputEncoding)

            else:
                xmlContent = "<?xml version=\"1.0\" encoding=\"" + options.xmlOutputEncoding + "\"?>\n"
                xmlContent += tree.nodeToXmlString(docTree, "", childPrefix, newLine)
                filetool.save(options.apiDocumentationXmlFile, xmlContent, options.xmlOutputEncoding)



        if options.apiDocumentationJsonFile != None:
            print "  * Writing JSON API file to %s" % options.apiDocumentationJsonFile

            if options.apiSeparateFiles:
                packages = api.packagesToJsonString(docTree, "", childPrefix, newLine)
                filetool.save(options.apiDocumentationJsonFile, packages, options.scriptOutputEncoding)

                for cls in api.classNodeIterator(docTree):
                    classContent = tree.nodeToJsonString(cls, "", childPrefix, newLine)
                    fileName = os.path.join(os.path.dirname(options.apiDocumentationJsonFile), cls.get("fullName") + ".js")
                    filetool.save(fileName, classContent, options.scriptOutputEncoding)

            else:
                jsonContent = tree.nodeToJsonString(docTree, "", childPrefix, newLine)
                filetool.save(options.apiDocumentationJsonFile, jsonContent, options.scriptOutputEncoding)

        # create search index
        if options.apiDocumentationIndexFile != None:

            print "  * Generating API index..."
            jsonContent = tree.nodeToIndexString(docTree, "", childPrefix, newLine)
            print "  * Writing API search index to %s" % options.apiDocumentationIndexFile
            filetool.save(options.apiDocumentationIndexFile, jsonContent, options.scriptOutputEncoding)






    ######################################################################
    #  CREATE COPY OF RESOURCES
    ######################################################################

    if options.copyResources:

        print
        print "  CREATE COPY OF RESOURCES:"
        print "----------------------------------------------------------------------------"

        resources.copy(options, sortedIncludeList, fileDb)






    ######################################################################
    #  GENERATION OF SETTINGS
    ######################################################################

    if options.generateSourceScript or options.generateCompiledScript:
        print
        print "  INCLUSION OF SETTINGS:"
        print "----------------------------------------------------------------------------"

        if options.generateSourceScript:
            print "  * Processing settings of source version..."

            settingsArr = options.useSetting[:]
            settingsArr.append("qx.version:%s" % options.version)
            settingsArr.append("qx.isSource:true")
            inlineSourceCode.append(settings.generate(settingsArr, options.addNewLines))

        if options.generateCompiledScript:
            print "  * Processing settings of compiled version..."

            settingsArr = options.useSetting[:]
            settingsArr.append("qx.version:%s" % options.version)
            settingsArr.append("qx.isSource:false")
            inlineCompiledCode.append(settings.generate(settingsArr, options.addNewLines))






    ######################################################################
    #  GENERATION OF VARIANTS
    ######################################################################

    if options.generateSourceScript or options.generateCompiledScript:
        print
        print "  INCLUSION OF VARIANTS:"
        print "----------------------------------------------------------------------------"

        if options.generateSourceScript:
            print "  * Processing variants of source version..."

            variantsArr = options.useVariant[:]
            inlineSourceCode.append(variants.generate(variantsArr, options.addNewLines))

        if options.generateCompiledScript:
            print "  * Processing variants of compiled version..."

            variantsArr = options.useVariant[:]
            inlineCompiledCode.append(variants.generate(variantsArr, options.addNewLines))







    ######################################################################
    #  GENERATION OF SOURCE VERSION
    ######################################################################

    if options.generateSourceScript:
        print
        print "  GENERATION OF SOURCE SCRIPT:"
        print "----------------------------------------------------------------------------"

        if options.sourceScriptFile == None and (options.sourceTemplateInputFile == None or options.sourceTemplateOutputFile == None):
            print "  * You must define at least one source script file or template input/output."
            sys.exit(1)

        if options.sourceScriptFile:
            options.sourceScriptFile = os.path.normpath(options.sourceScriptFile)

        if options.sourceTemplateInputFile:
            options.sourceTemplateInputFile = os.path.normpath(options.sourceTemplateInputFile)

        if options.sourceTemplateOutputFile:
            options.sourceTemplateOutputFile = os.path.normpath(options.sourceTemplateOutputFile)


        print "  * Generating script block..."

        # Handling line feed setting
        sourceLineFeed = "";
        if options.addNewLines:
            sourceLineFeed = "\n";

        # Generating script block
        scriptBlocks = ""
        scriptBlocks += '<script type="text/javascript">%s</script>' % "".join(inlineSourceCode)
        for fileId in sortedIncludeList:
            if 'meta' in fileDb[fileId] and fileDb[fileId]["meta"]:
              continue

            if fileDb[fileId]["classUri"] == None:
                print "  * Missing class URI definition for class path %s." % fileDb[fileId]["classPath"]
                sys.exit(1)

            scriptBlocks += '<script type="text/javascript" src="%s%s"></script>' % (os.path.join(fileDb[fileId]["classUri"], fileDb[fileId]["pathId"].replace(".", '/')), config.JSEXT)
            scriptBlocks += sourceLineFeed

        # Writing includer
        if options.sourceScriptFile != None:
            print "  * Storing includer as %s..." % options.sourceScriptFile
            sourceScript = "document.write('%s');" % scriptBlocks.replace("'", "\\'")
            if options.addNewLines:
                sourceScript = sourceScript.replace("\n", "\\\n")
            filetool.save(options.sourceScriptFile, sourceScript, options.scriptOutputEncoding)

        # Patching template
        if options.sourceTemplateInputFile != None and options.sourceTemplateOutputFile != None:
            print "  * Patching template: %s => %s" % (options.sourceTemplateInputFile, options.sourceTemplateOutputFile)
            tmpl = filetool.read(options.sourceTemplateInputFile)
            res = tmpl.replace(options.sourceTemplateReplace, scriptBlocks)
            filetool.save(options.sourceTemplateOutputFile, res, options.scriptOutputEncoding)





    ######################################################################
    #  GENERATION OF COMPILED VERSION
    ######################################################################

    if options.generateCompiledScript:
        print
        print "  GENERATION OF COMPILED SCRIPT:"
        print "----------------------------------------------------------------------------"

        buildLineFeed = "";
        if options.addNewLines:
            buildLineFeed = "\n";

        compiledOutput = "".join(inlineCompiledCode)

        if options.compiledScriptFile == None:
            print "  * You must define the compiled script file!"
            sys.exit(1)

        if options.verbose:
            print "  * Compiling..."
        else:
            print "  * Compiling: ",

        for fileId in sortedIncludeList:
            if fileDb[fileId]["meta"]:
              continue

            if options.verbose:
                print "    - Compiling %s" % fileId
            else:
                sys.stdout.write(".")
                sys.stdout.flush()

            if options.prettyPrint:
                options.prettyPrint = False  # make sure it's disabled

            compiledFileContent = compiler.compile(loader.getTree(fileDb, fileId, options), options, options.addNewLines, options.verbose)

            if options.addFileIds:
                compiledOutput += "\n\n\n/* ID: " + fileId + " */\n" + compiledFileContent + "\n"
            else:
                compiledOutput += compiledFileContent

            if not compiledOutput.endswith(";") and not compiledOutput.endswith("\n"):
                compiledOutput += ";"

        if not options.verbose:
            print

        print "  * Storing output as %s..." % options.compiledScriptFile
        filetool.save(options.compiledScriptFile, compiledOutput, options.scriptOutputEncoding)







######################################################################
#  MAIN LOOP
######################################################################

if __name__ == '__main__':
    try:
        main()

    except KeyboardInterrupt:
        print
        print "  * Keyboard Interrupt"
        sys.exit(1)
