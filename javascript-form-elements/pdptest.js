
    var smalltile = $(".small-img-icon");
    var  bigImg = $('#mainImg');
    smalltile.click(function(){
        var smallimg = $(this)[0].classList[1];
        // var c = $(".sm-1").prop('src');
        var smImg = $("."+smallimg).attr('src');
        bigImg.attr("src", smImg)
    });
    // var smallimg = $(".small-img1").attr("src");
 
