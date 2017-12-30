// Make sure we wait to attach our handlers until the DOM is fully loaded.
// var customerName;

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $(".change-eaten").on("click", function (event) {
        var customerName = $("#customer-box").val().trim()
        console.log("change eaten click");
        console.log(customerName);
        //Burger Info
        var id = $(this).data("id");
        // var burger_name = $(this).data("burger_name")
        var eatenState = $(this).text().trim();
        if (eatenState === "Eat Again") {
            var newBurgerState = {
                devoured: false
            };
        } else {
            var newBurgerState = {
                devoured: true
            };
        }

        // Send the PUT request aka update burger information .
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: {
                customerName: customerName,
                newBurgerState: newBurgerState
            }

        }).done(
            function () {
                // Reload the page to get the updated list
                location.reload();

            }
            );
    }); //end of put



    $("#submit-button").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new_burger").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .done(
            function () {
                // Reload the page and clear input box 
                location.reload();
                $("#new_burger").val("");
            }
            );
    }); //end of post 

    $("#delete-button").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE",
        }).done(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
            );
    });


}); //end of function