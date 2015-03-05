To start using cool-helpers you can:

* [Download the last release](https://github.com/bq/cool-helpers/releases/tag/v0.0.2)
* [Install with bower](http://bower.io/): `bower install cool-helpers --save--dev`

###Build the project

If you want to build the project locally, you have to run the [Grunt](http://gruntjs.com/) task `grunt build`. This task will concat and minify the sources and create the README.md. Before all this, you do not forget to run `npm install` and `bower install`. 

####Contribute

If you want to keep growing cool-helpers up, send us a pull request with your new helpers. You must follow this steps:

* Add the helper to its proper category file inside src/helpers directory. If you want to create a new category, create the new js file and add it at src/helpers/start.js.
* Do your commit message following the [commit conventions](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md). The changelog will be created using the commited messages.
* Document the helper. No pull request will be accepted without proper documentation. Documentation directory is doc. If you need to create a new documentation section, remember to add it at Gruntfile, inside readme_generator.readme.order. Also, you have to write low-level documentation using JSDoc.
* Remember to build the project before doing the pull-request. 
