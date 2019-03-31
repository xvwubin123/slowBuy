$(function(){
    var search = location.search
    search = decodeURI(search)
    var val =Number(search.split('=')[1]) 
    console.log(val);
    var mimg
    render(val)
    function render(couponid){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcouponproduct",
            data: {
                couponid:couponid
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.coupot_ul').html(template('couponpot',response))
                
                
                
            }
        });
    }
    //点击事件
    $('.coupot_ul').on('click','li',function(){
        var pimg = $(this).data('id')
        console.log(pimg);
        
        $('.center_li').html(pimg)
        $('.horse').toggleClass('open')
    })
    //
    $('.mid').on('click',function(e){
        e.stopPropagation();
        console.log(1);
        
    })
    //
    $('.horse').on('click',function(){
        $('.horse').removeClass('open')
    })
})