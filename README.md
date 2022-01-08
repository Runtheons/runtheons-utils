# Runtheons Utils

This reposity add some utils for Runtheons BackEnd

# Index

- [Introduction](https://github.com/Zexal0807/runtheons-utils#introduction)
- [Getting started](https://github.com/Zexal0807/runtheons-utils#getting-started)
  - [Prerequisites](https://github.com/Zexal0807/runtheons-utils#prerequisites)
  - [Installation](https://github.com/Zexal0807/runtheons-utils#installation)
- [Utility](https://github.com/Zexal0807/runtheons-utils#utility)
  - [CouponCode](https://github.com/Zexal0807/runtheons-utils#coupon-code)
  - [Logger](https://github.com/Zexal0807/runtheons-utils#logger)

# Introduction

This repository contains the source code and official documentation of the endpoints validator system. If the aforementioned documentation is not clear or contains errors, please report it immediately to the email address **bugs-documentation@runtheons.com** or report the issue here on GitHub. Please be extremely clear and precise in the description of the issue so that moderators can correct it as soon as possible.

# Getting started

## Prerequisites

1. Git
2. Node: any 14.x version starting with v14.5.0 or greater

## Installation

1. `npm install https://github.com/Zexal0807/runtheons-utils#v2.4.0` to add the package to the project

# Utility

It is necessary to define an object schema that defines the input you want to receive, for each element of the object it is necessary to define its type:

## Coupon Code

This class allow to generate a coupon code, use `generate` method to generate it

```javascript
const { CouponCode } = require("@runtheons/utils");
console.log(CouponCode.generate());

/* Here some example
  RR-2DZRE-7ER
  NR2-DZR-E7ER
  TR2-DZR-E7ER
*/
```

## Logger

This class allow to print on a file a message, use `printOnDebugFile` method to do it

```javascript
const { Logger } = require("@runtheons/utils");
Logger.printDebugFile("Message");
```
