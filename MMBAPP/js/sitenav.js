$(function(){
    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getsitenav",
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.site_ul').html(template('site',info))
                
            }
        });
    }
    //传id
    // $('.inland_ul').on('click','li',function(){
    //     var id = $(this).data('id')
    //     console.log(id);
    //     location.href = 'discount.html?key='+id
        
    // })
})