$(document).ready(function () {
    var finalAmountGlobe = parseInt($("#tatalPrice").text());
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
        
    })

    $('.AddToCard').on('click', function () {
        var price = parseInt($(this).parent().parent().find('.lblPrice').text());
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
        if(count>=20)
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
        if (count >= 20)
            $(this).siblings('.txtCartCount:first').val(count);
    })







});