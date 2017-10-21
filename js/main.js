




// setTimeout(function(){
// 	var text = $('.text__wrapper h2');
// 	var windowHeight = $(window);
// // 	console.log(text);
// // 	console.log(windowHeight[0].innerHeight);
// 	var winHeight = windowHeight[0].innerHeight;
// 	$(window).scroll(function(){
// 		for(i=0; i < text.length; i++){
// 			var pos = text[i].getClientRects();
// 			var window = $(document).scrollTop();
// 			if(pos[0].top <= winHeight && pos[0].top > 0){
// // 				console.log(text[i]);
// 				$(text[i]).addClass('inview');
// 				var textWrap = $('.text__wrapper')[i];
// 				var data = $(textWrap).data('id')
// // 				console.log(data);
// 				var videoClass = '.video' + '.' + data;
// 				var video = ".video";
// 				var videoItem = $('.video');
// 				var player = $('.player');
// 				var playerClass = '.player'+ '.' + data;
// // 				console.log(videoClass);
// // 				console.log($(video)[i])
// 				$(videoClass).addClass('inview');
// 				$(playerClass).addClass('inview');
// // 				console.log(playerClass);
// 				//use .not to remove the inview class from the video
// // 				console.log($(videoItem).not(videoClass));
// 			}else{
// 				$(text[i]).removeClass('inview');
// 				$(videoItem).not(videoClass).removeClass('inview');
// 				$(player).not(playerClass).removeClass('inview');
//
// // 				$(player).not(playerClass)[0].pause();
// 			}
// 			console.log(i);
// 			console.log($('.player').eq(i).hasClass('inview'));
// 			if($('.player').eq(i).hasClass('inview')){
// 				$('.player')[i].play();
// 			}else{
// 				$('.player')[i].pause();
// 			}
// 		}
// 	})
// }, 1000)
