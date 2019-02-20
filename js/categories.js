(function() {
  function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
  }
  var id= "";
  var name=""
  if (getQueryString("cat")!=null) {
    name = 'c_'+getQueryString("cat");
    id = name;
    /*scroll to and open the panel*/
    $('a[name=' + name + ']').click();
    $('html, body').animate({  
      scrollTop: $('#'+id).offset().top  
    }, 500);
  }

  if (getQueryString("tag")!=null) {
    name = 't_'+getQueryString("tag");
    id = name;
    /*scroll to and open the panel*/
    $('a[name=' + name + ']').click();
    $('html, body').animate({  
      scrollTop: $('#'+id).offset().top  
    }, 500);
  }

})();

