# runtheons-validate
npm package to validate endpoints


# Index

- [Introduction](https://github.com/iamousseni/runtheons-validate#introduction "Introduction")
- [Getting started](https://github.com/iamousseni/runtheons-validate#getting-started "Getting started")
    - [Prerequisites](https://github.com/iamousseni/runtheons-validate#prerequisites "Prerequisites")
    - [Installation](https://github.com/iamousseni/runtheons-validate#installation "Installation")
- [Use](https://github.com/iamousseni/runtheons-validate#use "Use")
- [Example of use](https://github.com/iamousseni/runtheons-validate#example-of-use "Example of use")
- [System structure](https://github.com/iamousseni/runtheons-validate#system-structure "System structure")
- [Summary System structure](https://github.com/iamousseni/runtheons-validate#summary-system-structure "Summary System structure")

# Introduction
This repository contains the source code and official documentation of the endpoints validator system. If the aforementioned documentation is not clear or contains errors, please report it immediately to the email address **bugs-documentation@runtheons.com** or report the issue here on GitHub. Please be extremely clear and precise in the description of the issue so that moderators can correct it as soon as possible.

# Getting started


## Prerequisites

1. Git
2. Node: any 14.x version starting with v14.5.0 or greater

## Installation

1. `npm install https://github.com/iamousseni/runtheons-validate` to add the package to the project

# Use

It is necessary to define an object schema that defines the input you want to receive, for each element of the object it is necessary to define its type:

The types of inputs are:
- [int](https://github.com/iamousseni/runtheons-validate#int "int")
- [float](https://github.com/iamousseni/runtheons-validate#float "float")
- [double](https://github.com/iamousseni/runtheons-validate#double "double")
- [string](https://github.com/iamousseni/runtheons-validate#string "string")
- [email](https://github.com/iamousseni/runtheons-validate#email "email")
- [file](https://github.com/iamousseni/runtheons-validate#file "file")
- [date](https://github.com/iamousseni/runtheons-validate#date "date")
- [datetime](https://github.com/iamousseni/runtheons-validate#datetime "datetime")
- [time](https://github.com/iamousseni/runtheons-validate#time "time")
	- [Allowed data format key](https://github.com/iamousseni/runtheons-validate#Allowed-data-format-key "Allowed data format key")

Here an example
```javascript
var objSchema = {
    id: {
        type: 'int',
        required: true
    },
    description: {
        type: 'string',
        required: false
    }
}
```

New type 

## int
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal value that the input can be |
| max        | int   | Set the maximal value that the input can be |
| required   | bool  | Set if this field is required               |

## float
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal value that the input can be |
| max        | int   | Set the maximal value that the input can be |
| required   | bool  | Set if this field is required               |

## double
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal value that the input can be |
| max        | int   | Set the maximal value that the input can be |
| required   | bool  | Set if this field is required               |

## string
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| required   | bool  | Set if this field is required               |
| reg   | string  | A regular expression that must match the input |
| minlength  | int   | Set the minimal length that the input can be |
| maxlength | int   | Set the maximal length that the input can be |


## email
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| required   | bool  | Set if this field is required               |

## file
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| required   | bool  | Set if this field is required               |
| mimetype   | string or Array of string  | A regular expression or array of regular expressions that must match the file mimetype |


## date
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal date that the input can be |
| max        | int   | Set the maximal date that the input can be |
| minage     | object| Set the dinamical minimal date that the input can be <br />Allow keys are: years, quarters, months, weeks, days <br /> Es. set the key as 'years' and the value as 18, for check if is greater than 18 years old|
| maxage     | object| Set the dinamical maximal date that the input can be <br />Allow keys are: years, quarters, months, weeks, days <br /> Es. set the key as 'years' and the value as 18, for check if is greater than 18 years old|
| format | string | Set the format of the input value (and the min/max attributes) <br />See below for allowed key|
| required   | bool  | Set if this field is required               |


## datetime
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal datetime that the input can be |
| max        | int   | Set the maximal datetime that the input can be |
| minage     | object| Set the dinamical minimal datetime that the input can be <br /> Allow keys are: years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds <br /> Es. set the key as 'years' and the value as 18, for check if is greater than 18 years old|
| maxage     | object| Set the dinamical maximal datetime that the input can be <br /> Allow keys are: years, quarters, months, weeks, days, hours, minutes, seconds, milliseconds <br />Es. set the key as 'years' and the value as 18, for check if is greater than 18 years old|
| format | string | Set the format of the input value (and the min/max attributes) <br />See below for allowed key|
| required   | bool  | Set if this field is required               |


## time
| parameters | type |                                             |
|------------|-------|---------------------------------------------|
| min        | int   | Set the minimal time that the input can be |
| max        | int   | Set the maximal time that the input can be |
| minage     | object| Set the dinamical minimal time that the input can be <br /> Allow keys are: hours, minutes, seconds, milliseconds <br/> Es. set the key as 'hours' and the value as 1, for check if is greater than 1 hour|
| maxage     | object| Set the dinamical maximal time that the input can be <br />Allow keys are: hours, minutes, seconds, milliseconds <br /> Es. set the key as 'hours' and the value as 1, for check if is greater than 1 hour|
| format | string | Set the format of the input value (and the min/max attributes) <br />See below for allowed key|
| required   | bool  | Set if this field is required               |


### Allowed data format key

|Input|	Example	|Description|
|---|---|---|
|YYYY|	2014	|4 or 2 digit year. Note: Only 4 digit can be parsed on strict mode|
|YY	|14	|2 digit year|
|Y	|-25	|Year with any number of digits and sign|
|Q	|1..4	|Quarter of year. Sets month to first month in quarter.|
|M MM|	1..12	|Month number|
|MMM MMMM	|December	|Month name(ENG)|
|D DD|	1..31	|Day of month|
|Do|	1st..31st	|Day of month with ordinal|
|DDD DDDD|	1..365	|Day of year|
|X|	1410715640.579	|Unix timestamp|
|x|	1410715640579	|Unix timestamp in milliseconds|


# Example of use

When defining an array or object you have to define the attributes as an object

```javascript
var validator = require("runtheons-validate");

let objSchema = {
    id: {
        type: 'int',
        required: true,
        min: 1
    },
    description: {
        type: 'string',
		required: true
    },
	arr:{
		type:'array',
		of: {
			type:"int",
			max:10
		}
	},
	obj:{
		type:'object',
		required: true,
		of: {
			id : {
				type:"int"
			},
			description: {
				type: 'string'
			}
		}
	}
}

let objData = {
    id: 8,
    description: "22",
	arr: [
		1,
		3,
		15
	],
	obj: {
		id: 1,
		description: "My description"
	}
}

console.log(validator.validate(objSchema, objData));

Result:
{
	result: false,
	errors: [
		arr.2 is greater than 10
	]
}


let objData = {
    id: 8,
    description: "22",
	arr: [
		1,
		3
	],
	obj: {
		id: 1,
		description: "My description"
	}
}

console.log(validator.validate(objSchema, objData));

Result:
{
	result: true,
	errors: []
}
```

# System structure
When the system receives a request, the validator starts working.
We have a recursive _val function in the main file which analyzes the input received for each element of the schema, which is recursive for object and array inputs.

When the validator understands the type of input, it calls the validator method of this data type and checks whether the data passed respects the scheme.


# Summary System structure

- root
    - index.js > Export of the validator
    - validate/data.js > The export data type of the validator
	- superData.js > The super class of a data
	- numberData.js > The class of a number data, it provides int, float and double type
	- stringData.js > The class of a string data, it provides string and email type
	- dateData.js > The class of a date data, it provides date, datetime and time type
	- fileData.js > The class of a file data, it provides file type
    - validate/Runtheons_validate.js > Main program of the validator
