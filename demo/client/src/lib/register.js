
$(() => {

  
    $("#usernameID").blur(function() {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z]{2,6}$/.test(val)) {
            $(this).next().text("");
           
        } else {
            $(this).next().text("用户名不规范！");
            return
        }
    })

    /* 手机号码 */
    $("#phone").blur(function() {
        let val = $.trim($(this).val());
        if (/^1[3-9]\d{9}$/.test(val)) {
            $(this).next().text("");
          
        } else {
            $(this).next().text("手机号码不规范！");
           return
        }
    })

    /* 密码 */
    $("#passwordA").blur(function() {
        let val = $.trim($(this).val());
        if (/^[a-zA-Z0-9]{3,6}$/.test(val)) {
            $(this).next().text("");
           
        } else {
            $(this).next().text("密码不规范！");
           return
        }
    })

    /* 确认密码 */
    $("#passwordB").blur(function() {
        let val = $.trim($(this).val());
        if ($.trim($("#passwordA").val()) == val) {
            $(this).next().text("");
            
        } else {
            $(this).next().text("两次输入的密码不一致！！！");
           return
        }
    })

  
    let imgCodeTarget;
    let captcha = new Captcha({ lineNum: 10, dotNum: 3, fontSize: 40, length: 4, content: "012345432424542" });
    captcha.draw(document.querySelector("#captcha"), r => {
        imgCodeTarget = r;

        $("#yzm").trigger("blur");
    });


    /* 图形验证码校验 */
    $("#yzm").blur(function() {
        let val = $.trim($(this).val());
        if (imgCodeTarget == val) {
        
            $("#bb").text("");
        } else {
            $("#bb").text("输入的验证码不正确！！！");
            return
        }
    })


    /* 注册按钮的点击事件 */
    $("#register").click(function() {
      let user= $("#username").val()
      let phone= $("#phone").val()
      let yzm= $("#yzm").val()
      let passwordB= $("#passwordB").val()
      let passwordA= $("#passwordA").val()
        if (!$("#protocol").is(":checked")) {
            alert("请阅读并同意用户协议！");
            return;
             }
        $("#username,#phone,#yzm,#passwordB,#passwordA").trigger("blur");
        if (user=="") {
            alert("账号不能为空")
            return false
        }else if(phone==""){
            alert("手机不能为空")
            return false
        }else if(yzm==""){
            alert("验证码不能为空")
            return false
        }else if(passwordB==""){
            alert("密码不能为空")
            return false
        }else if(passwordA==""){
            alert("密码不能为空")
            return false
        }
           
        let data = {
            username: $.trim($("#usernameID").val()),
            password: md5($.trim($("#passwordA").val())).substr(0, 10),
            phone: $.trim($("#phone").val())
        }

        $.ajax({
            data,
            type: "post",
            dataType: "json",
            url: "http://127.0.0.1/demo/server/register.php",
            success(response) {
                if (response.status == "success") {
                    alert(response.msg);
                    window.location.href = "./login.html";
                } else {
                    alert(response.msg);
                }
            }
        })

    
        
       
        

   
    })
})