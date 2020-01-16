
    class mess {
        constructor(data) {
            this.data = data
            this.root = null
            this.index = 0;
            this.pic = null
            this.li = null
            this.timer=null
            this.len = this.data.length
            this.slide = null
        }
        init() {
            this.ui();
            this.auto();
            this.clickSl()
            this.clickSlid()
            this.mov()
            this.clic() 
        }
        ui() {
            this.root = document.createElement("div")
            this.root.className = "box"
            let html1 = this.data.map((ele, index) => `
            <li>
                    <img src=${ele} alt="" ></li>`).join("")
            let html2 = this.data.map((ele, index) => `<li class=${index == 0 ? "sb" : "" }></li>`).join("")
            this.root.innerHTML = `<div class="demo">
    <ul class="pic"> ${html1}</ul>
<div class="clickSlide"><span class="prev">&lt;</span><span class="next">&gt;</span></div><ul class="slide">${html2}</ul>`
            $(".banner").append(this.root)
            this.pic = this.root.querySelector(".pic")
            this.li = this.root.querySelector("li")
            this.li = this.li.offsetWidth
            this.slide = this.root.querySelector(".slide")
            this.pic.style.width=this.li*this.len+"px"
        }
        auto() {
            this.timer = setInterval(() => { this.next()
            }, 1000);
        }
        mov() {
            this.root.onmouseenter = () => {
                clearInterval(this.timer)
          $(".prev").show()
          $(".next").show()
            }
            this.root.onmouseleave = () => {
                this.auto()
                $(".prev").hide()
                $(".next").hide()}
            
        }
        clickSlid() {
            Array.from(this.slide.children).forEach((ele, index) => {
                ele.onclick = () => {
                    this.index = index
                    this.pic.style.left = -this.index * this.li + "px"
                    this.clickSli()
                }
            })
        }
     
        clickSl() {
            let clickSlide = this.root.querySelector(".clickSlide")
            clickSlide.onclick = (e) => {
                let target = e.target || e.srcElement
                if (target.className == "prev") {
                    this.prev()
                    this.clickSli()
                } else if (target.className == "next") {
                    this.next()
                    this.clickSli()
                }
            }
        }
        clickSli() {
            Array.from(this.slide.children).forEach((ele, index) => {
                ele.classList.remove("sb")
            })
            this.slide.children[this.index].classList.add("sb")
        }

        prev() {
            this.index--
            if (this.index <= -1) {
                this.index = this.len - 1
            }
           
            this.pic.style.left = -this.index * this.li + "px"
            this.clickSli()
        }
        next() {
            this.index++
            if (this.index >= this.len) {
                this.index = 0
            }
            this.pic.style.left = -this.index * this.li + "px"
            this.clickSli()
        }
        clic() { 
            let prevR=document.querySelector(".prevR")
            let nextR=document.querySelector(".nextR")
            prevR.onclick = function () { 
                $(".toptt img").eq(0).show()
                $(".toptt img").eq(1).hide()
            }
            nextR.onclick = function () { 
                $(".toptt img").eq(1).show()
                $(".toptt img").eq(0).hide()
            }
        }
    }
