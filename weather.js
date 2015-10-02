var doEverything = function() {
$(document).ready(function(){
      $("#update").click(function() {
         $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + $("#zip").val(), function(result) {
            // check if data returned is valid, returns undefined if failed.
            // error caused by invalid zip codes.
            $("#stuff").empty();
            if (result.name === undefined) {
               $("#stuff").append("Error: Invalid Zip Code");
            }
            else {
               $("#stuff").append("<img src=\"http://openweathermap.org/img/w/" + result.weather[0].icon +".png\"><br>");
               $("#stuff").append("Location: "+ result.name + "<br>");
               $("#stuff").append("Weather: " + result.weather[0].main + "<br>");
               $("#stuff").append("<div style=\"text-transform:capitalize\"> Cloudiness: " + result.weather[0].description + "</div>");
               $("#stuff").append("Humidity: "+ result.main.humidity + "%<br>");

               // temperatures given in Kelvins, convert to Fahrenheit 
               var temp = 9/5 * (result.main.temp - 273) + 32;
               $("#stuff").append("Temperature: "+ temp.toFixed(0) + "°F<br>");
               temp = 9/5 * (result.main.temp_min - 273) + 32;
               $("#stuff").append("Minimum Temperature: "+ temp.toFixed(0) + "°F<br>");
               temp = 9/5 * (result.main.temp_max - 273) + 32;
               $("#stuff").append("Maximum Temperature: "+ temp.toFixed(0) + "°F<br>");
            }
         });
      });
   });
}