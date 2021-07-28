export class suma{
    private result: number = 0;
    constructor(a: number, b: number){
        this.result = a + b;
    };
    public show(){
        return this.result;
    };
};