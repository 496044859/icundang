/* 
* @Author: Fly
* @Date:   2016-08-01 11:27:35
* @Last Modified by:   Fly
* @Last Modified time: 2016-08-31 10:08:17
*/

$(function() {
	//头部滚动固定
		var x=$('.header').offset().top;
		var myTop=$(this).scrollTop();
		var deviceWidth = document.documentElement.clientWidth;
		function scoll () {
			$(window).scroll(function(event) {	
				myTop=$(this).scrollTop();
				if(myTop>x){
					$('.header').addClass('fixed');
					$('.slider-bar').addClass('xianshi');
				}else{					
					$('.header').removeClass('fixed');
					$('.slider-bar').removeClass('xianshi');
				}
			});
		}

		if(deviceWidth > 992){
			scoll();
		}else{
			$('.header').addClass('fixed');
		} ;
		$(window).resize(function(event) {
			deviceWidth = document.documentElement.clientWidth;
			if(deviceWidth > 992){
				myTop=$(this).scrollTop();
				if(myTop>x){
					$('.header').addClass('fixed');
					$('.slider-bar').addClass('xianshi');
				}else{					
					$('.header').removeClass('fixed');
					$('.slider-bar').removeClass('xianshi');
				}
			}else{
				$('.header').addClass('fixed');
			} ;
		});
		

		$('.slider-bar .top').click(function(event) {
			$('html,body').animate({scrollTop:0}, 500);
		});

		$('.slider-bar li').hover(function() {
			$(this).children('.left-inner').show();
		}, function() {
			$(this).children('.left-inner').hide();
		});



		var num=0;
		var timer;

		//下一张功能函数
		var nextFn=function(){
			$('.banner-list li').eq(num).stop().fadeOut(1500).css('position', 'absolute').removeClass('current');
			num++;
			//一旦到了最后一张，再单击下一张，必须回到第0张
			if(num>2){
				num=0;
			}
			$('.banner-list li').eq(num).stop().fadeIn(1500).css('position', 'relative').addClass('current');

		}

		//上一张功能函数
		var prevFn=function(){
			$('.banner-list li').eq(num).stop().fadeOut(1500).css('position', 'absolute').removeClass('current');
			num--;
			if(num<0){
				num=2;
			}
			$('.banner-list li').eq(num).stop().fadeIn(1500).css('position', 'relative').addClass('current');

		}

		//单击右按钮时，调用下一张功能
		$('.next').click(nextFn);


		//单击左按钮时，调用上一张功能
		$('.prev').click(prevFn);

		timer=setInterval(nextFn, 3000);


		$('.banner-wrapper').hover(function() {
			clearInterval(timer);
		}, function() {
			clearInterval(timer);
			timer=setInterval(nextFn, 3000);
		});


		$('.service-nav-list .sol-nav-item').mouseover(function(event) {
			$(this).addClass('on').siblings('li').removeClass('on');
			var myIndex=$(this).index();
			$('.sol-poster-list .sol-poster-item').eq(myIndex).addClass('show').siblings('.sol-poster-item').removeClass('show');
		});

		$('#service .sol-poster-title').click(function(event) {
			$(this).siblings('.sol-poster-content').toggle();
		});
		$('.header .close-btn').click(function(event) {
			$(this).parents(".warning").hide();
		});



		function goPAGE() {
			if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
				
				$('#login').attr('onclick','window.open("http://www.icundang.com/mobile");');
				
			}
			else {
				
				$('#login').attr('onclick','window.open("http://www.icundang.com/archiveportal/");');
				
			}
		}
		goPAGE();
});