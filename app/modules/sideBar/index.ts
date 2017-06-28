declare var jQuery: (string) => any;
import App from '../../public/app'
import { Button } from '../../components/index'


class SideBar extends App {
    constructor() {
        super()
        new Button({
            selecter: ".btn-wrap",
            clickFn: () => {
                alert("tttt")
            },
            name: "我是按钮啊啊"
        })
        new Button({
            selecter: ".btn-wrap",
            clickFn: () => {
                alert("tttt")
            },
            name: "我是按钮啊啊"
        })
        //this.clickFn()
    }
    clickFn() {
        /*
        var button = Button({
            selecter: ".btn-wrap",
            clickFn: () => {
                alert("tttt")
            },
            name: "我是按钮啊啊"
        })
        */
        jQuery("#pageOne").append("ssdfef")
        // this.$("#pageOne").append('<span class="icon iconfont icon-createtask_fill"></span>')
        //button.init()
        
    }
}

export default SideBar