$(function () {
function resize() {
    // console.log("nihao")
    // 获取屏幕的宽度
    var windowWidth=$(window).width();
    // console.log(windowWidth)
    var isSmallScreen= windowWidth<768
    // console.log(isSmallScreen)
    $("#carousel-example-generic>.carousel-inner>.item").each(function (index,element) {
        var  $item=$(element);
        var imgSrc=$item.data(isSmallScreen ? 'image-xs':'image-lg')

        $item.css('backgroundImage','url("'+imgSrc+'")')
        if(isSmallScreen){
            $item.html('<img src="'+imgSrc+'" alt="">')
        }else{
            $(".item").html('');

        }
    })
}
$(window).on('resize',resize).trigger('resize')

// 控制标签页的标签容器的宽度
    var $ulContainer= $("#products-nav");
var width=0;
     $ulContainer.children().each(function (index,element) {
          // console.log(element.clientWidth);
         // console.log($(element).width())
         width+=element.clientWidth;
         // console.log(width)
         width=width+20;
     });
     if(width>$(window).width()){
     $("#products-nav")
         .css("width",width)
         .parent().css('overflow-x','scroll')


     }
$('#news .nav-pills a').on("click",function () {
    // console.log($(this))
var $this=$(this);
    var $title=$this.data('title');
    $('.new-title').text($title);

})



})