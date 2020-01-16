$(() => {
    let type = "default";
    $.ajax({

        type: "get",
        url: "http://127.0.0.1/demo/server/getPage.php",
        dataType: "json",
        success: function (response) {
            let count = response.count;
            let html = "";
            for (let i = 0; i < count; i++) {
                html += ` <a href="javascript:;">${i+1}</a>`;
            }
            $(".page").html(html);

            getDataWithPage(1,type);
            
        }
    });

    function getDataWithPage(index, type) {
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/demo/server/server.php",
            data: `page=${index}&type=${type}`,
            dataType: "json",
            success: function (response) {
                renderUI(response, index)
             
            }
        });
    }
    function renderUI(_data, index) {
        let html = _data.map((item) => {
            return `
        <li>
        <span class=${item.id}></span>
        <img src=${item.src} alt="">
            <div class="pic">
       <p style="font-size: 12px;">${item.title.substr(0,10)} </p>
    <p class="pice">￥${item.price}<span style="float:right;font-size: 12px;">${item.sta}</span></p>
            <button>查看详细</button>
            <button>在线咨询</button>
            </div>
            </li>
           `
        }).join("");
        $(".center_f ul").html(html);
        $(".page").children("a").eq(index - 1).addClass("avt").siblings().removeClass("avt");
    }
    $(".page").on("click", "a", function() {
        let index = $(this).index();
        getDataWithPage(index + 1, type);
    })

    /* 排序功能 */
    $(".paixu").on("click", "a", function() {
        // console.log($(this).data("type"));
        type = $(this).data("type");
        getDataWithPage(1, type);
    })
 
        $(".center_f").on("mouseenter", "li", function () { 
console.log(222);
$(this).addClass("ascc").siblings().removeClass("ascc")
        })
        $.ajax({
            type: "get",
            url: "http://127.0.0.1/demo/server/zkyy.json",
            dataType: "json",
            success: function (response) {
                renderU(response)
                rend(response)
                console.log();
                
            }
        });
    function renderU(daa, index) {
        let html1 = daa.map((item) => {
            let hhe = item.qita.map(e => { 
                return `<a href="">${e}</a>`
            }).join("")
            let hh = item.bizong.map(t => { 
                return `<li><a href="">${t}</a></li>`
            }).join("")
            return `
            <div class="t">
            <span>其他科目：</span>
            ${hhe}
        </div>
        <div class="c">
            <p>共计<span class="pice">131</span>件<span class="pice">肝癌</span> 商品，您可以根据以下条件进行筛选。</p>
        </div>
        <div class="butt">
            <span>病　　种：</span>
            <ul>
             ${hh}
            </ul>
        </div>
        <div class="f">
            <span>病　　种：</span>
            <ul>
                <li><a href="">全部</a></li>
                <li><a href="">处方药</a></li>
                <li><a href="">非处方药</a></li>
            </ul>
        </div>
           `
        }).join("");
        $(".center_t").html(html1);
        
     
    }
    function rend(_ata, index) {
        let html = _ata.map((item) => {
            let qq = item.type.map(e => { 
                return `<div class="erji">${e}</div>`
            }).join("")
            let qqc = item.zp.map(ze => { 
                return `  <li><s></s><a>${ze}</a></li>`
            }).join("")
            let qqzc = item.lsnr.map((ze,i) => { 
                return `   <li class=${i==0?"ppf":""}>${ze}</li>`
            }).join("")
            let q = item.type1img.map(ze => { 
                return `    <li>
                <img src=${ze.img}>
                <p>${ze.p}</p>
                <p>${ze.span}</p>
                </li>`
            }).join("")
            let qqx = item.type2img.map(zew => { 
                return `    <li>
                <img src=${zew.img}>
                <p>${zew.p}</p>
                <p>${zew.span}</p>
                </li>`
            }).join("")
            let name = item.name.map(ele => { 
                return `<h2> ${ele}<div class="ddda">${qq}</div></h2>`
            }).join("")
            return `
            <div class="trr">
            <div class="crumbs"> <a href=".">首页</a> <code>&gt;</code> <a href="category-345-b0.html">肿瘤</a> <code>&gt;</code> <a href="category-346-b0.html">肝癌</a> </div>
       <div class="left">
           <div class="left_t">
              ${name}
               
           </div>
         <div class="ht">
             <ul>
              ${qqc}
             </ul>
         </div>
         <div class="ppt">
             <h2>${item.ls}</h2>
             <ul>
              ${qqzc}
             </ul>
             <div class="ppt_b">
                 <img src=${item.im} alt="">
                 <p>${item.dz}</p>
                   <p> ${item.dz2}</p>
             </div>
         </div>
         <div class="bb">
            <h2>${item.type1}</h2>
            <ul>
                ${q}
            </ul>
         </div>
         <div class="cc">
             <h2>${item.type2}</h2>
             <ul>
              ${qqx}
            </ul>
         </div>
       </div>
    </div>
           `
        }).join("");
        $(".trr").html(html)
        $(".ppt").on("click", "li", function () { 
           
            $(this).addClass("ppf").siblings().removeClass("ppf")
        })
        $(".left_t").on("click", "h2", function () { 
            console.log(222);
            $(this).children().slideToggle()
        })
        $(".center_f ul").on("click", "li", function () {
            // console.log(11);
            
            let cont = $(this).find("span").attr("class");  
                window.open(`./detailed.html?id=${cont}`)
           
        })
        // $(".ppt").children("li").eq(index - 1).addClass("ppf").siblings().removeClass("ppf");
    }

})