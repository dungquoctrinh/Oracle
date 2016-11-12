<body ng-app="mainApp">
  <div class="container" ng-controller="homeController">
      <ul class="nav nav-tabs">
          <h2>Welcome to PomeloTech</h2>
          <a class="navbar-brand" ng-if="inSession">{{loggedUser.email}} </br> <span ng-if="inSession">Hi Mr./Ms. {{loggedUser.lastName | uppercase}}</span> </a>
            <li role="presentation" ng-click="retnHm()"><a href="#">Home</a></li>
            <li role="presentation" ng-if="inSession" ng-click="logout()"><a href="#">Logout</a></li>
            <!-- <li role="presentation" ng-if="inSession" ng-click="goMain(loggedUser.role)"><a href="#">GO TO MAIN FUNCTION</a></li> -->
      </ul>
    <ui-view/>


  </div>
</body>
