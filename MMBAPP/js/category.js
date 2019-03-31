$(function(){
    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcategorytitle",
            dataType: "dataType",
            success: function (info) {
                var arr = JSON.parse(info)
                console.log(arr['result']);
                
                $('.cate_ul').html(template('catenav',arr))
                
            }
        });
    }
    $('.cate_ul').on('click','.title',function(){
        var id = $(this).data('id')
        $.ajax({
            url: "http://127.0.0.1:9090/api/getcategory",
            data: {
                titleid:id
            },
            dataType: "json",
            success: function (info) {
                console.log(info);

                // for(var i = 0;i < $('.cate_ul').children().length;i++){
                    $('.main_ul').html(template('catenav2',info))
                // }
               
            }
        })
        $(this).next().toggle()
    })
   
        
    
    //点击显示隐藏
    $('.cate_ul').on('click','.cate_ul .title',function(){
        console.log($(this).next());
        $(this).next().toggleClass('now')
    })
    
    
    //点击固定分类跳转productlist页面传key={{categoryId}}
    // location.href = 'searchList.html?key=' + categoryId+
    $('.cate_ul').on('click','.main_ul li',function(){
        var id = $(this).data('id');
        console.log($(this));
        console.log(id);
        location.href = 'productlist.html?key=' + id
    })
    
    
})
