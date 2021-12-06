$(document).ready(function(){      
  $('.categoryOption').click(function(){
      if ($(this).data('option') == 'new'){
          $('#categoryName').attr('readonly',false);
          $('#categoryName').val('');
          $('#Feature_categoryId').val(0);
      } else{ 
          $('#Feature_categoryId').val($(this).data('option'));
          $('#categoryName').attr('readonly',true);
          $('#categoryName').val($(this).data('name'));
      }     
  });   
});