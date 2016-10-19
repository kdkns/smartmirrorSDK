app.controller('smartMirror-kiosk', function($scope, $timeout, WeatherService) {
    $scope.currentWeather = {};
    $scope.showErrorMessage = false;
    $scope.showCurrentWeatherWidget = false;
    
    
    $scope.clearErrorMessage = function(){
        $scope.showErrorMessage = false;
        $scope.errorMessage= "";
        
    }
    
    $scope.getCurrentWeather = function(){
        $scope.clearErrorMessage();
        $scope.showCurrentWeatherWidget = false;
        try{
            WeatherService.currentForecast.getByZipCode($scope.zipcode).then(
                function(response) {
                        
                    if (typeof response != 'undefined' && response.cod !="404") {
                        
                    
                        if (response.data.weather.length > 0) {
                            $scope.currentWeather.description = response.data.weather[0].description;
                        }
                        
                        $scope.currentWeather.locationName = response.data.name;
                        $scope.currentWeather.temp = Math.round((response.data.main.temp * (9/5)) - 459.67);
                        $scope.showCurrentWeatherWidget = true;
                    }else{
                        throw "Sorry, no data found for zipcode!";
                    }
                   
                });
           
        }catch(error){
            $scope.errorMessage = error;
            $scope.showErrorMessage = true;
        }
    }
    
    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.tickInterval = 1000 //ms

    var tick = function () {
        $scope.clock = Date.now() // get the current time
        $timeout(tick, $scope.tickInterval); // reset the timer
        
    }

    // Start the timer
    $timeout(tick, $scope.tickInterval);
    
    

});