let v=[4,8,1,8];
let w=[10,2,0,4];
let conteur=0
let pss=[];
function dot_product () {for (let i = 0; i < v.length; i++) {
    let ps=v[i]*w[i]
    let psp="v"+[i]+" X w"+[i]+" = "+ ps;
    pss.push(ps);
    conteur=ps+conteur
    console.log(psp)
}}
console.log( dot_product());
console.log("total : "+conteur)
for (let i = 0; i < pss.length; i++) {
    
    if (pss[i]===16) { 
        console.log(true)
    }else{
        console.log(false)
    }
}