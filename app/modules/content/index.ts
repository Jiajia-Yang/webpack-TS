declare var jQuery: (string) => any;
import App from '../../public/app'
import { Button } from '../../components/index'
import { contentTpl, contentStyle } from './content.js'


class Con extends App {
    constructor() {
        super()
        this.init()
        new Button({
            selecter: ".btn1",
            clickFn: () => {
                alert("tttt")
            },
            name: "我是按钮啊啊"
        })
        new Button({
            selecter: ".btn2",
            clickFn: () => {
                alert("tdddt")
            },
            name: "我啊啊"
        })
    }
    init() {
       jQuery(".con").append(contentTpl) 
    }
}

export default Con