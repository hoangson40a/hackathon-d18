$(document).ready(function() {
		// xu li audio
		var x = document.getElementById('jean-myAudio')
		document.getElementById('jean-audio-btn').addEventListener('click', playjean)
		function playjean() {
			x.play();
			// $('#jean-audio-btn').remove();
			// $('.char-voice-2').append('<i id ="jean-audio-btn-pause" class="fas fa-volume-mute"></i>')
			
			}


	$('#btn-next').click(function(event) {

		var currentPos = $('.active-btn').index()+1;
		var slide_sau = $('.active').next();
		
		if(slide_sau.length!=0){
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
				
			});
			$('.nut-slide ul li').removeClass('active-btn');
			 $('.nut-slide ul li:nth-child('+(currentPos+1)+')').addClass('active-btn');
			
		}else{
			$('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
			});
			$('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			$('.nut-slide ul li').removeClass('active-btn');
			 $('.nut-slide ul li:nth-child(1)').addClass('active-btn');
			
		}
	});
	$('#btn-prev').click(function(event) {
		var currentPos = $('.active-btn').index()+1;
		var slide_truoc = $('.active').prev();
		if(slide_truoc.length!=0){
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			slide_truoc.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			$('.nut-slide ul li').removeClass('active-btn');
			$('.nut-slide ul li:nth-child('+(currentPos-1)+')').addClass('active-btn');
		}
		else{
			$('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
			});
			$('.slide:last-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			
			});

			$('.nut-slide ul li').removeClass('active-btn');
			$('.nut-slide ul li:nth-child(1)').addClass('active-btn');
		}	
	});
	$('.nut-slide ul li').click(function () { 
		var currentPos = $('.active-btn').index()+1;
		var clickPos = $(this).index()+1;
        $('.nut-slide ul li').removeClass('active-btn');
        $(this).addClass('active-btn');
        if( clickPos > currentPos){
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:nth-child('+clickPos+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai')
            });
        }
        if( clickPos < currentPos){
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
               $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:nth-child('+clickPos+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
               $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
         }
	});
	
	//nut-slide-2
	$('#btn-next-2').click(function(event) {
		var currentPos = $('.active-btn-2').index()+1;
		var slide_sau = $('.active-2').next();
		
		if(slide_sau.length!=0){
			$('.active-2').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active-2');
			});
			slide_sau.addClass('active-2').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			$('.nut-slide-2 ul li').removeClass('active-btn-2');
			 $('.nut-slide-2 ul li:nth-child('+(currentPos+1)+')').addClass('active-btn-2');
			x.pause()
		}else{
			$('.active-2').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active-2');
			});
			$('.slide-2:first-child').addClass('active-2').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
			});
			$('.nut-slide-2 ul li').removeClass('active-btn-2');
	 		$('.nut-slide-2 ul li:nth-child(1)').addClass('active-btn-2');
		}
	});
	$('#btn-prev-2').click(function(event) {
		var currentPos = $('.active-btn-2').index()+1;
		var slide_truoc = $('.active-2').prev();
		if(slide_truoc.length!=0){
			$('.active-2').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active-2');
			});
			slide_truoc.addClass('active-2').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			});
			$('.nut-slide-2 ul li').removeClass('active-btn-2');
			$('.nut-slide-2 ul li:nth-child('+(currentPos-1)+')').addClass('active-btn-2');
		}
		else{
			$('.active-2').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
				$('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active-2');
			});
			$('.slide-2:last-child').addClass('active-2').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
				$('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
			
			});

			$('.nut-slide-2 ul li').removeClass('active-btn-2');
			$('.nut-slide-2 ul li:nth-child(1)').addClass('active-btn-2');
		}	
	});
	$('.nut-slide-2 ul li').click(function () { 
		var currentPos = $('.active-btn-2').index()+1;
		var clickPos = $(this).index()+1;
        $('.nut-slide-2 ul li').removeClass('active-btn-2');
        $(this).addClass('active-btn-2');
        if( clickPos > currentPos){
            $('.active-2').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function (e) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active-2');
            });
            $('.slide-2:nth-child('+clickPos+')').addClass('active-2').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function (event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai')
            });
        }
        if( clickPos < currentPos){
            $('.active-2').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
               $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active-2');
            });
            $('.slide-2:nth-child('+clickPos+')').addClass('active-2').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
               $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
         }
	});
	





});	