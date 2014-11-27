/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Book = require('../api/book/book.model');
var Categoryphoto = require('../api/categoryphoto/categoryphoto.model');


/*Book.find({}).remove(function () {
 Book.create({
 title: 'Java 8',
 author: 'Wojtek',
 category: 'JAVA',
 description: 'Blah blah blah 1',
 isPdfVersion: true,
 isPaperVersion: true,
 whoHasGotItNow: 'Maciek'
 });

 Book.create({
 title: 'Java 7',
 author: 'Wojtek',
 category: 'JAVA',
 description: 'Blah blah blah 2',
 isPdfVersion: false,
 isPaperVersion: false,
 whoHasGotItNow: 'Maciek'
 });

 Book.create({
 title: 'PHP 500',
 author: 'Adam',
 category: 'PHP',
 description: 'Blah blah blah 3',
 isPdfVersion: false,
 isPaperVersion: false,
 whoHasGotItNow: 'Maciek'
 });

 Book.create({
 title: 'How to format computer',
 author: 'Damian',
 category: 'Unix',
 description: 'Blah blah blah 4',
 isPdfVersion: true,
 isPaperVersion: true,
 whoHasGotItNow: 'Maciek'
 });

 Book.create({
 title: 'How to group objects in Cassandra',
 author: 'Tomek',
 category: 'noSQL',
 description: 'Blah blah blah 5',
 isPdfVersion: true,
 isPaperVersion: false,
 whoHasGotItNow: 'Maciek'
 });
 });
 */

Categoryphoto.find({}).remove(function () {
    Categoryphoto.create({
        name: 'JAVA',
        url: 'https://pbs.twimg.com/profile_images/1605673210/Java_400x400.jpg'
    }, {
        name: 'PHP',
        url: 'http://www.worldstopbrands.com/_mm/_d/_ext3/73378/big_Elephpant%20Mascot%20Php01.gif'
    }, {
        name: 'Unix',
        url: 'https://moonlite.s3.amazonaws.com/objs/302/original.png?1380654874'
    }, {
        name: 'noSQL',
        url: 'https://pbs.twimg.com/profile_images/731280347/nosql.gif'
    });
});


Thing.find({}).remove(function () {
    Thing.create({
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    }, {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more code reusability and maximum scalability'
    }, {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    }, {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
});

User.find({}).remove(function () {
    User.create({
            provider: 'local',
            name: 'Test User',
            email: 'test@test.com',
            password: 'test'
        }, {
            provider: 'local',
            role: 'admin',
            name: 'Admin',
            email: 'admin@admin.com',
            password: 'admin'
        }, function () {
            console.log('finished populating users');
        }
    );
});