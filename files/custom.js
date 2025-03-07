$(document).ready(function(){
    $(".package-switcher ul li").click(function(){
        $(".package-switcher ul li").removeClass("active");
        $(this).addClass("active");
        var period = $(this).data("period");
        $(".plan-price h2").hide();
        $(".plan-price h2."+period).fadeIn();
    });

    $(".navbar-nav .nav-item").click(function(){
        $('.navbar').removeClass('active');
        $('body').removeClass('canvas-open');
        $('.navbar-toggler-icon').removeClass('active');
    })
	
	var maxHeight = 0;

	$(".single-price-plan").each(function() {
		var height = $(this).height() + 100;
		if (height > maxHeight) {
			maxHeight = height;
		}
	});


	$(".single-price-plan").css("height", maxHeight);
	
	
	var maxHeight1 = 0;
	$(".image-box").each(function() {
		var height1 = $(this).height() + 100;
		if (height1 > maxHeight1) {
			maxHeight1 = height1;
		}
	});


	$(".image-box").css("height", maxHeight1);
})

