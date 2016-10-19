app.service('WeatherService', function($http){
    var apiKey = '4880bda1e178062dbeda927fc2e8c99a';
    var apiURL = "http://api.openweathermap.org/data/2.5/";
    
    this.currentForecast = {
        getByZipCode : function(zipcode){
        if (isNumber(zipcode) && zipcode.toString().length == 5) {
             return $http.get(apiURL + "weather?zip=" + zipcode + ",us&APPID=" + apiKey)
            }
        else{
            throw "ZipCode not valid!"
        }
    }
      
    }
    
});