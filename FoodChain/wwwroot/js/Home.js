$(document).ready(function () {
    var selectedItems = [];
    $(function () {
        $("a[class='Update']").click(function () {
            $("#MyPopup").modal("show");
            return false;
        });
    });

    $('.increasePrice').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count + 1;
        $(this).siblings('.txtCartCount:first').val(count);
        var price = parseInt($(this).parent().parent().parent().find('.lblPrice').text());
        var finalAmount = parseInt($("#tatalPrice").text());
        finalAmount = finalAmount + price;
        $("#tatalPrice").text(finalAmount)
        
    })

    $('.decresePrice').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count - 1;
        if (count > 0) {
            $(this).siblings('.txtCartCount:first').val(count);
            var price = parseInt($(this).parent().parent().parent().find('.lblPrice').text());
            var finalAmount = parseInt($("#tatalPrice").text());
            finalAmount = finalAmount - price;
            $("#tatalPrice").text(finalAmount)
        }
       
        
    })
    $('.glyphicon-trash').on('click', function () {
        $(this).parent().hide()
        $(this).parent().parent().find('button').show()
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        $(this).siblings('.txtCartCount:first').val(1);
        var price = parseInt($(this).parent().parent().parent().find('.lblPrice').text());
        var totalPrice = parseInt($("#tatalPrice").text())
        var finalAmout = parseInt(totalPrice) - (parseInt(price) * parseInt(count));
        $("#tatalPrice").text(finalAmout);
        var itemName = $(this).parent().parent().parent().find('.itemName').text();
        selectedItems=$.grep(selectedItems, function (value) {
            return value != itemName;
        });
        console.log(selectedItems)
    })

    $('.AddToCard').on('click', function () {
        var price = parseInt($(this).parent().parent().find('.lblPrice').text());
        var itemName = $(this).parent().parent().find('.itemName').text();
        selectedItems.push(itemName);
        var totalPrice = parseInt( $("#tatalPrice").text());
        totalPrice = parseInt(totalPrice) + parseInt(price);
        $("#tatalPrice").text(totalPrice)
        $(this).hide()
        $(this).next('div').show();

    })



    $('.textExtraBredPlus').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count + 10;
        $(this).siblings('.txtCartCount:first').val(count);  
    })


    $('.textExtraBredMinus').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count - 10;
        if(count>=0)
        $(this).siblings('.txtCartCount:first').val(count);
    })


    $('.textExtraToppPlus').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count + 20;
        $(this).siblings('.txtCartCount:first').val(count);
    })


    $('.textExtraToppMinus').on('click', function () {
        var count = parseInt($(this).siblings('.txtCartCount:first').val());
        count = count - 20;
        if (count >= 0)
            $(this).siblings('.txtCartCount:first').val(count);
    })


    $("#btnAddExtras").on('click', function () {
        var extraBread = parseInt($("#textExtraBred").val());
        var extraToppings = parseInt($("#textExtraToppings").val());
        var extraCheese = parseInt($("#textExtraCheese").val());
        var extraSauce = parseInt($("#textExtraSauce").val());
        var totalPrice = parseInt($("#tatalPrice").text());
        var allExtras = parseInt(extraBread) + parseInt(extraToppings) + parseInt(extraCheese) + parseInt(extraSauce);
        totalPrice = totalPrice + allExtras;
        $("#tatalPrice").text(totalPrice);
        $("#MyPopup").modal("hide");
        $("#textExtraBred").val("0");
        $("#textExtraToppings").val("0");
        $("#textExtraCheese").val("0");
        $("#textExtraSauce").val("0");
    })


    $('#MyPopup').on('hidden.bs.modal', function () {
        $("#textExtraBred").val("0");
        $("#textExtraToppings").val("0");
        $("#textExtraCheese").val("0");
        $("#textExtraSauce").val("0");
    })

    $("#checkout").on('click', function () {
        if (selectedItems.length > 0) {
            var r = confirm("Hurray! Order placed successfully");
            if (r == true) {
                window.location.reload();
            }
        }
        else {
            alert("Please select at least one item!")
        }
    });
});