var helpers = {
    register: function() {
        for (var i = 0, length = arguments.length; i < length; i++) {
            for (var helper in arguments[i]) {
                if (arguments[i].hasOwnProperty(helper)) {
                    Handlebars.registerHelper(helper, arguments[i][helper]);
                }
            }
        };
    }
};
