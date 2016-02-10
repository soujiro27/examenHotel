$(function(){
  $('select').on('change',estado);
})

function estado()
{
  var estado=parseInt($(this).val());
  if (estado==1) {
    var libres=parseInt($('div.libres').children().first().next().text());
    libres+=1;
    $('div.libres').children().first().next().text(libres);

  }
  else if (estado==2) {
    var libres=parseInt($('div.libres').children().first().next().text());
    libres-=1;
    $('div.libres').children().first().next().text(libres);
    var ocupadas=parseInt($('div.ocupadas').children().first().next().text());
    ocupadas+=1;
    $('div.ocupadas').children().first().next().text(ocupadas);
  }

}
