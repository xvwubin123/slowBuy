$(function(){

    var search = location.search
    search = decodeURI(search)
    var val = search.split('=')[1]
    console.log(val);
    
    var pageid = 1;
    var totalpage
    
//渲染面包屑
    render(val)
    function render(id){
        $.ajax({
            
            url: "http://127.0.0.1:9090/api/getcategorybyid",
            data: {
                categoryid:id,
                
            },
            dataType: "json",
            success: function (response) {
                $('.now').text(response['result'][0].category)
                

            }
        });
    }
    //渲染列表
    list(val,1)
    function list(id,pageid){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist",
            data: {
                categoryid:id,
                pageid:pageid
            },
            dataType: "json",
            success: function (response) {

                console.log(response);
                $('.list_ul').html(template('productlist',response))
                totalpage = Math.ceil(response.totalCount/response.pagesize)
                //渲染分页
                var arr = []
                for(var i = 1;i <= totalpage;i++){
                    arr.push(i)
                }
                console.log(arr);
                $('.page_ul').html(template('pageout',{arr:arr,total:totalpage}))
                //页码随页面改变
                $('.md_right').text(totalpage)
                $('.md_left').text(pageid)
            }
        });
    }

/////////////////////分页插件top
    //点击事件
    $('.page_up').on('click',function(){
        if(pageid >=2 ){
            pageid --
            console.log(pageid);
            list(val,pageid)
        }
    })
    $('.page_down').on('click',function(){
        
        if(pageid < totalpage ){
            pageid ++
            console.log(pageid);
            list(val,pageid)
        }
    })
    //分页事件
    $('.page_ul').on('click','li',function(){
        console.log($(this).data('id'));
        
        list(val,$(this).data('id'))
        $('.page_middle').removeClass('current')
        
    })
    $('.down').on('click',function(){
        $('.page_middle').toggleClass('current')
    })
/////////////////////////分页插件down





    //点击跳转
    $('.list_ul').on('click','li',function(){
        console.log($(this).data('id'));
        var productId = $(this).data('id')
        location.href = 'bijia.html?key=' + productId
    })






})