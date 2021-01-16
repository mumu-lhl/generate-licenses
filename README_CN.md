[English](/README.md) | 简体中文

本程序建议使用 NPM 7 以下 5 以上的版本安装。

本程序仅在 Linux 上测试过，未在 Windows、MacOS 等系统上测试过。

## 快速上手

### 安装

使用 Yarn 或 NPM 全局安装 generate-license：

```bash
npm i -g generate-license

# 或

yarn global add generate
```

当然也可以安装在一个项目中（安装在一个项目中的可能性不大）。

安装成功后，运行 `glicense` 命令使用。

### 选项

* `-v`（长选项 `--version`）输出当前安装的 generate-license 的版本
* `-l`（长选项 `--list`）列出存储在云端的可以生成的许可证
* `-h`（长选项 `--help`）输出帮助
* `-g <许可证名称，对大小写敏感 必填> [生成的许可证的文件名 选填 不填文件名为许可证名称 目录下有同名文件会将其覆盖]`（长选项 `--generate`）生成（从云端下载）指定的许可证
* 无选项则会输出帮助

### 示例

示例默认当做已全局安装 generate-license。

#### 无需署名许可证生成

无需署名许可证指的是，生成的许可证无需署名和年份。例如 GPL、LGPL、AGPL。

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

#### 需署名许可证生成

需署名许可证指的是，生成的许可证需要署名和版权年份。例如 ISC、MIT、MulanPSL。

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

## 贡献

如果您想为 generate-license 做出贡献请看[贡献指南](/CONTRIBUTING_CN.md)。

## 捐献

generate-license 是在我的低性能手机（使用 [Termux](https://github.com/termux)）上完成的 NodeJS 项目，因为我把我的电脑密码忘记了。即使哪天想起来了，我的母亲也不会让我使用（我的母亲大概认为电脑就是用来玩游戏的）。

目前没有捐献的渠道，希望以后能通过被捐献的钱来买一台计算机吧。
