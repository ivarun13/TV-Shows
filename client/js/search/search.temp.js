angular.module("search.temp", ["ui.bootstrap"])
       .factory('states', function()
       {
       	//var myDataRef = new Firebase('https://s47ajgwynth.firebaseio-demo.com/');
			//$scope.messages2 = $firebaseArray(myDataRef);
		
			var states = ["Alabama", "Alaska", "Arizon  a", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
			return states;
       });