/* global module, require */

'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        bw: grunt.file.readJSON('bower.json'),
        pkg: grunt.file.readJSON('package.json'),
        readme_generator: {
            readme: {
                options: {
                    github_username: 'bq',
                    readme_folder: 'doc'
                },
                order: {
                    'quickstart.md': 'Quickstart',
                    'usage.md': 'Usage',
                    'commons.md': 'Commons',
                    'comparison.md': 'Comparison',
                    'math.md': 'Math',
                    'date.md': 'Date'
                }
            }
        },
        preprocess: {
            helpers: {
                src: 'src/start.js',
                dest: 'lib/cool-helpers.js'
            }
        },
        mochacli: {
            options: {
                bail: true
            },
            all: ['test/spec/*.js']
        },
        uglify: {
            dist: {
                files: {
                    'lib/cool-helpers.min.js': ['lib/cool-helpers.js']
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= bw.name %> - v<%= bw.version %> - @author: bq.com -' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            version: {
                src: ['lib/cool-helpers.js'],
                dest: 'lib/cool-helpers.js'
            }
        },
        bump: {
            options: {
                files: ['bower.json'],
                updateConfigs: ['bw'],
                commit: true,
                commitMessage: 'Release v%VERSION%',
                commitFiles: ['bower.json', 'CHANGELOG.md'],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: '<%= bw.repository.url %>',
                gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
                globalReplace: false,
                prereleaseName: false,
                regExp: false
            }
        },
        changelog: {
            options: {
                version: '<%= bw.version %>',
                repository: '<%= bw.repository.url %>'
            }
        },
    });

    grunt.registerTask('_commit', [
        'changelog',
        'bump-commit'
    ]);

    grunt.registerTask('build', [
        'preprocess:helpers',
        'concat',
        'uglify',
        'readme_generator'
    ]);

    grunt.registerTask('test', [
        'mochacli'
    ]);

    grunt.registerTask('release', function(version) {
        var semVer = /\bv?(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)\.(?:0|[1-9][0-9]*)(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?\b/ig;

        if (!semVer.test(version)) {
            grunt.option('setversion', false);
            grunt.task.run('bump-only:' + version);
        } else {
            grunt.option('setversion', version);
            grunt.task.run('bump-only');
        }

        grunt.task.run('_commit');
    });
};
