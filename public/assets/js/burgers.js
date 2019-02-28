$(function () {
    // handles PUT updatong burger to devored on devour button click
    $(".devour").on("click", function (event) {

        event.preventDefault();

        var id = $(this).data("id");

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: parseInt(id)
        }).then(
            function () {
                console.log("Burger number "+id+" has been devoured!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    // handler to POST burger on submit click
    $("#submitBurg").on("click", function (event) {

        event.preventDefault();

        var newBurg = {name: $("#newB").val().trim()};
        console.log(newBurg);

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurg
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
