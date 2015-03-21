describe('Commons helpers', function() {

    describe('macro', function() {

        it('should register a new helper with a given name', function() {
            var hbs = '{{#macro "mymacro" options=""}}{{options}}{{/macro}}',
                template = Handlebars.compile(hbs);

            template();
            expect(Handlebars.helpers.mymacro).to.be.a('function');
        });

        it('should use the created helper', function() {
            var data = {
                    option: 'text'
                },
                hbs = '{{mymacro options=option}}';

            template = Handlebars.compile(hbs);

            expect(template(data)).to.be.equal('text');
        });

    });

});
