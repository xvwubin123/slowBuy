$(function(){
    var pid
    var limg
    var rstr
    var search = location.search
    search = decodeURI(search)
    var productId = Number(search.split('=')[1])
    var name = search.split('=')[2]
    name = name.split('十')[0]
    // console.log( productId);
    // console.log( name);
    
//渲染标题
    $('#top_tv').text(name)


    render(productId)
    function render(brandtitleid){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getbrand",
            data:{
                brandtitleid:brandtitleid
            },
            dataType: "dataType",
            success: function (info) {
                var arr = JSON.parse(info)
                console.log(arr['result']);
                // console.log(info);
                $('.brand_nav').html(template('catenav',arr))
                
                
            }
        });
    }
    $('.brand_nav').on('click','li',function(){
        var id = $(this).data('id');
        console.log(id);
        
        getpot(id)

    })
    function getpot(brandtitleid){
        $.ajax({
            
            url: "http://127.0.0.1:9090/api/getbrandproductlist",
            data: {
                brandtitleid:brandtitleid,
                pagesize:4
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.brand_dtl').html(template('branddtl',response))
                pid = response['result'][0].productId
                limg = response['result'][0].productImg
                rstr = response['result'][0].productName
                // console.log(pid);
                // console.log(limg);
                // console.log(rstr);
                showlast(pid)
                
                

            }
        });
    }
    
    
    function showlast(pid){
        $.ajax({
           
            url: "http://127.0.0.1:9090/api/getproductcom",
            data: {
                productid:pid
            },
            dataType: "json",
            success: function (response) {
                // console.log(response);
                $('.last').html(template('judge',response))
                $('.last_left').html(limg)
                $('.last_pg').text(rstr)
            }
        });
    }

   
    
   
   
        
 
    
    
})
