# Angular Express Bootstrap Seed

## Installing Node

	sudo apt-get update
	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs coffeescript
## Installing Dependencies
In the directory where the `package.json` file is located (root directory), execute the following:

	sudo npm install

## Running Server
	
	./runserver.sh
	
## Directory Layout
    
    app.js              --> server config
    package.json        --> npm dependencies
    public/             --> all of the files to be used in on the client side
      bootstrap/        --> all bootstrap files
        css/
        img/
        js/
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
        lib/            --> angular and 3rd party JavaScript libraries
          angular/
            angular.js            --> the latest angular js
            angular.min.js        --> the latest minified angular js
            angular-*.js          --> angular add-on modules
            version.txt           --> version number
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    views/
      index.html        --> main page for app
      layout.html       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.html
        partial2.html
