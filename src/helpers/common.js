/**
 * Common helpers set
 * @namespace comparison
 */
var common = {

    /**
     * Generates data-attributes for context value
     * @memberof common
     * @param  {string} context [description]
     *
     * @example
     *
     * {{#data}}
     * {{/data}}
     */
    data: function(context) {
        if (context) {
            return ' data-' + context.type + '="' + context.value + '"';
        }
        return '';
    },

    /**
     * Generates data-attributes for each context value
     * @memberof common
     * @param  {string} context [description]
     *
     * @example
     *
     * {{#datas attrs}}
     * {{/datas}}
     */
    datas: function(context) {
        var output = '';
        for (var attr in context) {
            if (context.hasOwnProperty(attr)) {
                output += ' data-' + context[attr].type + '="' + context[attr].value + '"';
            }
        }
        return output;
    },

    /**
     * Generates attributes for context value
     * @memberof common
     * @param  {string} context [description]
     *
     * @example
     *
     * {{#attributes attrs}}
     * {{/attributes}}
     */
    attributes: function(context) {
        var output = '';
        for (var attr in context) {
            if (context.hasOwnProperty(attr)) {
                output += attr + '="' + context[attr] + '"';
            }
        }
        return output;
    },

    /**
     * Generates a new helper with name key
     * @memberof common
     * @param  {string} name Helper name
     *
     * @example
     *
     * {{#macro "mymacro" options=""}}
     *     {{#each options}}
     *     {{/each}}
     * {{/macro}}
     *
     * {{mymacro options=options}
     *
     */
    macro: function(name, defaults) {
        Handlebars.registerHelper(name, function(options) {
            var e = $.extend(this, defaults.hash, options.hash);
            return new Handlebars.SafeString(defaults.fn(e));
        });
    },

    /**
     * Changes each nl to a br tag
     * @memberof common
     * @param  {string} text Text to apply nl2br
     *
     * @example
     * {{#nl2br title}}{{/nl2br}}
     */
    nl2br: function(text) {
        var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
        return new Handlebars.SafeString(nl2br);
    },

    /**
     * Log one or multiple values to the console:
     * @memberof common
     *
     * @example
     * {{#log title}}{{/log}}
     */
    log: function() {
        console.log(['Values:'].concat(
            Array.prototype.slice.call(arguments, 0, -1)
        ));
    },

    /**
     * Log one or multiple values to the console, with the current context:
     * {{debug foo bar}
     * @memberof common
     *
     * @example
     * {{#debug title}}{{/debug}}
     */
    debug: function() {
        console.log('Context:', this);
        console.log(['Values:'].concat(
            Array.prototype.slice.call(arguments, 0, -1)
        ));
    }

};
