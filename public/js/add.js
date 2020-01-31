$(document).ready(function() {
    // Getting jQuery references to the post body, title, form, and category select
    var nameInput = $("#name");
    var restCategorySelect = $("#category");
    var hhInput = $("#hh");
    var timeInput = $("#time");
    var ratingInput = $("#rating");
    var reviewInput = $("#review");
    var add_newForm = $("#add-new");
    // Giving the postCategorySelect a default value
    restCategorySelect.val("Restaurant");
    // Adding an event listener for when the form is submitted
    $(add_newForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the post if we are missing info
      if (!nameInput.val() || !timeInput.val() || !ratingInput.val() || !reviewInput.val()) {
        return;
      }
      // Constructing a newRest object to hand to the database
      var newRest = {
            name: nameInput.val().trim(),
            category: restCategorySelect.val(),
            time: timeInput.val().trim(),
            hh: hhInput.val(),
            rating: ratingInput.val().trim(),
            review: reviewInput.val().trim()
      };
  
      console.log(newRest);

        submitRest(newRest);
      
    });
  
    // Submits a new post and brings user to restaurants page upon completion
    function submitRest(Rest) {
      $.post("/api/restaurants", Rest, function() {
        window.location.href = "/restaurants";
      });
    }
  });
