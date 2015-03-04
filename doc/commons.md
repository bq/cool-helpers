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
