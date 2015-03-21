describe('Commons helpers', function() {

    describe('macro', function() {

        it('should register a new helper with a given name', function() {
            var hbs = '{{#macro "mymacro" options=""}}{{options}}{{/macro}}',
                template = Handlebars.compile(hbs);

            template();
            expect(Handlebars.helpers.mymacro).to.be.a('function');
        });

    });

    describe('nl2br', function() {

        it('should add a <br> at the end of the text', function() {
            var data = {
                    text: 'text\n'
                },
                hbs = '{{nl2br text}}';

            template = Handlebars.compile(hbs);

            expect(template(data)).to.be.contain('text<br>');
        });

    });

});
