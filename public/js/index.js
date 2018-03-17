$('#btn-local1').click(function(e){ 
    $(' #local2, #local3').fadeOut( function(){
        $('#local1').fadeIn('fast');
    });
});
$('#btn-local2').click(function(e){ 
    $(' #local1, #local3').fadeOut( function(){
        $('#local2').fadeIn('fast');
    });
});
$('#btn-local3').click(function(e){ 
    $(' #local2, #local1').fadeOut( function(){
        $('#local3').fadeIn('fast');
    });
});