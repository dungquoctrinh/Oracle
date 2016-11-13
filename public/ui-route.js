var app = new angular.module('financeapp', ['ui.router', 'ui.bootstrap', 'ngRoute']);

app.config(['$stateProvider', '$urlRouterProvider',
   function($stateProvider, $router) {
      //redirect to home if path is not matched
      $router.otherwise("/");
      $stateProvider
      .state('home',  {
         url: '/',
         templateUrl: 'Home/home.template.html',
         controller: 'homeController',
      })
      .state('chatbox', {
         url: '/chatbox',
         templateUrl: 'Home/chatbox.html',
         controller: 'postController',
      })
      // .state('chatPage', {
      //    url: '/ChatPage',
      //    // TODO: templateUrl: 'ChatPage/',
      //    controller: 'chatPageController',
      // })
      // .state('stockDetail', {
      //    url: '/stockDetail',
      //    // TODO: templateUrl: 'Customer/customer.template.html',
      //    controller: 'stockDetailController',
      // })
   }]);
