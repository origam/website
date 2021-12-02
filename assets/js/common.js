
$(document).ready(function(){
    $('#adminMenuBar').on('mouseleave',function(){       
        $('#adminMenuBar').fadeOut();
    });
    $('#adminBarBlock').on('mouseover',function(){       
        $('#adminMenuBar').fadeIn();
    });
    
    var pathname = window.location.pathname;
    $('#sidr-main a').removeClass('active');
    $('#sidr-main a').each(function() {
        if (pathname == $(this).attr('href')){
            $(this).addClass('active');
        }         
    });
    
    
    
    //TODO:
    $('#ProfileField_landing').on('click',function(){  
        $('#landingModal').modal();
    });
    
    $('#btn-landing-page-ok').on('click',function(){    
        $('#ProfileField_landing').val($('#field-landing-page').val());
        $('#landingModal').modal('hide');
    });
    
    
    
    $('#btn-register').on('click',function(){ 
        $('#registration-form').submit();
    });
    $('#btn-login').on('click',function(){ 
        $('#login-form').submit();
    });
    $('#btn-restore').on('click',function(){ 
        $('#restore-form').submit();
    });  
    $('#btn-change-password-form').on('click',function(){ 
        $('#change-password-form').submit();
    });     

    
    $('.accordionHeader').on('click', function(){
        $('.fa').removeClass('fa-chevron-down').addClass('fa-chevron-up');
        $(this).find('.fa-chevron-up').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.accordionContent').slideUp();
        $('.accordionContent[data-key="'+$(this).data('key')+'"]').slideDown();
    });

    $('ul.tabs li').removeClass('current');
    $('ul.tabs li').each(function() {
        if (pathname == $(this).attr('data-tab')){
            $(this).addClass('current');
        }         
    });

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		window.location.href = tab_id;
	});
	
	$('ul.localTabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.localTabs li').removeClass('current');
		$('.localTab-content').removeClass('current');

		$(this).addClass('current');
		$('#'+tab_id).addClass('current');
	});
});