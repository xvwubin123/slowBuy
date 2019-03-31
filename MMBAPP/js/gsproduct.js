$(function(){
    var shopid = 0
    var areaid = 0
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsshop",
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.dut_ul').html(template('getshop',info))
                
                
            }
        });
    }
    function getirea(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsshoparea",
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.dut_ul').html(template('getirea',info))
                
            }
        });
    }
    getprot(0,0)
    function getprot(shopid,areaid){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getgsproduct",
            data:{
                shopid:shopid,
                areaid:areaid
            },
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.list_ul').html(template('getproduct',info))
                
            }
        });
    }
    //点击事件
    $('.down1').on('click',function(){
        $('.shop_up').toggleClass('none')
        $('.dut').toggleClass('current')
        render()
        $('.dut_ul').on('click','li',function(){
            shopid = $(this).data('id')
            console.log(shopid);
            getprot(shopid,areaid)
        })
        
    })
    $('.down2').on('click',function(){
        $('.irea_up').toggleClass('none')
        $('.dut').toggleClass('current')
        getirea()
        $('.dut_ul').on('click','li',function(){
            areaid = $(this).data('id')
            console.log(areaid);
            getprot(shopid,areaid)
        })
    })
    //点击渲染
    

  
})