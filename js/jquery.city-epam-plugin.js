(function( $ ){
      console.log(typeof method);
      $.fn.cityEpamPlugin = function( options ){
        var settings = ['Paris', 'London'];
        if(options){
            settings = settings.concat(options);
        }
        return this.each(function(){
            var $this = $(this);
            var liCollection = $this.find('li');
          $.each(liCollection, function(){
            var $li = $(this);
            $.each(settings, function(){
                if($li.text().indexOf(this) !== -1){
                  var xhr = new XMLHttpRequest();
                  var params = encodeURIComponent(this) + '&APPID=68e023fec6a329065a271ef2867ec8a3';
                  xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=' + params);
                  xhr.onload = function(){
                      if(xhr.status === 200){
                          var result = JSON.parse(xhr.responseText);
                          var temperature = parseInt(result.main.temp - 273.15) +  '&#176;C';
                          $li.append(' (' + temperature + ')');
                      }else{
                          alert('404');
                      }
                  }
                  xhr.send();
                  return false;
                }
            })
            liCollection.on('click', function(){
              $(this).hide('slow', function(){
                  $(this).insertBefore($this.find('li:first-child'));
                      $(this).show('slow');
                  });
             });
             $('button').on('click', function(){
                liCollection.on('click', function(){
                   $(this).hide('slow', function(){
                      $(this).insertAfter($this.find('li:last-child'));
                       $(this).show('slow');
                  });
               });
            });
          });
      });
    }
})(jQuery);