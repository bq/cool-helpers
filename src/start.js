(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['handlebars', 'moment'], function(Handlebars, moment) {
            return (root.CoolHelpers = root.CoolH = factory(root, Handlebars, moment));
        });
    } else if (typeof exports !== 'undefined') {
        var Handlebars = require('handlebars'),
            moment = require('moment');
        module.exports = factory(root, Handlebars, moment);
    } else {
        root.CoolHelpers = root.CoolH = factory(root, root.Handlebars, root.moment);
    }

}(this, function(root, Handlebars, moment) {

    'use strict';

    // @include core.js

    // @include helpers/common.js

    // @include helpers/comparison.js

    // @include helpers/date.js

    // @include helpers/math.js

    helpers.register(
        common,
        comparison,
        date,
        math
    );

    return helpers;

}));
