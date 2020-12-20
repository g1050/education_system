var realm_name = 'http://localhost:8080/api';
var token = layui.data('table').token
$.ajaxSetup({ //发送请求前触发
    complete: function (xhr) {
        if (xhr.responseJSON.code != 0) {
            console.log("没有登录！")
            layer.msg("没有登录！")
            // location.href="login.html"
        }else{
            console.log("已经登录！")
        }
    },
    beforeSend: function (xhr) { //可以设置自定义标头
        console.log("ajax beforesend token:", token)
        xhr.setRequestHeader('access_token', token);
    }
})
