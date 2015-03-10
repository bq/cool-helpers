describe('Math helpers', function() {

    describe('Sum', function() {
        it('should return "2" when we sum 1 + 1', function() {
            var fields = {
                    a: 1,
                    b: 1
                },
                html = "{{add a b}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('2');
        });
    });

    describe('Subtract', function() {
        it('should return "1" when we subtract 2 - 1', function() {
            var fields = {
                    a: 2,
                    b: 1
                },
                html = "{{subtract a b}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('1');
        });
    });

    describe('Divide', function() {
        it('should return "2" when we divide 4 - 2', function() {
            var fields = {
                    a: 4,
                    b: 2
                },
                html = "{{divide a b}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('2');
        });
    });

    describe('Multiply', function() {
        it('should return "4" when we multiply 2 * 2', function() {
            var fields = {
                    a: 2,
                    b: 2
                },
                html = "{{multiply a b}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('4');
        });
    });

    describe('Floor', function() {
        it('should return "2" when we floor 2.5', function() {
            var fields = {
                    a: 2.5
                },
                html = "{{floor a}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('2');
        });
    });

    describe('Ceil', function() {
        it('should return "3" when we ceil 2.1', function() {
            var fields = {
                    a: 2.1
                },
                html = "{{ceil a}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('3');
        });
    });

    describe('Round', function() {
        it('should return "3" when we ceil 2.5', function() {
            var fields = {
                    a: 2.5
                },
                html = "{{round a}}",
                template = Handlebars.compile(html);

            expect(template(fields)).to.equal('3');
        });
    });

});
