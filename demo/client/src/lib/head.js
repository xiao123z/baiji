$(function () {
    $.getJSON("http://127.0.0.1/demo/server/data.json", (data) => {
        // new mess(data).init()
        let n = new mess(data)
        n.init()
    
    })
    class mess {
        constructor(data) {
            this.data = data
            this.root = null
        }
        init() {
            this.ui()
            this.mover()
        }
        ui() {
            this.root = document.createElement("div")
            this.root.className = "bb"
            let data = this.data.map((item, index) => {
               let cc= item.map((ele, i) => {
                    let tcon = ele.tcon.map((e, j) => {
                        return `<li><a href="">${e}</a></li>`
                    }).join("")
                   return `
                    <div class="nvn">
                    <div class="box1"><a href="">${ele.ttit}</a></div>
                        <div class="box2">
                          <ul>${tcon}</ul>
                        </div>  </div>                 
                    `
                }).join("");
                return `<div class="n1" >${cc} </div>`
            }).join("")

            this.root = $(` <div class="bo">${data}</div>`)
            $(".item_list").append(this.root);
            var ee = document.querySelector(".nvn").children
            var bb = ee[0]
            var cc = bb.querySelector("a")       
            cc.setAttribute("href","../html/list.html")
        }
        mover() {
            // $(".bo .n1").hide()
            // li:hover
            $(".section li").hover(function () {
                $(".bo .n1").hide()
                // $(this).addClass("active").siblings().removeClass("active")
                $(".bo .n1").eq($(this).index()).show().siblings().hide()
            })
            $(".sph_navigation .item_list").mouseleave(function () {
                $(".bo .n1").hide()
            })
            
            $(".item_nav").mouseenter(function () {
                $(".item_list").show()
            })
            $(".item_nav").mouseleave(function () {
                $(".item_list").hide()
            })
            $(".bv").mouseenter(function () {
                $(".bv .secondnav").show()
            })
            $(".bv").mouseleave(function () {
                $(".bv .secondnav").hide()
            })
        }
    }
 
})


