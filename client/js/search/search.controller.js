angular.module('search.controller', [])
	.directive('characterPreview', function() {
		return {
			restrict: 'EA',
			scope: {
				character: '='
			},
			templateUrl: '../views/character.preview.html'
		}
	})
	.controller('SearchController', function ($scope, SearchService,$firebaseArray,$cookies) {
		$scope.search = function(){
//use query for multipal result
//get for single result
       
			
	        

			SearchService.query({name: $scope.name }, function(response) {
				// $scope.characters = {response};
                   console.log(response);
				if(response.length)

					$scope.characters = {main: response[0], alternatives: response };

				else
					$scope.characters = response;

			})
		}
		
		$scope.search2 = function(name) {
       
      SearchService.query({name: name }, function(response) {
				// $scope.characters = {response};
                   console.log(response);
				if(response.length)

					$scope.characters = {main: response[0], alternatives: response };

				else
					$scope.characters = response;

			})
     
        
    };


        $scope.getdata = function() {
       
           var c = $cookies.get('firebase');
	          console.log(c);
          if(c == undefined)
          {
          	
			var myDataRef = new Firebase('https://glowing-fire-6595.firebaseio.com/'+c);
			$scope.messages = $firebaseArray(myDataRef);
			$scope.automsg = $scope.messages;
          }
            //$cookies.put('firebase', random,{'expires': expireDate});
         
          //console.log(favoriteCookie);
          else
          {
            var myDataRef = new Firebase('https://glowing-fire-6595.firebaseio.com/'+c);
			$scope.messages = $firebaseArray(myDataRef);
			$scope.automsg = $scope.messages;
		  }
        
        };

		$scope.callback = function(){

            
  // Setting a cookie
          

          var c = $cookies.get('firebase');
          if(c == undefined)
          {
          	var random = Math.random().toString(36).substring(7);
          	//generate random number between 0 and 1 and convert that number to the base 36 and then get the substring of the resulted string..
          	console.log(random);
          	//var b = 'https://glowing-fire-6595.firebaseio.com/'+random;
          	var myDataRef = new Firebase('https://glowing-fire-6595.firebaseio.com/'+random);
          	$scope.messages = $firebaseArray(myDataRef);
          	$scope.automsg = $scope.messages;
          	if($scope.name != null)
          	{
            var name = $scope.name;
            var temp = myDataRef.push({name: name}).key();
			console.log(temp);
			
		    }
            var sampleChatRef = myDataRef.root();
            var path = sampleChatRef.toString();
            console.log(path);
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 30);
            $cookies.put('firebase', random,{'expires': expireDate});
          }
          //console.log(favoriteCookie);
          else
          {
          	
          	var myDataRef = new Firebase('https://glowing-fire-6595.firebaseio.com/'+c);
          	

              
			$scope.messages = $firebaseArray(myDataRef);
			$scope.automsg = $scope.messages;
			if($scope.name != null)
			{
			var name = $scope.name;
			myDataRef.once("value", function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key();
                var childData = childSnapshot.val();
               // console.log(childData.name)
                if (childData.name === name)
                {
                     myDataRef.child(key).remove();
                	//var temp = myDataRef.push({name: name}).key();

                }
           });
           });
            var temp = myDataRef.push({name: name}).key();
			console.log(temp);

		    }
            var sampleChatRef = myDataRef.root();
            var path = sampleChatRef.toString();
            console.log(path);
          }
			
            

		
        
      };
      
});