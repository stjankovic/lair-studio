var currentLeft = 1;
var currentRight = 1;

var animationInterval = 2000;

document.body.addEventListener('touchstart', function(e){ e.preventDefault(); });

$( document ).ready(function() {

	$('html, body').css({
	    overflow: 'hidden',
	    height: '100%'
	});
	
	
	overlay();
	
	document.ontouchmove = function(event){
 	   event.preventDefault();
	}

});

$( window ).on( "load", function() {
	leftAnimation();
	rightAnimation();
    
});

function leftAnimation(){
	
	var leftImages = [];
	
	$('.imageSrcLeft').each(function(){
		
		leftImages.push($(this).data("src"));
		
	});
		
	setTimeout(animateLeft, animationInterval);
	
	function animateLeft(){
		
		if (currentLeft != (leftImages.length-1)){
			
			$('.leftContainer .currentImage').addClass('prevImage');
			$('.leftContainer .nextImage').addClass('currentImage');			
			
			currentLeft++;
			
			setTimeout(preloadNext, 1001);
			
			function preloadNext(){
				
				$('.leftContainer .prevImage').remove();
				$('.leftContainer .currentImage').removeClass("nextImage");
				
				var nextImage = leftImages[(currentLeft)];
				
				$(".leftContainer").append("<div class='nextImage image' style='background-image: url(\"img/left-img/" + "left-img" +(currentLeft+1)+ ".jpg\");'></div>");
				
			setTimeout(animateLeft, animationInterval);	
				
			}
			
		}
		
		else{
			
			currentLeft = 0;
			
			$('.leftContainer .currentImage').addClass('prevImage');
			$('.leftContainer .nextImage').addClass('currentImage');			
			
			currentLeft++;
			
			setTimeout(preloadNext, 1000);
			
			function preloadNext(){
				
				$('.leftContainer .prevImage').remove();
				$('.leftContainer .currentImage').removeClass("nextImage");
				
				var nextImage = leftImages[(currentLeft)];
				
				$(".leftContainer").append("<div class='nextImage image' style='background-image: url(\"img/left-img/" + "left-img" +(currentLeft)+ ".jpg\");'></div>");
				
			setTimeout(animateLeft, animationInterval);	
				
			}
			
			
		}
		
	}
	
}

function rightAnimation(){
	
	var rightImages = [];
	
	$('.imageSrcRight').each(function(){
		
		rightImages.push($(this).data("src"));
		
	});
		
	setTimeout(animateRight, animationInterval);
	
	function animateRight(){
		
		if (currentRight != (rightImages.length-1)){
			
			$('.rightContainer .currentImage').addClass('prevImage');
			$('.rightContainer .nextImage').addClass('currentImage');			
			
			currentRight++;
			
			setTimeout(preloadNext, 1000);
			
			function preloadNext(){
				
				$('.rightContainer .prevImage').remove();
				$('.rightContainer .currentImage').removeClass("nextImage");
				
				var nextImage = rightImages[(currentLeft)];
				
				$(".rightContainer").append("<div class='nextImage image' style='background-image: url(\"img/right-img/" + "right-img" +(currentRight+1)+ ".jpg\");'></div>");
				
			setTimeout(animateRight, animationInterval);	
				
			}
			
		}
		
		else{
			
			currentRight = 0;
			
			$('.rightContainer .currentImage').addClass('prevImage');
			$('.rightContainer .nextImage').addClass('currentImage');			
			
			currentRight++;
			
			setTimeout(preloadNext, 1000);
			
			function preloadNext(){
				
				$('.rightContainer .prevImage').remove();
				$('.rightContainer .currentImage').removeClass("nextImage");
				
				var nextImage = rightImages[(currentRight)];
				
				$(".rightContainer").append("<div class='nextImage image' style='background-image: url(\"img/right-img/" + "right-img" +(currentRight)+ ".jpg\");'></div>");
				
			setTimeout(animateRight, animationInterval);	
				
			}
			
			
		}
		
	}
	
}

function overlay(){
	
	$('.nav').click(function(){
		$('.overlay-about').fadeOut(0);
		$('.overlay-nav').fadeIn(250);
		$(this).fadeOut(250, function(){
			$('.close').fadeIn(250);
		});
		
		if (!$('.overlay').hasClass("open")){
			$('.overlay').addClass("open");
		}
		else{
			$('.overlay').removeClass("open");
		}
		
	});

	$('.about-btn').click(function() {
		$('.overlay-nav').fadeOut(250);
		$('.overlay-about').fadeIn(250);

	})
	
	$('.close').click(function(){
		
		$(this).fadeOut(250, function(){
			$('.nav').fadeIn(250);
		});
		
		if (!$('.overlay').hasClass("open")){
			$('.overlay').addClass("open");
		}
		else{
			$('.overlay').removeClass("open");
		}
		
	});
	
}