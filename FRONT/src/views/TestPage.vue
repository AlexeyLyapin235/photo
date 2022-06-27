<template><div>Hello World</div></template>

<script>
export default {}


const hello = {
  hi: "Добро пожаловать!",
  init(){
      console.log(`${this.hi} дорогой ${this.owner}`);
  }
};


// creational pattern prototype
 const helloUser = Object.create(hello,{
owner:{
value: "Aleksey"
}
})


console.log(helloUser.init())
console.log(helloUser.__proto__ == hello);
</script>
