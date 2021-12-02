function switchTemplateVarsBlock(blockId){
    if (blockId == ''){
        $('.pageTemplateVarsBlock').hide();
        $('#textContentBlock').fadeIn();        
    } else {
        $('.pageTemplateVarsBlock').hide();
        $('#textContentBlock').hide();
        $('#pageTemplate-'+blockId).fadeIn();           
    }
}

function setPreviewPicture(templateName){
    if (typeof jsTemplateList[templateName] == 'undefined') {
        previewImage = '/content/icons/noPreview.png';
    } else {
        previewImage = jsTemplateList[templateName]['image'];
    }
    $('#templatePreviewImage').attr('src',previewImage);
    $('#templateImage').attr('src',previewImage);  
}

function makeUrlFromTitle(title){
    $.get('/page/makeUrl/title/'+encodeURIComponent(title), function(data) {      
        $('#Page_url').val(data);
    });
}

$(document).ready(function(){      

    switchTemplateVarsBlock($('#templateList').val());
    setPreviewPicture($('#templateList').val());
    
    $('#templateList').on('change',function(){
        switchTemplateVarsBlock($(this).val());     
        setPreviewPicture($(this).val());    
    });
   
    
    $('#Page_title').on('change',function(){
        title = $(this).val();
        makeUrlFromTitle(title);
    });
    
    $('#page-form').on('submit',function(){  
        /*
        url = $(this).attr('action');
        event.preventDefault();
        data = $(this).serialize();
        
        //cleaning
       
        for(i in data){
            if (data[i].name.substring(0,18) == 'Page[templateVars]'){
                if (data[i].value == ""){
                    delete data[i];
                }              
            }
            
        }
       
 
        //TODO: validation ?


        $.post(
          url, data , function(){
             // console.log(url);
              //console.log(data);
              document.location.href='/page/admin';
          }     
        );
       
       
       
        return false;
         */
    });
    
    
});