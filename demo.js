class abc{
    constructor(){
        this.x=null;
    }

    add(){
        if(this.x==null){
            this.x={
                a:1,b:2
            }
        }
        else{
            let xy=this.x;
            let aa={...xy};
            aa.a=100;
        }
    }

    print(){
        console.log(this.x);
    }
}

let obj=new abc();
obj.add();
obj.print();
obj.add();
obj.print();