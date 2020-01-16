$(() => {

    $(".mem_logtab li").click(function() {
    
        $(this).addClass("cur").siblings().removeClass("cur");
      
        $(".reg-r").eq($(this).index()).addClass("active").siblings().removeClass("active");
    })

    $("#ptLogin2").click(function () {

        let username = $.trim($("#userName2").val());
        let password = $.trim($("#password1").val());
        if (username.length == 0) {
            alert("请输入用户名");
            return;
        }

        if (password.length == 0) {
            alert("请输入密码");
            return;
        }
        let data = {
            username,
            password: md5(password).substr(0, 10)
        };

        /* .... */
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/demo/server/login.php",
            data,
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    window.location.href = "./baiji.html";
                } else {
                    alert(response.msg);
                }
            }
        });

    })
})