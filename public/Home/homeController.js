app.controller('homeController', ['$scope', function($scope) {
	var iheight = -1;
	$scope.posts = [];
	$scope.submitPost = function() {
		if (iheight == -1) {
			iheight = angular.element(document.querySelector('#scrollable'))[0].offsetHeight;
		}
		if (!$scope.ctext || $scope.ctext === '') { return; }
		$scope.posts.push({
			text: $scope.ctext,
			id: $scope.posts.length + 1
		});
		$scope.ctext = '';
		if (angular.element( document.querySelector('#chatbox'))[0].offsetHeight > angular.element( document.querySelector('#scrollable'))[0].offsetHeight - iheight) {
			angular.element( document.querySelector('#chatbox'))[0].style.overflow = 'hidden';
		} else {
			angular.element( document.querySelector('#chatbox'))[0].style.overflowY = 'scroll';
		}
		
	};
}]);