declare var jQuery: (string) => any;
import { btnTpl,btnStyle } from './button.js'
import { Btn } from '../interface'

/*interface Btn {
    selecter: string;
	name?:string;
	clickFn:object;
}*/
class Button implements Btn{
    constructor(labelledObj) {
        console.log(labelledObj)
        this.init()
        console.log(this.selecter)
    }
    selecter:"sdd"
    clickFn(){

    }
    init() {
        jQuery("#pageOne").append(btnTpl)
    }
    
}


export default Button