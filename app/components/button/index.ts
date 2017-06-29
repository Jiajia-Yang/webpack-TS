declare var jQuery: (string) => any;
import { btnTpl,btnStyle } from './button.js'

class Button{
    selecter: string;
	name?:string;
	clickFn:object;
    constructor(labelledObj) {
        this.clickFn = labelledObj.clickFn;
        this.name = labelledObj.name;
        this.selecter = labelledObj.selecter;
        this.init()
    }
    
    init() {
        jQuery(this.selecter).append(btnTpl)
        jQuery(this.selecter).find(".btn-Wrap").html(this.name).click(this.clickFn)
    }
    
}

export default Button


