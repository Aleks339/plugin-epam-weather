(function( $ ){
  $.fn.cityEpamPlugin = function( options ){
  	var settings = $.extend({
    	cities: ['Bejing', 'London']
    }, options);
  	return this.each(function(){
    	var $this = $(this);
      $.each($this.find('li'), function(){
      	var $li = $(this);
      	$.each(settings.cities, function(){
        	if($li.text().indexOf(this) !== -1){
          //this название города, именно с этим городом надо будет добавить запрос к API, распарсить, добавить температуру
          	var temperature = '+3';
          	$li.append(" (" + temperature + ')');
            return false;
          }
        })
      });
      $this.find('li').click(function(){
      	$(this).hide('slow', function(){
        	$(this).insertBefore($this.find('li:first-child'));
     			$(this).show('slow'); 
        });       	   		
      })
    })
  }
})(jQuery);
$('.cities').cityEpamPlugin();