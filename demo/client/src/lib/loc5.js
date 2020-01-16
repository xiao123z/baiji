class act {
    constructor(data) {
        this.data = data
        this.root = null
        this.index = 0
    }
    init() {
        this.ui()
        this.click()
    }
    ui() {
        this.root = document.createElement("div")
        this.root.className = "lc_t"
        let html = this.data.map((ele, index) => {
            let hh = ele.left.map(e => {
                return `<li><img src=${e}></li>`
            }).join("")
            let xx = ele.right.map((l, j) => {
                return `<a class=${j==0?"pp":""} >${l}</a>`
            }).join("")
            let kk = ele.pic.map((d, k) => {
                return `<img src=${d} class=${k==0?"vp":""}>`
            }).join("")
            return `
            <div class="lc_t"><h3>${ele.name}</h3></div>
         <div class="foo">
             <div class="foot_l">
<ul>
    ${hh}
</ul>
<div class="foot_l_b"><p>下一位执业药师</p></div>
             </div>
             <div class="foot_r">
                <div class="foot_r_t"><h4>${ele.name}</h4>
                <div class="foot_r_t_r">
                   ${xx}
                </div>
                </div>
                <div class="foot_r_b">
                ${kk}
                </div>
             </div>
         </div>
            
            `
        }).join("")
        this.root.innerHTML = html
        $(".ddc").append(this.root)
    }
    click() {
        let d = this.index
        $(".foot_l_b p").click(function () {
            d++
            if (d >= 13) d = 0
            $(".foot_l").children().stop().animate({
                "left": -d * 360
            }, 500)
        })
        $(".foot_r_t_r a").click(function () {     
            $(this).addClass("pp").siblings().removeClass("pp")
            $(".foot_r_b img").eq($(this).index()).addClass("vp").siblings().removeClass("vp")
        })
    }
}