# cool-helpers 
[![Build Status](https://secure.travis-ci.org/bq/cool-helpers.png?branch=master)](http://travis-ci.org/bq/cool-helpers)

> Cool Helpers is a Handlebars.js helpers compilation with AMD support

## Jump to Section

* [Quickstart](#quickstart)
* [Usage](#usage)
* [Commons](#commons)
* [Comparison](#comparison)
* [Math](#math)
* [Date](#date)

## Quickstart
[[Back To Top]](#jump-to-section)

To start using cool-helpers you can:

* [Download the last release](https://github.com/bq/cool-helpers/releases/tag/v0.0.2)
* [Install with bower](http://bower.io/): `bower install cool-helpers --save-dev`

###Build the project

If you want to build the project locally, you have to run the [Grunt](http://gruntjs.com/) task `grunt build`. This task will concat and minify the sources and create the README.md. Before all this, you do not forget to run `npm install` and `bower install`. 

####Contribute

If you want to keep growing cool-helpers up, send us a pull request with your new helpers. You must follow this steps:

* Add the helper to its proper category file inside src/helpers directory. If you want to create a new category, create the new js file and add it at src/helpers/start.js.
* Do your commit message following the [commit conventions](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md). The changelog will be created using the commited messages.
* Document the helper. No pull request will be accepted without proper documentation. Documentation directory is doc. If you need to create a new documentation section, remember to add it at Gruntfile, inside readme_generator.readme.order. Also, you have to write low-level documentation using JSDoc.
* Remember to build the project before doing the pull-request. 


## Usage
[[Back To Top]](#jump-to-section)

    'use strict'

    require.config({
      deps: [
        'cool-helpers'
      ],
      paths: {
        'cool-helpers': 'bower_components/cool-helpers/lib/cool-helpers',
        handlebars: 'bower_components/handlebars/handlebars',
        moment: 'bower_components/moment/moment'
      }      
    });


## Commons
[[Back To Top]](#jump-to-section)

> Commons

###data

> Generates data-attribute from context.type and context.value

    {{#data attribute}}{{/data}}

###datas

> Generates data-attributes from context.type and context.value

    {{#datas attributes}}{{/datas}}

###attributes

> Generates data-attribute from context.type and context.value

    {{#attributes attributes}}{{/attributes}}

###macro

> Generates a new helper with name key

    {{#macro "mymacro" options=""}}
        {{#each options}}
        {{/each}}
    {{/macro}}
     
    {{mymacro options=options}

###nl2br

> Changes each nl to a br tag

    {{#nl2br title}}{{/nl2br}}

###log

> Log one or multiple values to the console:

    {{#log title}}{{/log}}

###debug

> Log one or multiple values to the console, with the current context:

    {{#debug title}}{{/debug}}


## Comparison
[[Back To Top]](#jump-to-section)

> Comparison

###contains

Conditionally render a block if string matches pattern

    {{#contains title "pattern"}}
        text
    {{/contains}}

###and

Conditionally render a block if both a and b properties exists and are not null or undefined

    {{#and title name}}
        text
    {{/and}}

###gt

Conditionally render a block if value > test

    {{#@gt 5 2}}
        text
    {/gt}}

###gte

Conditionally render a block if value >= test

    {{#@gte 5 2}}
        text
    {/gte}}

###is

Conditionally render a block if value === test

    {{#@is 5 5}}
        text
    {/is}}

###isnt

Conditionally render a block if value !== test

    {{#@isnt 5 5}}
        text
    {/isnt}}

###lt

Conditionally render a block if value < test

    {{#@lt 5 2}}
        text
    {/lt}}

###lte

Conditionally render a block if value <= test

    {{#@lte 5 2}}
        text
    {/lte}}

###or

Conditionally render a block if a || b

    {{#@or a b}}
        text
    {/or}}

###ifNth

Conditionally render a block if nr%v === 0

    {{#ifNth 10 2}}
        text
    {{/ifNth}}

###compare 

Compares two values with given operator. Operators are: ==, ===, !=, !==, <, >, <=, >=, typeof. Operator must be between quotes "";

    {{#compare unicorns "<" ponies}}
        I knew it, unicorns are just low-quality ponies!
    {{/compare}}

    {{#compare value ">=" 10}}
        The value is greater or equal than 10
    {{else}}
        The value is lower than 10
    {{/compare}}















## Math
[[Back To Top]](#jump-to-section)

> Math

###add

> Returns value + adition

    {{add 5 1}}

###substract

> Returns value - substraction

    {{substract 5 1}}

###divide

> Returns value % divisor

    {{divide 6 3}}

###multiply

> Returns value * multiplier

    {{multiply 5 2}}

###floor

Returns Math.floor(value)

    {{floor 3.2222}}

###ceil

Returns Math.ceil(value)

    {{ceil 3.2222}}

###round

Returns Math.round(value)

    {{round 3.2222}}

###sum

Returns sum of each argument

    {{sum 1 1 2 3 5 8}}






## Date
[[Back To Top]](#jump-to-section)

> Date

###formatDate

> Formats date in given format

    {{formatDate date 'yyyy/mm/dd'}}

###subtractDate

> Returns the difference between two dates in given format

    {{subtractDates date1 date2 "d"}}





--------
<small>_This readme has been automatically generated by [readme generator](https://github.com/aponxi/grunt-readme-generator) on Tue Mar 10 2015 10:19:07 GMT+0100 (CET)._</small>