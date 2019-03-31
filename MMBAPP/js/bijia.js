$(function(){
    var search = location.search
    search = decodeURI(search)
    var productId = Number(search.split('=')[1])
    console.log( productId);
    
    //渲染面包屑
    render(productId)
    function render(productId){
        $.ajax({
            
            url: "http://127.0.0.1:9090/api/getproduct",
            data: {
                productid:productId,
                
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                var nowstr = response['result'][0].productName.slice(0,10)
                $('.now').text(nowstr)
                $('.list_main').html(template('bijiamain',response))
            }
        });
    }
    //评论
    judge(productId)
    function judge(productId){
        $.ajax({
            
            url: "http://127.0.0.1:9090/api/getproductcom",
            data: {
                productid:productId,
                
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.judge_ul').html(template('judge',response))
            }
        });
    }
})