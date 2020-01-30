$(document).ready(function() {
    var infoContainer = $("#show-info");
    var restaurantCategorySelect = $("#category");
    restaurantCategorySelect.on("change", handleCategoryChange);
    var restaurants;
  
    // This function grabs posts from the database and updates the view
    function getRestaurants(category) {
      var categoryString = category || "";
      if (categoryString) {
        categoryString = "/category/" + categoryString;
      }
      $.get("/api/restaurants" + categoryString, function(data) {
        console.log("Restaurants", data);
        restaurants = data;
        if (!restaurants || !restaurants.length) {
          displayEmpty();
        }
        else {
          initializeRows();
        }
      });
    }
  
    getRestaurants();
    
    function initializeRows() {
      infoContainer.empty();
      var restaurantsToAdd = [];
      for (var i = 0; i < restaurants.length; i++) {
        restaurantsToAdd.push(createNewRow(restaurants[i]));
      }
      infoContainer.append(restaurantsToAdd);
    }
  
    // This function constructs a post's HTML
    function createNewRow(restaurant) {
      var newRestCard = $("<div>");
      newRestCard.addClass("card");
      var newRestCardHeading = $("<div>");
      newRestCardHeading.addClass("card-header");
      var newRestTitle = $("<h2>");
      var newRestCategory = $("<h5>");
      newRestCategory.text(restaurant.category);
      newRestCategory.css({
        float: "right",
        "font-weight": "700",
        "margin-top":
        "-15px"
      });
      var newRestCardBody = $("<div>");
      newRestCardBody.addClass("card-body");
      var newRestBody = $("<div>");
      var restTime = $("<p>").text("Hours: " + restaurant.time);
      var rest_hh = $("<p>").text("Happy Hour? " + restaurant.hh);
      var restRating = $("<p>").text("Rating: " + restaurant.rating);
      var restReview = $("<p>").text("Top Review: " + restaurant.review);
      newRestTitle.text(restaurant.name + " ");
      newRestBody.append(restTime);
      newRestBody.append(rest_hh);
      newRestBody.append(restRating);
      newRestBody.append(restReview);
      
      newRestCardHeading.append(newRestTitle);
      newRestCardHeading.append(newRestCategory);
      newRestCardBody.append(newRestBody);
      newRestCard.append(newRestCardHeading);
      newRestCard.append(newRestCardBody);
      newRestCard.data("restaurant", restaurant);
      return newRestCard;
    }

    function displayEmpty() {
      infoContainer.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No restaurants yet for this category, click on the button above to add a new restaurant.");
      infoContainer.append(messageH2);
    }
  
    function handleCategoryChange() {
      var newRestCategory = $(this).val();
      getRestaurants(newRestCategory);
    }
  
  });