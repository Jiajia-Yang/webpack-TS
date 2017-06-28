// matchPath 执行后返回接口
export interface matchPathReturn {
	path:string;
	url:string;
	isExact:boolean;
	params:object;
}

export interface Btn {
	selecter: string;
	name?:string;
	clickFn:object;
}
