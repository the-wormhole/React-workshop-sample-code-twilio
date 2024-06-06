var func = (res) =>{
    console.log(res);
}

func("2");

var a = 2;
var obj = {
    a:1,
    b:() =>{
        console.log(this.a);
    }
}

obj.b();
