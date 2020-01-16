class mess {
    constructor(data) {
        this.data = data
        this.root = null
    }
    init(){
        this.ui()
    }
    ui(){
        this.root=document.createElement("div")
        let html=this.data.map(t=>{
            return `
            <div class="bbrw">
            <ul class=${t.id}>
            <li><input type="checkbox" name="" id="" class="input"></li>
              <li><img src=${t.src} alt=""></li>
            <li><p class="p1">${t.title}</p>
             <p class="p2">规格：0.28g*30片</p>
             </li>
            <li >¥<span id="eee">${t.price}</span></li>
           <li> <input id="reduce"  style="margin-left: -75px; margin-top: 6px;" type="button" value="-"><input type="text" value="1" id="nun"   style="float: left;margin-left: 50px;width: 48px; height: 25px;"  min="0"> <input id="increase" type="button" value="+"  style="margin-left: 53px;    margin-top: 6px;"></li>
            <li>省<span style="color: red;">0</span>元</li>
           <li style="color: red;">¥<span style="color: red;" id="ddee">${t.price}</span></li>
           <li><a id="shan">删除</a></li>
         </ul>
         </div>
            `
        }).join("")
       
$(".bbrw_l").html(html)
    }
}