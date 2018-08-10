	$('.icon-xiangji').click(function(){

		$('#uploadImage input').click();

	});

	/*轮播特效*/
	var carousel_lists = $('.carousel li');
	var yuanquan_lists = $('.yuanquan');

	var carousel_lists_index = 0;
	function carousel(index){

		carousel_lists.eq(index).fadeIn().siblings().fadeOut();
		yuanquan_lists.removeClass('icon-yuanquan1').addClass('icon-yuanquan').css({color:'rgb(102, 102, 102)'}).eq(index).removeClass('icon-yuanquan').addClass('icon-yuanquan1');
		yuanquan_lists.eq(index).css({

			color:'#fff'
		});
	}

	var carousel_auto = setInterval(function(){

		carousel_lists_index++;
		if(carousel_lists_index > carousel_lists.length - 1){
			carousel_lists_index = 0;
		}
		carousel(carousel_lists_index);

	},5000);

	$('.left-btn').click(function(){
		carousel_lists_index --;
		if(carousel_lists_index < 0){

			carousel_lists_index = carousel_lists.length - 1;
		}
		carousel(carousel_lists_index);
	});

	$('.right-btn').click(function(){

		carousel_lists_index ++;
		if(carousel_lists_index > carousel_lists.length-1){
			carousel_lists_index = 0;
		}
		carousel(carousel_lists_index);

	});

	yuanquan_lists.hover(function(){

		
		carousel_lists_index = $(this).index();
		carousel(carousel_lists_index);

	});

	/***************************************************************************************************************************************************/

	$('#promotional').hover(function(){

		$('.promotional').show();
		$('.announce').hide();
		var left = $('.active-line').css('left');
		left = left.replace('px','');

		$('.active-line').stop().animate({left:'12px'},300);

	});

	$('#announce').hover(function(){

		$('.announce').show();
		$('.promotional').hide();

		$('.active-line').stop().animate({

			left:'72px'
		},100);
	});

	/*************************************************************************服务类型特效************************************************************/
	$('.server-type-box>ul>li').hover(function(){

		var index = $(this).index();
		$('.server-type-box>ul>li').removeClass('server-box-active');
		$(this).addClass('server-box-active');

		//下划线移动
		var toLeft = '';
		switch(index){

			case 1:
				toLeft = 44;
			break;

			case 2:
				toLeft = 86;
			break;

			case 3:
				toLeft = 126;
			break;

			default:
				toLeft = 0;
			break;
		}
		$('.bottom-line').stop().animate({
			left:toLeft+'px'

		},300);

		//对应的服务内容显示
		$('.server-content').hide();
		var server_content = $('.server-content').eq(index);
		server_content.show();

		//内容类别对应的内容显示
		server_content.children('.content-show').show();
		

	},false);

	/**************************************************************************服务内容特效*************************************************************/
	$('.server-content-type ul li').hover(function(){

		var index =$(this).index();
		$(this).siblings().removeClass('server-content-active');
		$(this).addClass('server-content-active');

		/*对应的服务内容显示*/
		$('.jd-content').hide();
		$(this).parent().parent().nextAll().eq(index).show();
		$(this).parent().parent().nextAll().removeClass('content-show');
		$(this).parent().parent().nextAll().eq(index).addClass('content-show');

	},false);


	/*********************************************************话费**************************************************************************************/

	/**********************************************************************机票************************************************************************/
	$('.from').focus(function(){

		$(this).css({

			'border': '1px solid #e7e7e7'
		});

	});

	$('.from').blur(function(){

		$(this).css({

			'border-bottom': '0'
		});

	});

	$('input[name="guonei-ticket-type"],input[name="guoji-ticket-type"]').click(function(){
		var _thatVal = $(this).val();
		if(_thatVal == 1){
			$('.date-input').hide();
			$('input[name="date-from"]').show();
			$('input[name="date-from"]').css({
				'width':'120px'
			});
		}else{

			$('.date-input').css({
				'width': '63px',
				'margin-right':' 0px'
			});

			$('.date-input').eq(1).css({
				'position':'relative',
				'left': '-5px'
			});

			$('.date-input').show();
		}
	});

	$('input[name="date-from"]').focus(function(){

		$(this).css({

			'border-right':'1px solid #e7e7e7',
		});

		$('input[name="date-to"]').css({
			'border-left':'0px',
			'left': '-3px'
		})
	});


	$('.ticket-type li').hover(function(){

		$(this).siblings().removeClass('server-content-active');
		$(this).addClass('server-content-active');

		var index = $(this).index();
		var toLeft = '';
		if(index == 0){

			toLeft = 0;
			
		}

		if(index == 1){
			toLeft = '-186px';
		}

		if(index == 2){
			toLeft = '-365px';
		}

		$('.ticket-content-box').stop().animate({
			'left':toLeft
		},300);

	},false);

	/********************************************************************酒店**************************************************************************/

	/*酒店入住日期*/
	var dateYear = (new Date()).getFullYear();
	var dateMonth = (new Date()).getMonth()+1;
	var thisDate = (new Date()).getDate();
	$('input[name="in-date"]').attr('placeholder',dateYear+'-'+dateMonth+'-'+thisDate);


	/*酒店离店日期*/
	$('input[name="out-date"]').attr('placeholder',dateYear+'-'+dateMonth+'-'+(thisDate+1));


	/*酒店类别*/
	$('.hotel-type li').hover(function(){

		$(this).siblings().removeClass('server-content-active');
		$(this).addClass('server-content-active');

		var index=$(this).index();
		if(index == 0){

			$('.hotel-content-box').stop().animate({

				'left':0
			},300);

		}else{

			$('.hotel-content-box').stop().animate({

				'left':'-179px'
			},300);
		}

	},false);


	/*******************************************************点击去除输入空的placeholder*****************************************************************/
	var inputPlaceholder = '';
	$('input').focus(function(){

		inputPlaceholder = $(this).attr('placeholder');
		$(this).attr('placeholder','');

	});

	$('input').blur(function(){

		$(this).attr('placeholder',inputPlaceholder);

	});

	/****************************************************************机票*******************************************************************************/
	