var speed = 50;
function Maerte(){
	if (demo1.setoffHtml-demo.scrollTop<=0) {
           demo.scrollTop-=demo1.setoffHtml;
	} else {
           demo.scrollTop++
         	}
         }

var  timer = setInterval(Maerte,speed);
demo.onmousemove=function(){
	clearInterval(timer);
}
demo.onmouseout=function(){
	timer = setInterval(Maerte,speed);
}


$(function(){
	var curr = 0;
	$('.yd a').each(function(i){
		$(this).click(function(){
			curr = i;
			$('.img-box').find('img').eq(i).fadeIn('fast').siblings('img').fadeOut('fast');
			$(this).addClass('active').siblings().removeClass('active');
		})
	})

    var timer = setInterval(function(){
    	var go = (curr+1)%5;
    	$('.yd a').eq(go).click();
    },1000)

    $('.innerarea,#next,#prev').hover(function(){
    	clearInterval(timer);
    },function(){
    	timer = setInterval(function(){
    		var go = (curr+1)%5;
    		$('.yd a').eq(go).click();
    	},1000)
    })

    $('#next').click(function(){
    	if (curr==4) {
    		var go = 0;
    	} else {
            var go = (curr+1)%5;
    	}
    	$('.yd a').eq(go).click();
    })

    $('#prev').click(function(){
    	if (curr==0) {
    		var go = 4;
    	} else {
            var go = (curr-1)%5;
    	}
    	$('.yd a').eq(go).click();
    })
})