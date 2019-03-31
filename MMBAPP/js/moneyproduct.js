$(function(){
    var search = location.search
    search = decodeURI(search)
    var val =Number(search.split('=')[1]) 
    console.log(val);

    render(val)
    function render(productid){
        $.ajax({
            url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
            data: {
                productid:productid
            },
            dataType: "json",
            success: function (response) {
                console.log(response);
                $('.mm_main').html(template('moneytail',response))
            }
        });
    }
})