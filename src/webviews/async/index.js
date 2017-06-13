let a = '111';
function promise(){
    return new Promise((reslove, reject) => {
       setTimeout(() => {
            reslove();
        },1000); 
    })
}

async function name() {
    console.log(a);
    let b = await promise().then(() =>{
        return a = '333';
    });
    console.log(b);
}

name();