'use strict';

eventsApp.controller('EventController',
	function EventController($scope, eventData){

		$scope.snippet = '<span style="color:yellow;">hi there</span>';

		$scope.boolValue = true;

		$scope.myStyle = {color:'red'};

		$scope.myClass = "magenta";

		$scope.sortorder = 'name';

		$scope.event = eventData.getEvent(function(event){
			$scope.event = event;
		});

		$scope.upVoteSession = function(session){
			session.upVoteCount++;

		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;

		}
	}
);