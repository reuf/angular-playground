'use strict';

eventsApp.controller('EventController',
	function EventController($scope){

		$scope.sortorder = 'name';

		$scope.snippet = '<span style="color:yellow;">hi there</span>';

		$scope.boolValue = true;

		$scope.myStyle = {color:'red'};

		$scope.myClass = "magenta";

		$scope.event = {
			name: 'Angular Boot Camp',
			date: 1449664838,
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountin View',
				province: 'CA'
			},
			imageUrl:'/img/angularjs-logo.png',
			sessions: [
				{
					name: 'ZDirectives MasterClass Introductory',
					creatroName: 'John Doe.',
					duration: 1,
					level: 'Advanced',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, dolorum.',
					upVoteCount: 400
				},
				{
					name: 'Scopes for fun and profiut.',
					creatroName: 'Marc Zuckenberg.',
					duration: 2,
					level: 'Introductory',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, beatae?',
					upVoteCount: 400
				},
				{
					name: 'Well Behaved Controllers',
					creatroName: 'Halil Halilovic.',
					duration: 4,
					level: 'Intermediate',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatibus.',
					upVoteCount: -3
				}
			]
		}

		$scope.upVoteSession = function(session){
			session.upVoteCount++;

		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;

		}
	}
);