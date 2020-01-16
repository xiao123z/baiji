class mes{
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
        this.root.className = "for"
        let html = this.data.map(ele => {
            let ht = ele.ti.map(el => {
                return `<div class="c_c"><img src=${el}></div>`
            }).join("")
            let h = ele.tyle.map((e,i )=> {
                return `<a class=${i==0?"acc":""}>${e}</a>`
            }).join("")
            let p = ele.pic.map((q,j )=> {
                return `<img src=${q} class=${j==0?"xs":""} >`
            }).join("")
            return `<div class="t"><img src=${ele.itt} ></div>
            <div class="c">${ht}</div><div class="b"><div class="b_t">${h}</div><div class="pick">${p}</div> 
            </div>
             `
        }).join("")
        this.root.innerHTML = html
        $(".dibu").append(this.root)
    }

    click() { 
        $(".b_t").on("click", "a", function () { 
            $(this).addClass("acc").siblings().removeClass("acc")
    $(".pick img").eq($(this).index()).addClass("xs").siblings().removeClass("xs")
        })
    }

        
}