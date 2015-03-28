(function () {
  'use strict';

  var app = angular.module('feedbackApp', [
   'feedbackApp.services',
   'feedbackApp.controllers',
   'feedbackApp.directives',
   'ngRoute'
  ]);

  module.exports = {
    main: app
  };
})();