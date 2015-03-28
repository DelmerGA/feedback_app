(function () {
  'use strict';
  this.main.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
      when("/", {
        template: "Hello World"
      })
  }]);
}).call(require('./app.js'));