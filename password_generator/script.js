const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower='abcdefghijklmnopqrstuvwxyz'
const nums='0123456789'
const syms='@#$'

function generate(){
    const parts=[]
    if(document.getElementById("upper").checked){
        parts.push(upper)
    }
    if(document.getElementById("lower").checked){
        parts.push(lower)
    }
    if(document.getElementById("numbers").checked){
        parts.push(nums)
    }
    if(document.getElementById("symbols").checked){
        parts.push(syms)
    }
    const length=parseInt(document.getElementById('length').value);
const charset=parts.join('');
let out='';

    function randomIndex(max){
    return Math.floor(Math.random()*max);
}

for(let i=0;i<length;i++){
    out+=charset[randomIndex(charset.length)];
}
document.getElementById("output").value=out;
    
}
document.getElementById("generate").addEventListener('click',generate)

document.getElementById("clear").addEventListener('click',()=>{
    document.getElementById("output").value='';
})
