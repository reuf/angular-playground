eventsApp.factory('eventData', function ($http, $log) {
	return {
		getEvent: function(successcb) {
			$http({method:'GET', url: '/data/event/1'}).
					success(function(data, status, headers, config){
						successcb(data);
				}).
					error(function(data, status, headers, config){
						$log.warn(data, status, headers(), config);
				});
		}
	};
});

			// name: 'Angular Boot Camp',
			// date: 1449664838,
			// time: '10:30 am',
			// location: {
			// 	address: 'Google Headquarters',
			// 	city: 'Mountin View',
			// 	province: 'CA'
			// },
			// imageUrl:'/img/angularjs-logo.png',
			// sessions: [
			// 	{
			// 		name: 'ZDirectives MasterClass Introductory',
			// 		creatroName: 'John Doe.',
			// 		duration: 1,
			// 		level: 'Advanced',
			// 		abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, dolorum.',
			// 		upVoteCount: 400
			// 	},
			// 	{
			// 		name: 'Scopes for fun and profiut.',
			// 		creatroName: 'Marc Zuckenberg.',
			// 		duration: 2,
			// 		level: 'Introductory',
			// 		abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, beatae?',
			// 		upVoteCount: 400
			// 	},
			// 	{
			// 		name: 'Well Behaved Controllers',
			// 		creatroName: 'Halil Halilovic.',
			// 		duration: 4,
			// 		level: 'Intermediate',
			// 		abstract: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, voluptatibus.',
			// 		upVoteCount: -3
			// 	}
			// ]