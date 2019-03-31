$(function(){
   

    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcoupon",
            
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.coubox_ul').html(template('coupon',response))
            }
        });
    }
    //点击传值
    $('.coubox_ul').on('click','li',function(){
        var id = $(this).data('id')
        console.log(id);
        location.href = "couponproduct.html?key=" + id
    })
    
})