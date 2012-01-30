/* Author: Matt Shwery

*/


$(document).ready(function() {

	$('header #nav ul li a').addClass('unselected').click(function(){
		$('header #nav ul li a').removeClass('selected').addClass('unselected');
		$(this).addClass('selected').removeClass('unselected').removeClass('hovered');
	}).hover(function(){
		if($(this).attr('class') !== 'selected'){
			$(this).addClass('hovered');
		}
	}, function(){
		$(this).removeClass('hovered');
	});
	
	$('#emblem').click(function(){
		$('header #nav ul li a').removeClass('selected');
	});
	
	$('#submit-button').css('opacity', '.25');
	
	$('#submit-button').mousedown(function(event){
		if($(this).css('opacity') == '1'){
			$(this).css('background-position','center top');
		} else {
			event.preventDefault();
		}
	}).mouseup(function(){
		if($(this).css('opacity') == '1'){
			$(this).css('background-position','center center');
		}
	}).hover(function(){
		if($(this).css('opacity') == '1'){
			$(this).css('background-position','center center');
		}	
	}, function(){
		if($(this).css('opacity') == '1'){
			$(this).css('background-position','center bottom');
		}	
	});	
	
	
	$('input').focus(function(){
		$(this).keydown(function(){
			if($('#name').val() != ''){
				if($('#email').val() != ''){
					if($('#message').val() != ''){
						cssCheck('add');
					} else {
						cssCheck('remove');
					}
				}
			}
		});
	}).focusout(function(){
		if($(this).val()===''){
			cssCheck('remove');
		}
	});
	
	$('#message').focus(function(){
		$(this).keydown(function(){
			if($('#name').val() != ''){
				if($('#email').val() != ''){
					if($('#message').val() != ''){
						cssCheck('add');
					} else {
						cssCheck('remove');
					}
				}
			}
		});
	}).focusout(function(){
		if($(this).val()===''){
			cssCheck('remove');
		}
	});
	
	function cssCheck(check){
		if(check === 'add'){
			$('#submit-button').stop().animate({'opacity':'1'}, 800);
		} else {
			$('#submit-button').stop().animate({'opacity':'.25'},400);			
		}
	}	
}); 




















