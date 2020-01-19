
var countries = [ "Argentina", "France", "Australia", "Mozambique", "Thailand", "India", "China", "bolivia", "Georgia", "Norway", "Russia", "Scotland"] 


function displayCountryImage() {
 
  var country = $(this).attr("data-name");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+country+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";
  $.ajax({url: queryURL, method: "GET"}).then(function(response) {
    for (var i = 0; i < response.data.length; i++){
      $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
      $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height_small.url + "'>");
}
  })

}
function renderButtons() {

    
    $("#buttons-view").empty();

    // Looping through the array of countries
    for (var i = 0; i < countries.length; i++) {

     
      var a = $("<button>");
      a.addClass("country");
      a.attr("data-name", countries[i]);
      // Providing the button's text with a value of the country at index i
      a.text(countries[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(a);
    //   $('button').on('click',function (){
    //     console.log("button clicked")
    // }
  }
}

    $('add-country').on("click", function(event) {
  
     event.preventDefault();
    
     $('button').on('click',function (){

      
      var x = $(this).data("search");
      
      var queryURL= "http://api.giphy.com/v1/gifs/search?q="+country+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";
      
      $.ajax({url: queryURL, method: "GET"}).done(function(response) {
       console.log(response);
       console.log(response.data[0].rating);
       for (var i = 0; i < response.data.length; i++){
               $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
               $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height_small.url + "'>");
               var newCountry = $("<button>");
               var p = $("<p>").text("<p>Rating: " + response.data[i].rating + "</p>");
               var countryImage = $("<img>");
               countryImage.attr('src',response.data[i].images.fixed_height_small.url + "'>" );
               newCountryDiv=append(p);
               newCountryDiv=append(countryImage);
              $('#gifArea').append(newCountryDiv);

              }
           
           })

           
    //  var country = $("#country-input").val().trim();
    // The country from the textbox is then added to our array
    //  countries.push(country);

    // calling renderButtons which handles the processing of our movie array
    //  renderButtons();
  })
})


  // Calling the renderButtons function at least once to display the initial list of movies
     renderButtons();


        
  $("#add-country").on("click", function(event) {

    event.preventDefault();

    var country = $("#country-input").val();

    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+country+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";

    $.ajax({url: queryURL, method: "GET"}).done(function(response) {
        console.log(response);
        console.log(queryURL);
        console.log(response.data[0].rating);
        for (var i = 0; i < response.data.length; i++){
                $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height_small.url + "'>");
        }
    
                        })
                      })