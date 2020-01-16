class me {
    constructor(data) {
        this.data = data
        this.root = null
        this.index = 0
        this.bg = null
        this.bgc = null
        this.bgd = null
        this.nac = null
        this.ttt=null
    }
    init() {
        this.ui()
        this.click()
        this.clickSlide()
    }
    ui() {
        this.root = document.createElement("div")
        this.root.className = "bbb"
        let data = this.data.map((ele, index) => {
            let tab = ele.tabs.map((e, ind) => {
                return `<li class="${ind==0?"sb":""}">${e}</li>`
            }).join("");

            let list = ele.list.map((it, i) => {
                let em = it.map(em => {
                    return `
                    <div> <p style="font-size: 14px;">${em.proname}</p>
                 <p style="font-size: 18px;color: #ff5c4d;margin-top:5px">${em.propric}</p>
                <img src=${em.img}></div>
                   
                `
                }).join("")
                return `<div class="bigg ${i == 0 ? "yc" : ""}">${em}</div>`

            }).join("")
            return `<div class="qgz">
                 <div class="qg" style="color:${ele.color}">${ele.name}</div>
                 <div>
                    <ul class="nac">${tab}</ul>                 
                 </div>
                 <div class="fo">${list}<div class="Slide"><span class="z">&lt;</span><span class="y">&gt;</span></div></div>
            </div>`
        }).join("")


        let ss = $(`<div class="ll"><img src="../image/5.png" alt=""> </div>`)
        $(".lc").before(ss)
        this.root.innerHTML = data;
        $(".qgh").append(this.root);
        this.bgc = this.root.querySelector(".bigg")
        this.bgd = this.root.querySelectorAll(".bigg div")[0]
        this.bgd = this.bgd.offsetWidth
        this.nac = this.root.querySelector(".nac")
        console.log(this.bgd);
        // console.log(this.bgf[0].offsetWidth);
        this.bg = this.root.querySelector(".bigg").children
        this.bg = this.bg.length;
        // console.log(this.bg);


    }
    click() {
       
        let ttt = this.index
        let bg = this.root.querySelector(".bigg").children
        let aa = bg.length;
        let bgd = this.root.querySelectorAll(".bigg div")[0]
        let cc = bgd.offsetWidth
        $(".Slide").on("click", "span", function () {
            // let index = $(this).index()
            if (this.className == "z") {
                ttt--
                if (ttt <= - 1) {
                    ttt = aa -1
                }
                $(this).parent().parent().children(".yc").css({
                    "left": -ttt * cc
                })
            } else if (this.className == "y") {
                ttt++
                if (ttt >= aa - 1) {
                    ttt = 0
                }
                this.ttt = -this.index * this.bgd + "px"
                $(this).parent().parent().children(".yc").css({
                    "left": -ttt * cc
                })

            }

        })
    }
    // z() {
    //     this.index--
    //     if (this.index <= -1) {
    //         this.index = this.bg - 1
    //     }
    //     this.bgc.style.left = -this.index * this.bgd + "px"
    // }
    // y() {
    //     this.index++
    //     if (this.index >= this.bg - 1) {
    //         this.index = 0
    //     }
    //     this.bgc.style.left = -this.index * this.bgd + "px"
    // }

    clickSlide() {
        $(".nac").on("click", "li", function () {
            let index = $(this).index()
            $(this).addClass("sb").siblings().removeClass("sb")
            $(this).parent().parent().parent().children(".fo").children().eq(index).addClass("yc").siblings().removeClass("yc")
        })

    }
}