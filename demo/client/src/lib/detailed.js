$(() => { 
      let cont = window.location.search.slice(4)
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/demo/server/details.php",
        data: `cont=${cont}`,
        dataType: "json",
        success: function (response) {
            console.log(response);
            
           $(".img img").attr("src", `${response[0].src}`);
            $(".max-img img").attr("src", `${response[0].src}`);
            $(".img-list li").eq(0).find("img").attr("src", `${response[0].src}`);
            $("#dd").text(`${response[0].title}`);
            $("#sd").text(`${response[0].sta}`);
            $("#err").text(`${response[0].price}`);
            $(".flolef #rrt").text(`${response[0].price}`);
            $(".zuo h1 span").text(`${response[0].title}`);
            $(".asd").text(`${response[0].title}`);

            $("#fre").click(function () { 
                $.ajax({
                    type: "get",
                    url: "http://127.0.0.1/demo/server/car.php",
                    data: response[0],
                    dataType: "json",
                    success: function (data) {
                       alert(data.msg)
                       window.location.href="../html/car.html"
                    }
                });
            })
        }
    })
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/demo/server/zkyy.json",
        dataType: "json",
        success: function (response) {
            renderUI(response)
            render(response)
        }
    });
    function render(data) { 
        let html = data.map((item) => {
            let hh = item.lsnr.map((e,i )=> {
               return `<li class=${i==0?"gf":""}>${e}</li>` 
            }).join("")
return `<ul>${hh}</ul>`

        }).join("")
        $(".nr").html(html)
    }
    function renderUI(_data, ) {
        let html = _data.map((item) => {
            let cc = item.lsnr.map((e,i) => {
            return  ` <li class=${i==0?"csu":""}>${e}</li>`
            }).join("")
            return `
            <div class="allstore">康德乐大药房全国分店：</div>
            <ul>
          ${cc}
            </ul>
            <img src="https://imgcdn.baiji.com.cn//data/store/gzyx1-02.jpg" alt="">
            <p>020-87613558，020-87303808（8:00-20:00，每天） </p>
              <p>广州市越秀区先烈南路9号101房</p> 
           `
        }).join("");
        $(".youm").html(html);
        $(".youm").on("click", "li", function () { 
            $(this).addClass("csu").siblings().removeClass("csu")
        })
        $(".nr").on("click", "li", function () { 
            $(this).addClass("gf").siblings().removeClass("gf")
            $(this).text()
            console.log($(this).text());
            $(".chocity1223").text($(this).text())
        })
    }

    $(".vv").mouseenter(function () { 
        $(".nr").show()
    })
    $(".vv").mouseleave(function () { 

        $(".nr").hide()
    })
    $(".img-list").on("mouseenter", "img", function () {
        let ind = $(this).attr("src");
        
        $(".img img").attr("src", ind)
        $(".max-img img").attr("src", ind)

    })
    $(".img-list").on("mouseenter", "li", function () {
        $(this).addClass("asd").siblings().removeClass("asd")

    })
    
    $("input[name=reduce]").click(function () { 
        $(this).next("input[type=text]")[0].value--;         
        if($(this).next("input[type=text]")[0].value<1){
            $(this).next("input[type=text]")[0].value=1;     
        }
        var pice = $("#err").text()
        console.log(pice);
      
        var a = Number($("#rrt").html());     //获取商品单价
        var b =$(this).next("input[type=text]")[0].value; 
        if (a ==pice) {
            alert("数量最少只能为一")
            return
        }
      
        
        
        $("#rrt").html(a - pice * 1);
     
        
    });
   
    $("input[name=increase]").click(function () {
        var pice = $("#err").text()
        $(this).prev("input[type=text]")[0].value++; 
      
        var a = Number($("#rrt").html());      
        var b =$(this).prev("input[type=text]")[0].value; 
        $("#rrt").html( a+pice*1);
    });
        
})
