

export default class Additioner {
    result : number = 0;
    constructor(){

    }

    inc(value: number) {
        this.result+=value;
    }
    toString(){
        return this.result;
    }
    getResult(){
        return this.result;
    }
}
