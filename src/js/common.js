(function(){
    $(function(){
        $(document).on("submit","form[data-roler='ajax-form']",function(event){
            event.preventDefault();
            var $this=$(this);
            var loadIndex = layer.msg('正在提交，请稍候…', {icon: 16, time: 0, shade: [0.3, "#000"]});
            var formAction=$.trim($this.attr("action"));
            var formMethod=$this.attr("method");
            var formData=$this.serialize();
            var formEnctye=$this.attr("enctype") ? $this.attr("enctype") : "application/x-www-form-urlencoded";

            

            console.log('%cajax submit start!', ';color:#333333');
            console.log('action:' + formAction);
            console.log('method:' + formMethod);
            console.log('data:' + formData);
            console.log('enctye:' + formEnctye);

            $.ajax({
                url:formAction,
                dataType:"json",
                type:formMethod,
                data:formData,
                contentType:formEnctye,
                beforeSend:function(XHR){
                    if(XHR.status !=200){
                        layer.msg("网络出错啦！");
                    }
                },
                success:function(responeData){

                }

            })
        

        })
    })
})();


