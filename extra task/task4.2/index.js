function add(a,b){
    if(a && b){
    return b + a;
    }else{
        return add.bind(nul, a)
    }
};
function sub(a,b){
    if(a && b){
    return b - a;
    }else{
        return sub.bind(null, a)
    }
}
    
function mul(a, b){
    if(a && b){
  return b * a;
}else{
  return mul.bind(null, a);     
}}
 
function div(a,b){
    if(a && b){
    return b / a;
    }else{
        return div.bind(null, a)
    }
}
let k = 30;
  let sub1 = sub(1); 
let c = sub1(k);
  console.log(c)