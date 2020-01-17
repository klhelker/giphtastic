
var countries = [ "Argentina", "France", "Australia", "Mozambique", "Thailand", "India", "China", "bolivia", "Georgia", "Norway", "Russia", "Scotland"] 

function renderButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < countries.length; i++) {

     
      var a = $("<button>");
      a.addClass("country");
      a.attr("data-name", countries[i]);
      // Providing the button's text with a value of the movie at index i
      a.text(countries[i]);
      // Adding the button to the HTML
      $("#buttons-view").append(a);
    }
  }

  // This function handles events where one button is clicked
  $("#add-movie").on("click", function(event) {
  
    event.preventDefault();
    
    var country = $("#country-input").val().trim();
    // The movie from the textbox is then added to our array
    countries.push(country);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
  });

  // Calling the renderButtons function at least once to display the initial list of movies
  renderButtons();


$('button').on('click',function (){

    var x = $(this).data("search");
    

    var queryURL= "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";
    

    $.ajax({url: queryURL, method: "GET"}).done(function(response) {
     console.log(response);
     console.log(response.data[0].rating);
     for (var i = 0; i < response.data.length; i++){
             $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
             $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height.url + "'>");
     }
         
         
         })

        })
        
  $("#find-country").on("click", function(event) {


    event.preventDefault();

   
    var country = $("#country-input").val();

   
    var queryURL = "http://api.giphy.com/v1/gifs/search?q="+country+"&api_key=6BDLXo72I7XzDjnAmW2Gmk5YusJyh70g&limit=10";

    $.ajax({url: queryURL, method: "GET"}).done(function(response) {
        console.log(response);
        console.log(response.data[0].rating);
        for (var i = 0; i < response.data.length; i++){
                $('#gifArea').prepend("<p>Rating: " + response.data[i].rating + "</p>");
                $('#gifArea').prepend("<img src= '" + response.data[i].images.fixed_height.url + "'>");
        }
    
                        })
    })
