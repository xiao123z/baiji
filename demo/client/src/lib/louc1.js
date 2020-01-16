class messg{
    constructor(data) {
        this.data = data
        this.root = null
    }
    init() {
        this.ui()
    }
    ui() {
        this.root = document.createElement("div") 
        this.root.className="lcd"
        let html = this.data.map((ele,index) => { 
            let html2 = ele.xia.map(e => { 
                return `<a href="">${e}</a>`
            }).join("")
            let html3 = ele.tu.map(z => { 
                return ` <li><img src=${z.img} alt="">
                <p class="pn">${z.type}</p>
                <p class="pice">${z.pice}</p>
                </li>`
            }).join("")
            return `
            <div class="lc_t"><h3>${ele.name}</h3></div>
            <div class="lc_b">
                <div class="l">
                    <div class="l_t"><img src=${ele.pi} alt=""></div>
                    <div class="l_b">
                        <div class="l_b_l">
                            <div class="l_b_l_t ${index==0?"xs":""}">
                                <div class="im"><img src=${ele.tt} alt=""></div>
                           <div class="imp"><p class="impt">${ele.z}</p><p class="impb">${ele.q}</p></div> </div>
                            <div class="l_b_l_b ${index==0?"xs":""}">
                             ${html2}</div>
                        </div>
                        <div class="l_b_l">
                            <img src=${ele.zz} alt="">
                    <p class="pn">${ele.jj}</p>
                    <p class="pice">${ele.jx}</p>
                        </div>
                    </div>
                </div>
                <ul class="r ${index==0?"xs":""}">
                  ${html3} </ul>
              
            </div>
            <div class="ll"><img src="https://imgcdn.baiji.com.cn/data/afficheimg/1576654988931030215.jpg" alt=""> </div>
            `
        }).join("")
        this.root.innerHTML = html

        $(".lc").append(this.root)
     }
}
