/**
 * Math helpers set
 * @namespace math
 */
var math = {

    /**
     * Returns value + addition
     * @memberof math
     * @param {number} value    [description]
     * @param {number} addition [description]
     *
     * @example
     *
     * {{add 5 1}}
     */
    add: function(value, addition) {
        return value + addition;
    },

    /**
     * Returns value - substraction
     * @memberof math
     * @param {number} value    [description]
     * @param {number} substraction [description]
     *
     * @example
     *
     * {{substract 5 1}}
     */
    subtract: function(value, substraction) {
        return value - substraction;
    },

    /**
     * Returns value % divisor
     * @memberof math
     * @param {number} value    [description]
     * @param {number} divisor [description]
     *
     * @example
     *
     * {{divide 6 3}}
     */
    divide: function(value, divisor) {
        return value / divisor;
    },

    /**
     * Returns value * multiplier
     * @memberof math
     * @param {number} value    [description]
     * @param {number} multiplier [description]
     *
     * @example
     *
     * {{multiply 3 2}}
     */
    multiply: function(value, multiplier) {
        return value * multiplier;
    },

    /**
     * Returns Math.floor(value)
     * @memberof math
     * @param {number} value    [description]
     *
     * @example
     *
     * {{floor 3.2222}}
     */
    floor: function(value) {
        return Math.floor(value);
    },

    /**
     * Returns Math.ceil(value)
     * @memberof math
     * @param {number} value    [description]
     *
     * {{ceil 3.2222}}
     */
    ceil: function(value) {
        return Math.ceil(value);
    },

    /**
     * Returns Math.round(value)
     * @memberof math
     * @param {number} value    [description]
     *
     * @example
     *
     * {{round 3.222}}
     */
    round: function(value) {
        return Math.round(value);
    },

    /**
     * Returns sum of each argument
     * @memberof math
     *
     * {{sum 3 5 10 7}}
     */
    sum: function() {
        var args = _.flatten(arguments);
        var sum = 0;
        var i = args.length - 1;
        while (i--) {
            sum += _.parseInt(args[i]) || 0;
        }
        return Number(sum);
    }

};
