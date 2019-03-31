$(function(){
    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getbrandtitle",
            dataType: "dataType",
            success: function (info) {
                var arr = JSON.parse(info)
                console.log(arr['result']);
                
                $('.cate_ul').html(template('catenav',arr))
                
            }
        });
    }
   
    
    // //点击固定分类跳转productlist页面传key={{categoryId}}
    // // location.href = 'searchList.html?key=' + categoryId+
    $('.cate_ul').on('click','li',function(){
        var id = $(this).data('id');
        var name =$(this).data('name');
        console.log(name);
        console.log(id);
        location.href = 'brand.html?key=' + id+'='+name
    })
    
    
})
