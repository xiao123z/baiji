class mea{
    constructor(data) {
        this.data = data
        this.root = null
    }
    init() {
        this.ui()
        this.click()
    }
    ui() {
        this.root = document.createElement("div")
        this.root.className = "lcd"
        let html = this.data.map(ele => {
            let html2 = ele.to.map((el, index) => {
                return `<a class=${index==0?"cur":""}>${el}</a>`
            }).join("")
            let html3 = ele.tt.map((e, j) => {
                let hh = e.map(ec => {
                    return `
 <div class="im"><img src=${ec.img} alt=""></div>
<div class="imp"><p class="impt">${ec.q}</p><p class="impb">${ec.z}</p></div> `
                }).join("")
                return `<div class="l_b_l_t ${j==0?"xs":""}">${hh}</div>`
            }).join("")
            let html4 = ele.xia.map((v, i) => {
                let cx = v.map(u => {
                    let cc = u.pp.map((o, l) => {
                        return `<a >${o}</a>`
                    }).join("")
                    return `<div>${cc}</div>`
                }).join("")

                return `
                <div class="l_b_l_b ${i==0?"cc":""}">
            ${cx}
                </div>
                  `
            }).join("")
            let html5 = ele.zz.map((q, w) => {
                let ad = q.map((m, r) => {

                    return ` <img src=${m.zx} alt="">
                           <p class="pn">${m.jj}</p>
                        <p class="pice">${m.jx}</p>`
                }).join("")
                return ` <div class="gg ${w==0?"ccv":""}">${ad}</div>`
            }).join("")
            let html6 = ele.tu.map((o, m) => {
                let qw = o.map((p, t) => {
                    return `
                        <li>
                        <img src=${p.img} alt="">
                        <p class="pn">${p.type}</p>
                        <p class="pice">${p.pice}</p>
                        </li>
                        `
                }).join("")
                return `
                <ul class="r ${m==0?"rb":""}">${qw}</ul>
                `
            }).join("")
            return `
            <div class="lc_t"><h3>${ele.name}</h3>
            <div class="cl_t_r">
              ${html2}
            </div>
             </div>
             <div class="lc_b">
                 <div class="l">
                     <div class="l_t"><img src=${ele.img} alt=""></div>
                     <div class="l_b">
                         <div class="l_b_l">
                             ${html3}   
                             ${html4}
                         </div>
                     <div class="l_b_r">${html5}</div>  
                     </div>
                 </div>
                ${html6}
             </div> 
             <div class="ll"><img src="https://imgcdn.baiji.com.cn/data/afficheimg/1576137454475528114.jpg" alt=""> </div>
            `
        }).join("")

        this.root.innerHTML = html
        $(".lc").append(this.root)
    }
    click() {
        $(".cl_t_r").on("click", "a", function () {
            $(this).addClass("cur").siblings().removeClass("cur")
            $(this).parent().parent().parent().children(".lc_b").children(".l").children(".l_b").children(".l_b_l").children(".l_b_l_t").eq($(this).index()).addClass("xs").siblings().removeClass("xs")
            $(this).parent().parent().parent().children(".lc_b").children(".l").children(".l_b").children(".l_b_r").children(".gg").eq($(this).index()).addClass("ccv").siblings().removeClass("ccv")
            $(this).parent().parent().parent().children(".lc_b").children(".l").children(".l_b").children(".l_b_l").children(".l_b_l_b").eq($(this).index()).addClass("cc").siblings().removeClass("cc")
            //  $(".lc_b ul").eq($(this).index()+1).addClass("rb").siblings().removeClass("rb")
           $(this).parent().parent().parent().children(".lc_b").children("ul").eq($(this).index()+1).addClass("rb").siblings().removeClass("rb");
           
            
                // .children(".fo")
        })
    }
}