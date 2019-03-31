$(function(){
   

    render()
    function render(){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
            
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.mui-scroll').html(template('bai_title',response))
            }
        });
    }
    
    //
    mui('.mui-scroll-wrapper').scroll({
        scrollX: true, //是否横向滚动
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //内容渲染
    getpot(0)
    function getpot(id){
        $.ajax({
            
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data: {
                titleid:id
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.list_ul').html(template('bai_list',response))
            }
        });
    }
    //点击渲染
    $('.bai_title').on('click','a',function(){
        console.log($(this).data('id'));
        var id = $(this).data('id')
        getpot(id)
        
    })
})