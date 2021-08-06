# runtheons-utils

This reposity add some utils for Runtheons BackEnd

# Index

- [Introduction](https://github.com/Zexal0807/runtheons-utils#introduction "Introduction")
- [Getting started](https://github.com/Zexal0807/runtheons-utils#getting-started "Getting started")
  - [Prerequisites](https://github.com/Zexal0807/runtheons-utils#prerequisites "Prerequisites")
  - [Installation](https://github.com/Zexal0807/runtheons-utils#installation "Installation")
- [Utility](https://github.com/Zexal0807/runtheons-utils#utility "Utility")
  - [Model](https://github.com/Zexal0807/runtheons-utils#model "Model")
    - [Model use](https://github.com/Zexal0807/runtheons-utils#model-use "Model use")
    - [Model includes](https://github.com/Zexal0807/runtheons-utils#model-includes "Model includes")
    - [Model config](https://github.com/Zexal0807/runtheons-utils#model-config "Model config")

# Introduction

This repository contains the source code and official documentation of the endpoints validator system. If the aforementioned documentation is not clear or contains errors, please report it immediately to the email address **bugs-documentation@runtheons.com** or report the issue here on GitHub. Please be extremely clear and precise in the description of the issue so that moderators can correct it as soon as possible.

# Getting started

## Prerequisites

1. Git
2. Node: any 14.x version starting with v14.5.0 or greater

## Installation

1. `npm install https://github.com/Zexal0807/runtheons-utils#v2.3.0` to add the package to the project

# Utility

It is necessary to define an object schema that defines the input you want to receive, for each element of the object it is necessary to define its type:

## Model

Model rappresent a mapping of an object in to a class

### Model use

First of all you must define a class that extends Model

```javascript
class User extends Model {}
```

In class you can add you custom method, here an example

```javascript
class User extends Model {

    static config = {
        separetor : '_'
    }

    getFullName () => {
        return this.name + " " + this.surname;
    }

}

var user = User.map({
    name: "Mario",
    surname: "Rossi"
    "sport_id": 1,
    "sport_description": "Football"
});

// Now user is an instance of User

console.log(user);

/*
User {
    name: "Mario",
    surname: "Rossi"
    sport:{
        id: 1,
        description: "Football"
    }
}
*/

console.log(user.getFullName());    // "Mario Rossi"
```

### Model includes

You can include some Model in your Model, add the path as key in static includes field, here an example

```javascript
class Sport extends Model{
    getDescription () => {
        return this.description;
    }
}

class User extends Model {

    static config = {
        separetor : '_'
    }

    static includes = {
        "sport" : Sport
    }

    getFullName () => {
        return this.name + " " + this.surname;
    }

}

var user = User.map({
    name: "Mario",
    surname: "Rossi"
    "sport_id": 1,
    "sport_description": "Football"
});

// Now user is an instance of User

console.log(user);

/*
User {
    name: "Mario",
    surname: "Rossi"
    sport: Sport {
        id: 1,
        description: "Football"
    }
}
*/
console.log(user.sport.getDescription());   // "Football"
```

As you can see, in class you can specify some configuration

### Model config

| config            | Type                      | Description                                       |
| ----------------- | ------------------------- | ------------------------------------------------- |
| separetor         | String <br> default : '.' | The string separetor beetween a top and sub level |
| includesSeparetor | String <br> default : '.' | The string separetor in includes path             |
