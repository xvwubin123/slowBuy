$(function(){
    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getinlanddiscount",
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.inland_ul').html(template('inland',info))
                
            }
        });
    }
    //传id
    $('.inland_ul').on('click','li',function(){
        var id = $(this).data('id')
        console.log(id);
        location.href = 'discount.html?key='+id
        
    })
})