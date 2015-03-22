> Comparison

###contains

Conditionally render a block if string matches pattern

    {{#contains title "pattern"}}
        text
    {{/contains}}

###isEmpty

Conditionally render a block if array list is empty

    {{#isEmpty list }}
        text
    {{/isEmpty}}

###isntEmpty

Conditionally render a block if array list inst empty

    {{#isntEmpty list }}
        text
    {{/isntEmpty}}

###isUndefined

Conditionally render a block if if obj is undefined

    {{#isUndefined obj }}
        text
    {{/isUndefined}}

###exists

Conditionally render a block if obj exists

    {{#exists obj }}
        text
    {{/exists}}

###and

Conditionally render a block if both a and b properties exists and are not null or undefined

    {{#and title name}}
        text
    {{/and}}

###gt

Conditionally render a block if value > test

    {{#gt 5 2}}
        text
    {/gt}}

###gte

Conditionally render a block if value >= test

    {{#gte 5 2}}
        text
    {/gte}}

###is

Conditionally render a block if value === test

    {{#is 5 5}}
        text
    {/is}}

###isnt

Conditionally render a block if value !== test

    {{#isnt 5 5}}
        text
    {/isnt}}

###lt

Conditionally render a block if value < test

    {{#lt 5 2}}
        text
    {/lt}}

###lte

Conditionally render a block if value <= test

    {{#lte 5 2}}
        text
    {/lte}}

###or

Conditionally render a block if a || b

    {{#or a b}}
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


