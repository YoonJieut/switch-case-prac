// console.log('hi');

let some = 10
// console.log(some);
if ( some === 9 ){
  console.log('9')
} else if ( some === 11) {
  console.log('11')
} else {
  console.log('ok')
} // ok

if ( some === 9 ){
  console.log('9???')
} else if ( some === 10) {
  console.log('10!!!')
} else {
  console.log('11???')
} // 10 !!!

const drink = ["AAAA","b","C"]

if (drink[0]==="b") {
  if (drink[0]==="AAAA"){
    console.log("if in if true")
  }
  console.log('if true')
} else if (drink[0]==="AAAA"){
  console.log('else if true')
} else {
  console.log('else')
} 
// else if true 
// -> if 문 중첩은 and 와 같다.
// -> else if 는 or와 같다.

switch(drink[0]){
  case "b" :
    console.log("case1")
    break;

  case "c" :
    console.log("case2")
    break;

  case "AAAA" :
    console.log("case3")
    // break;

  default :
    console.log('defalut 도착!')
}
// case의 뒤는 변수가 들어갈 수 없다.
// defalut는 선택사항이다. (else와 같음)
// break가 없으면 defalut까지 도달한다.

