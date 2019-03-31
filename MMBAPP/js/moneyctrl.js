$(function(){
    var pageid = 1
    var totalpage
   render(pageid)
   function render(pageid){
       $.ajax({
           url: "http://127.0.0.1:9090/api/getmoneyctrl",
           data: {
            pageid:pageid
           },
           dataType: "json",
           success: function (response) {
               console.log(response);
               $('.details_ul').html(template('ctrldetail',response))
               
               //渲染分页
               totalpage =Math.ceil( response.totalCount/response.pagesize)
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
            
            render(pageid)
        }
    })
    $('.page_down').on('click',function(){
        
        if(pageid < totalpage ){
            pageid ++
            console.log(pageid);
            render(pageid)
        }
    })
    //分页事件
    $('.page_ul').on('click','li',function(){
        console.log($(this).data('id'));
        
        render($(this).data('id'))
        $('.page_middle').removeClass('current')
        
    })
    $('.down').on('click',function(){
        $('.page_middle').toggleClass('current')
    })
///////////////////////////分页插件down

//传id
    $('.details_ul').on('click','li',function(){
        console.log(111);
        
        var id = $(this).data('id');
        console.log($(this));
        console.log(id);
        location.href = 'moneyproduct.html?key=' + id
    })
   
})