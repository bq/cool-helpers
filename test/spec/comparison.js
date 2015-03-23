describe('Comparison helpers', function() {

    describe('contains', function() {
        it('should return true when string matches pattern', function() {
            var fields = {
                    title: 'hello world'
                },
                html = "{{#contains title 'world'}}true{{/contains}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

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

    describe('and', function() {
        it('should return true when both a and b properties exists and are not null or undefined', function() {
            var fields = {
                    a: 'hello world',
                    b: 'test'
                },
                html = "{{#and a b}}true{{/and}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });

        it('should return false when a or b properties not exists and are null or undefined', function() {
            var fields = {
                    a: 'hello world',
                    b: null
                },
                html = "{{#and a b}}true{{else}}false{{/and}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('false');
        });
    });

    describe('gt', function() {
        it('should return true when value > test', function() {
            var fields = {
                    value: 5,
                    test: 3
                },
                html = "{{#gt value test}}true{{/gt}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('gte', function() {
        it('should return true when value >= test', function() {
            var fields = {
                    value: 4,
                    test: 4
                },
                html = "{{#gte value test}}true{{/gte}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('is', function() {
        it('should return true when a === b', function() {
            var fields = {
                    a: 1,
                    b: 1
                },
                html = "{{#is a b}}true{{/is}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('isnt', function() {
        it('should return true when a !== b', function() {
            var fields = {
                    a: 1,
                    b: 0
                },
                html = "{{#isnt a b}}true{{/isnt}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('lt', function() {
        it('should return true when value < test', function() {
            var fields = {
                    value: 3,
                    test: 5
                },
                html = "{{#lt value test}}true{{/lt}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('lte', function() {
        it('should return true when value <= test', function() {
            var fields = {
                    value: 3,
                    test: 5
                },
                html = "{{#lte value test}}true{{/lte}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

    describe('or', function() {
        it('should return true when a || b', function() {
            var fields = {
                    a: null,
                    b: 'test'
                },
                html = "{{#or a b}}true{{/or}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('true');
        });
    });

});
