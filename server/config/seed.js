/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Book = require('../api/book/book.model');
var Categoryphoto = require('../api/categoryphoto/categoryphoto.model');
var Bookphoto = require('../api/bookphoto/bookphoto.model');


Book.find({}).remove(function () {
    Book.create({
        title: 'Java8',
        author: 'Wojtek',
        category: 'JAVA',
        description: 'Blah blah blah 1',
        isPdfVersion: true,
        isPaperVersion: true,
        whoHasGotItNow: 'Maciek'
    });

    Book.create({
        title: 'Java7',
        author: 'Wojtek',
        category: 'JAVA',
        description: 'Blah blah blah 2',
        isPdfVersion: false,
        isPaperVersion: false,
        whoHasGotItNow: 'Maciek'
    });

    Book.create({
        title: 'PHPBook',
        author: 'Adam',
        category: 'PHP',
        description: 'Blah blah blah 3',
        isPdfVersion: false,
        isPaperVersion: false,
        whoHasGotItNow: 'Maciek'
    });

    Book.create({
        title: 'UNIXBook',
        author: 'Damian',
        category: 'Unix',
        description: 'Blah blah blah 4',
        isPdfVersion: true,
        isPaperVersion: true,
        whoHasGotItNow: 'Maciek'
    });

    Book.create({
        title: 'Cassandra',
        author: 'Tomek',
        category: 'noSQL',
        description: 'Blah blah blah 5',
        isPdfVersion: true,
        isPaperVersion: false,
        whoHasGotItNow: 'Maciek'
    });
});

Categoryphoto.find({}).remove(function () {
    Categoryphoto.create({
        name: 'JAVA',
        url: 'http://pbs.twimg.com/profile_images/1605673210/Java_400x400.jpg'
    }, {
        name: 'PHP',
        url: 'http://worldstopbrands.com/_mm/_d/_ext3/73378/big_Elephpant%20Mascot%20Php01.gif'
    }, {
        name: 'Unix',
        url: 'http://moonlite.s3.amazonaws.com/objs/302/original.png?1380654874'
    }, {
        name: 'noSQL',
        url: 'http://pbs.twimg.com/profile_images/731280347/nosql.gif'
    });
});

Bookphoto.find({}).remove(function () {
    Bookphoto.create({
        name: 'Java8',
        url: 'http://pbs.twimg.com/profile_images/466243416477560832/VkFkQ-_J_400x400.png'
    }, {
        name: 'Java7',
        url: 'https://pbs.twimg.com/profile_images/498930484273889280/652rxwyK_400x400.png'
    }, {
        name: 'UNIXBook',
        url: 'https://pbs.twimg.com/profile_images/413064310164684800/cg-rsosT_400x400.jpeg'
    }, {
        name: 'Cassandra',
        url: 'https://pbs.twimg.com/profile_images/378800000659740845/f66ef9f120b11b034a47d4cec489d249_400x400.png'
    }, {
        name: 'PHPBook',
        url: 'https://pbs.twimg.com/profile_images/459217035604402177/disihPKA.png'
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