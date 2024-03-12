//function myf(size:string,label:string){
//    return size + label;
//}
//let shirt=myf("large"," I love typescript ")
//console.log(shirt)
//function myfu(label:string,size:string="large"){
//  return size + label;
//}
//let shirts=myfu(" I love typescript ")
//console.log(shirts)
//function myfu(label:string,size:string="Medium"){
//  return size + label;
//}
//let shirts=myfu(" I love typescript ")
//console.log(shirts)
function myfu(label, size) {
    return size + label;
}
var shirts = myfu("Any size", " I love typescript ");
console.log(shirts);
