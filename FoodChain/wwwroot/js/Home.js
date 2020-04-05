$(document).ready(function () {
    //Pizza
    $("#BtnOnePizza").click(function () {
        $("#BtnOnePizza").hide();
        $("#plusMinusPrdOne").show();
    })
    $("#BtnTwoPizza").click(function () {
        $("#BtnTwoPizza").hide();
        $("#plusMinusPrdTwo").show();

    })
    $("#BtnThreePizza").click(function () {
        $("#BtnThreePizza").hide();
        $("#plusMinusPrdThree").show();
    })

    //sandwiches
    $("#BtnOnesandwich").click(function () {
        $("#BtnOnesandwich").hide(); 
        $("#plusMinusPrdOnesandwich").show();
    })
    $("#BtnTwosandwich").click(function () {
        $("#BtnTwosandwich").hide();
        $("#plusMinusPrdTwosandwich").show();

    })
    $("#BtnThreesandwich").click(function () {
        $("#BtnThreesandwich").hide();
        $("#plusMinusPrdThreesandwich").show();
    })

    //Drinks
    $("#BtnOneDrinks").click(function () {
        $("#BtnOneDrinks").hide();
        $("#plusMinusPrdOneDrinks").show();
    })
    $("#BtnTwoDrinks").click(function () {
        $("#BtnTwoDrinks").hide();
        $("#plusMinusPrdTwoDrinks").show();

    })
    $("#BtnThreeDrinks").click(function () {
        $("#BtnThreeDrinks").hide();
        $("#plusMinusPrdThreeDrinks").show();
    })
});