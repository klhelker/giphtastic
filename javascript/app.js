
var countries = [ "Argentina", "France", "Australia", "Mozambique", "Thailand", "India", "China", "bolivia", "Georgia", "Norway", "Russia", "Scotland"] 


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

  }
}

    $('#add-country').on("click", function(event) {
  
     event.preventDefault();

     var country=$("#country-input").val().trim();

     countries.push(country);

     $("#buttons-view").empty();
     renderButtons();


    });
    
     $("#buttons-view").on('click', ".country", function() {

      var country = $(this).text().toLowerCase();

      var queryURL= "http://api.giphy.com/v1/gifs/search?q="+country+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";

      $.ajax({url: queryURL, method: "GET"}).then(function(response) {
        
        $("#gifArea").html("");
        for(i = 0; i < response.data.length; i++){
          
          var animate = response.data[i].images.fixed_height_small.url;
          var staticGif = response.data[i].images.fixed_height_small_still.url;
          
          console.log(response);
       
          var gifImage = $('<img>').attr({
          
               "src": staticGif,
        "data-still": staticGif,
        "data-animate": animate,
        "data-state": "still",
        "class": "gifImage",

       })

        $("#gifArea").prepend(gifImage);


      //  for (var i = 0; i < response.data.length; i++){
      //          $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
      //          $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height_small.url + "'>");
      //          var newCountry = $("<button>");
      //          var p = $("<p>").text("<p>Rating: " + response.data[i].rating + "</p>");
      //          countryImage.attr('src',response.data[i].images.fixed_height_small.url + "'>" );
      //          newCountryDiv=append(p);
      //          newCountryDiv=append(countryImage);
      //         $('#gifArea').append(newCountryDiv);

      }
          })
        })
     $(document).ready(function(){
       renderButtons();

     })
 