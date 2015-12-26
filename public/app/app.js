var app = angular.module('resume', ['ui.router']);

app.config(function ($stateProvider) {
  $stateProvider.state('experience', {
    url: '/experience/:name',
    template: '<h3>ANGULAR IS WORKING</h3>'
  });
});