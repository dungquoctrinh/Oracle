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
      .state('chatPage', {
         url: '/ChatPage',
         // TODO: templateUrl: 'ChatPage/',
         controller: 'chatPageController',
      })
      .state('stockDetail', {
         url: '/stockDetail',
         // TODO: templateUrl: 'Customer/customer.template.html',
         controller: 'stockDetailController',
      })
   }]);
