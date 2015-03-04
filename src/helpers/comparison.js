/**
 * Comparsion helpers set
 * @namespace comparison
 */
var comparison = {
    /**
     * Conditionally render a block if string matches pattern
     * @memberof comparison
     * @param  {string} str     Value to be compared with pattern
     * @param  {string} pattern Patter which value will be compared to
     *
     * @example
     *
     * {{#contains title "pattern"}}
     *     text
     * {{/contains}}
     */
    contains: function(str, pattern, options) {
        if (str.indexOf(pattern) !== -1) {
            return options.fn(this);
        }
        return options.inverse(this);
    },

    /**
     * Conditionally render a block if both a and b properties exists and are not null or undefined
     * @memberof comparison
     * @param  {primitive} a first property
     * @param  {primitive} b second property
     *
     * @example
     *
     * {{#and title name}}
     *     text
     * {{/and}}
     */
    and: function(a, b, options) {
        if (a && b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value > test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#@gt 5 2}}
     *     text
     * {{/gt}}
     */
    gt: function(value, test, options) {
        if (value > test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value >= test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#gte 5 2}}
     *     text
     * {{/gte}}
     */
    gte: function(value, test, options) {
        if (value >= test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value === test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#is name "John Doe"}}
     *     text
     * {{/is}}
     */
    is: function(value, test, options) {
        if (value === test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value !== test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#is name "John Doe"}}
     *     text
     * {{/is}}
     */
    isnt: function(value, test, options) {
        if (value !== test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value < test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#lt 2 5}}
     *     text
     * {{/lt}}
     */
    lt: function(value, test, options) {
        if (value < test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if value <= test
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#lt 2 5}}
     *     text
     * {{/lt}}
     */
    lte: function(value, test, options) {
        if (value <= test) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if a || b
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test element with first value will be compared to
     *
     * @example
     *
     * {{#or name surname}}
     *     text
     * {{/or}}
     */
    or: function(a, b, options) {
        if (a || b) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * Conditionally render a block if nr%v === 0
     * @memberof comparison
     * @param  {primitive} value value to test
     * @param  {primitive} test eleme
     *
     * @example
     *
     * {{#ifNth 10 2}}
     *     text
     * {{/ifNth}}
     */
    ifNth: function(nr, v, options) {
        v = v + 1;
        if (v % nr === 0) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    },

    /**
     * {{#compare}}...{{/compare}}
     *
     * @memberof comparison
     *
     * @credit: OOCSS
     * @param left value
     * @param operator The operator, must be between quotes ">", "=", "<=", etc...
     * @param right value
     * @param options option object sent by handlebars
     * @return {String} formatted html
     *
     * @example
     *   {{#compare unicorns "<" ponies}}
     *     I knew it, unicorns are just low-quality ponies!
     *   {{/compare}}
     *
     *   {{#compare value ">=" 10}}
     *     The value is greater or equal than 10
     *     {{else}}
     *     The value is lower than 10
     *   {{/compare}}
     */
    compare: function(left, operator, right, options) {
        /*jshint eqeqeq: false*/

        if (arguments.length < 3) {
            throw new Error('Handlebars Helper "compare" needs 2 parameters');
        }

        if (options === undefined) {
            options = right;
            right = operator;
            operator = '===';
        }

        var operators = {
            '==': function(l, r) {
                return l == r;
            },
            '===': function(l, r) {
                return l === r;
            },
            '!=': function(l, r) {
                return l != r;
            },
            '!==': function(l, r) {
                return l !== r;
            },
            '<': function(l, r) {
                return l < r;
            },
            '>': function(l, r) {
                return l > r;
            },
            '<=': function(l, r) {
                return l <= r;
            },
            '>=': function(l, r) {
                return l >= r;
            },
            'typeof': function(l, r) {
                return typeof l == r;
            }
        };

        if (!operators[operator]) {
            throw new Error('Handlebars Helper "compare" doesn\'t know the operator ' + operator);
        }

        var result = operators[operator](left, right);

        if (result) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    }
};
