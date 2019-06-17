$(document).ready(function(){
			$(window).scroll(function(){
				if ($(this).scrollTop() > 100){
					$('header').addClass("headertop");
				}
				else{
					$('header').removeClass('headertop');
				}
			});

			// КРУГИ
			$('.content_a a').hide(10);
			$(window).scroll(function(){
				if($(this).scrollTop() > 430)
				{
					$('.content_a a').show(1000);
				}
			});
			setInterval(function(){
				$('.content_a > a').animate({
					'opacity' : '0.4'
				},1800).animate({
					'opacity' : '1'
				},1800)
			}, 4000);

			//ГАЛЕРЕЯ

			$('.gallery section').click(function($closed){
				
				$(this).toggleClass('photo');
				let namber = $(this).index();
				let classs = $(this).hasClass('photo');

				if(classs == true){
					$(this).find('img').attr('src', 'image/gallery/'+namber+'.jpg');
					}
				
				

			});

		});