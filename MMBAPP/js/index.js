$(function(){
    render()
    //渲染一级菜单
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getindexmenu",
            dataType:'json',
            success: function (info) {
                $('.nav_ul').html(template('indexnav',info))
            }
        });
    }
    //点击拓展
    $('.nav_ul').on('click','li',function(){
        
        if($(this).data('id') === 7){
            $('.main_nav').toggleClass('current')
            
        }
        // return false
    })

    getdel()
    function getdel(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            dataType: "json",
            success: function (info) {
                console.log(info);
                $('.details_ul').html(template('indexdetail',info))
            }
        });
    }

   
})