'use strict';

eventsApp.controller('EventController',
	function EventController($scope){
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountin View',
				province: 'CA'
			},
			imageUrl:'/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Directives MasterClass',
					creatroName: 'John Doe.',
					duration: '1 h',
					level: 'Advanced',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, dolorum.',
					upVoteCount: 34
				},
				{
					name: 'Scopes for fun and profiut.',
					creatroName: 'Marc Zuckenberg.',
					duration: '1h',
					level: 'Beginner',
					abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, beatae?',
					upVoteCount: 2
				},
				{
					name: 'Well Behaved Controllers',
					creatroName: 'Halil Halilovic.',
					duration: '2h',
					level: 'Beginner',
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