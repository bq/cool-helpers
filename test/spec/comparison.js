describe('Comparison helpers', function() {

    describe('isEmpty', function() {
        it('should return true when we check empty array', function() {
            var fields = {
                    a: []
                },
                html = "{{#isEmpty a}}true{{/isEmpty}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('isntEmpty', function() {
        it('should return true when we check filled array', function() {
            var fields = {
                    a: ['test']
                },
                html = "{{#isntEmpty a}}true{{/isntEmpty}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('isUndefined', function() {
        it('should return false when we check undefined value', function() {
            var fields = {
                    a: 'test'
                },
                html = "{{#isUndefined a}}true{{else}}false{{/isUndefined}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('false');
        });
    });

    describe('exists', function() {
        it('should return true if value exists', function() {
            var fields = {
                    a: 'test'
                },
                html = "{{#exists a}}true{{/exists}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

});