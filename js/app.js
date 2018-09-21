var app = angular.module('universityApp', [ ]);

app.controller('teacherCtrl', function($scope){
  $scope.teacher = teacherData;
	$scope.editing = {};
	
	$scope.editTeacher = function(){
		angular.copy( $scope.teacher, $scope.editing );
	}

	$scope.saveChanges = function() {
		angular.copy( $scope.editing, $scope.teacher );
	}

	$scope.cancelChanges = function() {
		$scope.editing = {};
	}
});

var teacherData = {
	name: "Tom Williams",
	bio: "Hello student, mmy name is Tom Williams, nice to meet you, I am a passionate web development instructor, more oriented to the Front-End technologies. My vocation is to be a teacher and to transmit my knowledge to all my students!.",
	age: 35,
	image: "img/teacher.png"
}