English | [简体中文](/README_CN.md)

README in English is translated by me using translation software, which may be inaccurate.

It is recommended to use NPM 7 and 5 or above for installation in this project.

This procedure has only been tested on Linux, not on Windows, MacOS and other systems.

## Get started quickly

### Install

Global installation of generate-license using Yarn or NPM:

```bash
npm i -g generate-license

# or

yarn global add generate
```

Of course, it can also be installed in a project (it is unlikely to be installed in a project).

After the installation is successful, run the `glicense` command to use it.

### Option

* `- v` (long option `-- version`) outputs the currently installed version of generate-license
* `- l` (long option `-list`) lists the licenses that can be generated stored in the cloud
* `- h` (long option `-- help`) output help
* `- g < license name, case-sensitive required> [optional for the file name of the generated license If the file name is left empty, a file with the same name under the license name directory will overwrite it]` (long option `-generate`) to generate (download from the cloud) the specified license
* If there is no option, help will be output.

### Example

The example defaults to global installation of generate-license.

#### No need for signature license generation

No signature license means that the generated license does not require a signature and year. For example, GPL, LGPL, AGPL.

```bash
$ cd project/
$ ls
README.md     bin  node_modules       package.json
README_CN.md  lib  package-lock.json  yarn.lock
$ glicense
Usage: glicense [options]

Options:
  -v, --version                        output the version number
  -g, --generate <license> [filename]  generate license.
  -l, --list                           Lists a list of licenses that can be generated
  -h, --help                           display help for command
$ glicense -l
Currently, some remote licenses are:

GPLv3
GPLv2
GPLv1
LGPLv3
LGPLv2.1
AGPLv3
FDLv1.3
FDLv1.2
FDLv1.1
GNUAllPermissive
BSLv1
ISC
$ glicense -g GPLv3 LICENSE
$ ls
LICENSE       bin           package-lock.json
README.md     lib           package.json
README_CN.md  node_modules  yarn.lock
```

#### Signature license generation is required

A signed license means that the generated license requires a signature and copyright year. For example, ISC, MIT, MulanPSL.

```bash
$ cd project/
$ ls
README.md     bin  node_modules       package.json
README_CN.md  lib  package-lock.json  yarn.lock
$ glicense
Usage: glicense [options]                                             
Options:
  -v, --version                        output the version number
  -g, --generate <license> [filename]  generate license.
  -l, --list                           Lists a list of licenses that can be generated
  -h, --help                           display help for command
$ glicense -l
Currently, some remote licenses are:

GPLv3
GPLv2
GPLv1
LGPLv3
LGPLv2.1
AGPLv3
FDLv1.3
FDLv1.2
FDLv1.1
GNUAllPermissive
BSLv1
ISC
$ glicense -g ISC
? Year of license 2021
? Copyright holder Jack Ma
$ ls
LICENSE       bin           package-lock.json
README.md     lib           package.json
README_CN.md  node_modules  yarn.lock
$ cat LICENSE
Copyright 2021 Jack Ma

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

## Contribute

If you want to contribute to generate-license, please see [contribution Guide](/ CONTRIBUTING_CN.md).

## donate

Generate-license is a NodeJS project completed on my low-performance phone (using [Termux](https://github.com/termux)) because I forgot my computer password. Even if I think about it one day, my mother won't let me use it (my mother probably thinks computers are for playing games).

At present, there is no channel to donate. I hope I can buy a computer through the donated money in the future.
