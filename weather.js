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
               var contents = "<h4>" + result.name + " <img src=\"http://openweathermap.org/img/w/" + 
                  result.weather[0].icon +".png\"></h4>";
               contents += "Current Weather";
               // create the table and fill its contents
               contents += "<table class=\"table table-hover shrink\">";
               contents += "<tr><td><b>Weather</b></td><td>" + result.weather[0].main + "</td></tr><br>";
               contents += "<tr><td><b>Cloudiness</b></td><td><div class=\"capitalize\"> " 
                  + result.weather[0].description + "</div></td></tr>";
               contents += "<tr><td><b>Humidity</b></td><td>"+ result.main.humidity + "%</td></tr>";

               // temperatures given in Kelvins, convert to Fahrenheit 
               var temp = 9/5 * (result.main.temp - 273) + 32;
               contents += "<tr><td><b>Temperature</b></td><td>"+ temp.toFixed(0) + "°F</td></tr>";
               temp = 9/5 * (result.main.temp_min - 273) + 32;
               contents += "<tr><td><b>Minimum Temperature</b></td><td>"+ temp.toFixed(0) + "°F</td></tr>";
               temp = 9/5 * (result.main.temp_max - 273) + 32;
               contents += "<tr><td><b>Maximum Temperature</b></td><td>"+ temp.toFixed(0) + "°F</td></tr>";

               $("#stuff").append(contents);
            }
         });
      });
   });
}

