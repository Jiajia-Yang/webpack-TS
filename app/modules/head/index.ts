import App from '../../public/app'
import {Button} from '../../components/index'
import { headTpl, headTplStyle } from './head.js'

class Head extends App {
    constructor() {
        super()
        console.log(this)
        this.init()
    }
    init() {
       /* var button = Button({
            selecter: ".btn-wrap",
            $: this.$,
            clickFn: () => {
                alert("tttt")
            },
            name: "我是按钮啊啊"
        })
        this.$("#pageOne").append(button.tpl)
        // this.$("#pageOne").append('<span class="icon iconfont icon-createtask_fill"></span>')
        button.init()*/
        
    }
}

export default Head