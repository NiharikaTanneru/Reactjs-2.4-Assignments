
let obj={
    anotherProp:"string",
    anotherObj:{
      anotherAnotherObj:{
        a:5
      }
    }
}


// obj.anotherObj.anotherAnotherObj.a=6

console.log(obj);
let obj2={
    ...obj,
    anotherObj:{
        ...obj.anotherObj,
        anotherAnotherObj:{
            ...obj.anotherAnotherObj,
            a:6
        }
    }
}

console.log(obj)
// // console.log(obj2)

const obj3= immer.produce(obj,draft=>{
    draft.anotherObj.anotherAnotherObj.a=6
    draft.anotherObj.anotherAnotherObj.modernProp="hello-world"
})
console.log(obj3);