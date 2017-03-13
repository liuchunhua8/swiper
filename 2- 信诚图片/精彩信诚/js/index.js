$(function  () {
	document.addEventListener('touchmove',function(event){
	            event.preventDefault();
				},false);
	function bg_change () {
		if (($(window).height()>=$(window).width()&&($(window).height()/$(window).width()<1.68))||($(window).height()<$(window).width())) {
		$('.bg').css({width:'100%;',height:'auto',margin:0});
		}else{
			$('.bg').each(function(index,obj){
				$(obj).css({height:'100%;',width:'auto',marginLeft:($(window).width()-$(obj).width())/2});
			});
		}
	}
	bg_change();
	$(window).resize(bg_change);

	//$('.bg').each()
	var loadingFirst=setTimeout(function (){
		$('.loading1').hide();
		clearTimeout(loadingFirst);
	},1000);
	
$('.index')[0].addEventListener('touchstart',function(){
	$('.indeximg').addClass('gray');
},false)




	
   //loading“≥√Ê
     //$('audio')[0].pause();
      var numt=0;
	  var img_le=$('img').length;
	for (var t=0; t<$('img').length; t++) {
		var imge=new Image();
		imge.src=$('img')[t].src;
		imge.onload=function  () {
			numt++;
			if(numt>=6){
			    $('.loading1').addClass('opa-zero');
				$('.loading2').show();
				var loadingFirst=setTimeout(function (){
					$('.loading1').hide();
					clearTimeout(loadingFirst);
				},1000);
			}
			$('.loading2 i').html(parseInt(100*numt/img_le)+'%')
			if (numt>=img_le-1) {
				$('#ling')[0].play();
				$('#loading2').addClass('dizhi-go');
				$('.tel img').eq(0).css({opacity:1});
				$('.tel span').show();
				$('.loading2 i').html($('.loading2 i').attr('over'));
                $('.tel img')[2].style.webkitAnimationPlayState="paused";
				//$('audio')[0].play();
				//$('.page').eq(0).show()
				$('.tel')[0].addEventListener('touchend',function(){
                   $('#ling')[0].pause();
				   $('.loading2').addClass('go-top');
				  
				   $('.audio').show();
				    bg_change();
				},false)
			}
		}
	}
   //loading“≥√Ê

   var team_animate=[['rubberBand','rubberBand'],['flipLeft','flipRight'],['flipLeftBounce','flipRightBounce']];
   var indexflag=false;
   //…˘“Ù∆¨∂Œ“≥√Êø™ º
	$('.divs1 img').get(3).addEventListener('touchend',function(){
		//alert(1)
		$('.divs1 span img')[0].style.webkitAnimationPlayState='running';
		$('.divs1 span').show();
		$('#myaudio')[0].play();
		$('#myaudio')[0].addEventListener('ended', function () {  
			//-webkit-animation-play-state:paused;
			$('.divs1 span img')[0].style.webkitAnimationPlayState='paused';
			$('.audio').addClass('go-top');
			$('.index').hide().removeClass('go-bottom');
			var sss=setTimeout(function (){
				$('.index').show();
				bg_change();
				clearTimeout(sss);
			},60)
			var indextt=setTimeout(function (){
				indexflag=true;
				clearTimeout(indextt);
			},3000)
			bg_change();
			$('#yin').show();
			$('#myaudio2')[0].play();
		}, false);
	},false);
   //…˘“Ù∆¨∂Œ“≥√ÊÕÍ±œ



   var teamflag=false;
   var lastsuiji;
   my.touchup($('.index')[0],function(){
	   /*
        var indextt=setTimeout(function (){
				teamflag=true;
				clearTimeout(indextt);
			},3000)*/
		//if(indexflag){
			//indexflag=true;
			//alert(1)
			$('.index').addClass('go-top');
			$('.teams').hide().removeClass('go-bottom');
			var ssh=setTimeout(function (){
				$('.teams').show();
				clearTimeout(ssh);
			},60)
			var sunji=2;
			lastsuiji=parseInt(3*Math.random());
			//last animate
			$('.lasts img').each(function(index,obj){
				obj.class='';
				//alert(sunji)
				if (index%2) {
					$(obj).addClass(team_animate[sunji][0])
				}else{
					$(obj).addClass(team_animate[sunji][1])
				}
			})
			//last animate
			while (lastsuiji==sunji) {
                 lastsuiji=parseInt(3*Math.random());
			}
			//console.log(sunji,lastsuiji)
			$('.teams .divs img').each(function(index,obj){
				obj.class='';
				//alert(sunji)
				if (index%2) {
					$(obj).addClass(team_animate[sunji][0])
				}else{
					$(obj).addClass(team_animate[sunji][1])
				}
			})
		//}
   });



    my.touchdw($('.index')[0],function(){
		$('.index').addClass('go-bottom');
		$('.audio').hide().removeClass('go-top');
		$('.audio span').hide();
		var tis=setTimeout(function (){
			$('.audio').show();
			clearTimeout(tis);
		},60)
	},false);
	my.touchdw($('.teams')[0],function(){
		$('.teams').addClass('go-bottom');
		$('.index').hide().removeClass('go-top');
		$('.indeximg').removeClass('gray');
		var idd=setTimeout(function (){
			$('.index').show();
			clearTimeout(idd);
		},60)
	},false)
var tishiflag=false;
  my.touchup($('.tuan1')[0],function(){
      
		  $('.tuan1').addClass('go-top');
		  $('.boss').eq(0).removeClass('go-bottom').hide();
		  var its=setTimeout(function (){
			  $('.boss').eq(0).show();
			   bg_change();
			   clearTimeout(its);
		  },60)
		  
		  var tishiTT=setTimeout(function (){
			  tishiflag=true;
			  clearTimeout(tishiTT);
		  },500)
		 
		  $('.tishi').addClass('go-back')
     
  },false)
	    my.touchup($('.teams')[0],function(){
      
		  $('.teams').addClass('go-top');
		  $('.tuan1').removeClass('go-bottom').hide();
		  var itss=setTimeout(function (){
			  $('.tuan1').show();
			   bg_change();
			   clearTimeout(itss);
		  },60)
     
  },false)

   $('.tishi')[0].addEventListener('touchend',function(){
	      if (tishiflag) {
			  tishiflag=false;
			  $('.tishi').hide();
	      }
          
   },false);
   var bosslength=$('.boss').length;
   $('.boss').each(function  (index,obj) {
	   if (index<bosslength-1) {
		   my.touchle(obj,function(){
				$(obj).removeClass('go-right').removeClass('go-left').addClass('go-left');
				$(obj).next('.boss').hide().removeClass('go-right').removeClass('go-left');
				var ties=setTimeout(function (){
					$(obj).next('.boss').show();
									bg_change();
									clearTimeout(ties);
				},60)

		   })
	   }
	   if (index>0) {
		   my.touchri(obj,function(){
				$(obj).removeClass('go-left').removeClass('go-right').addClass('go-right');
				$(obj).prev('.boss').hide().removeClass('go-left').removeClass('go-right');
				var sett=setTimeout(function (){
					$(obj).prev('.boss').show();
									bg_change();
									clearTimeout(sett);
				},60)

		   })
	   }
	   
   });



   $('.click')[0].addEventListener('touchend',function  () {
	   $('.xiang').show();
   })
	    $('.xiang')[0].addEventListener('touchend',function  () {
	   $('.xiang').hide();
   })
	 $('.tu')[0].addEventListener('touchend',function  () {
	   $('.pai').hide().removeClass('suo').find('img').show().eq(1).hide();
	   var sttt=setTimeout(function (){
		   $('.pai').show().addClass('go-back');
		   clearTimeout(sttt);
	   },60);
		
	  // .removeClass('').show();
   })
	    $('.ge')[0].addEventListener('touchend',function  () {
	   $('.pai').hide().removeClass('suo').find('img').show().eq(0).hide();
	  var ssts= setTimeout(function (){
		   $('.pai').show().addClass('go-back');
		   clearTimeout(ssts)
	   },60);})
	 $('.pai span')[0].addEventListener('touchend',function  () {
		$('.pai').removeClass('go-back').addClass('suo');
		//$('.last').show();
	 },false)
	  
/* 
   my.touchle($('.boss').last()[0],function  () {
	   $('.fen').show().removeClass('go-phone').addClass('go-phone');
	   $('.fen .divs').eq(0).show()
   })
    my.touchup($('.fen')[0],function  () {
	   $('.fen').removeClass('go-phone').addClass('go-top');
	   $('.boss').last().hide();
	   setTimeout(function (){
				 $('.boss').last().show();
									bg_change();
				},60)
   })
   my.touchle()*/	
	   my.diz($('.fens img'),0.8,0.4);
   my.diz($('.divjia img'),0.8,0.2);



   my.touchdw($('.tuan1')[0],function(){
		$('.tuan1').addClass('go-bottom');
        $('.teams').removeClass('go-top').hide();
		var sssss=setTimeout(function (){
			$('.teams').show();
			clearTimeout(sssss)
		},60)
   });
		 my.touchdw($('.boss')[0],function(){
		$('.boss').addClass('go-bottom');
        $('.tuan1').removeClass('go-top').hide();
		var stis=setTimeout(function (){
			$('.tuan1').show();
			clearTimeout(stis);
		},60)
   });


		//music
       var nn=0;

$('#yin')[0].addEventListener('touchend',touchStarty,false);
function touchStarty (event) {
	event.preventDefault();
	nn++;
	if (nn%2) {
		$('#yin img')[0].style.webkitTransform='translateX(-30px)';
		$('#myaudio2')[0].pause();

	}else {
		$('#yin img')[0].style.webkitTransform='translateX(0px)';
		$('#myaudio2')[0].play();
	}
	
	
   
}
/*
document.body.addEventListener('touchmove', function (event) {
	if (flaa) {
	  flaa=false;
    $('audio')[0].play();
	}
}, false);


   $('.pai')[0].addEventListener('touchmove',function(event){
		event.stopPropagation();
   },false);
    $('.pai')[0].addEventListener('touchstart',function(event){
		event.stopPropagation();
   },false);
    $('.pai')[0].addEventListener('touchend',function(event){
		event.stopPropagation();
   },false);
*/
   //music


   $('.pai img').each(function(index,obj){
	   //alert(1)
		//if($(obj).height()>$(window).height()*8/10){
			var startY,moveY;
			var endY=0;
			obj.addEventListener('touchstart',function(event){
				if($(obj).height()<$(window).height()*8/10){return false}
				console.log(1);
				//alert(1)
				event.preventDefault();
				var touch=event.touches[0];
				startY=touch.pageY;
			},false);
			obj.addEventListener('touchmove',function(event){
				if($(obj).height()<$(window).height()*8/10){return false}
				event.preventDefault();
				var touch=event.touches[0];
				moveY=touch.pageY-startY+endY;
				if(moveY>0){
					moveY=0;
				}
				if(moveY<$(window).height()*8/10-$(obj).height()){
				    moveY=$(window).height()*8/10-$(obj).height();
				}
				    obj.style.webkitTransform="translateY("+moveY+"px)";
				
			},false);
			obj.addEventListener('touchend',function(event){
				if($(obj).height()<$(window).height()*8/10){return false}
				event.preventDefault();
				var touch=event.touches[0];
				endY=moveY;
			},false);
		//}
   })
})