$(function () {
    // console.log("haha"); 测试jquery js 是否正常引入
    $("#textval").on("mousedown",function () {
        $("#textval").val("");
    })
    $("#btn").on("click",function () {
        // alert("haha")

        var text=$("#textval").val();
        // console.log(text);
        //text 是键盘输入的值；
        //console.log(Math.pow(text,3))   x 的三次方
        //abs(text-10)   x 的绝对值
        var result=Math.pow(text,3)+Math.abs(text-10)+4
        console.log(result)
        $("p").html("计算结果："+result);


    })
})