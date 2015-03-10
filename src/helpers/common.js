/**
 * Common helpers set
 * @namespace comparison
 */
var common = {

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
