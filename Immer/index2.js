const baseState = [
    {
        title: "Learn TypeScript",
        done: true
    },
    {
        title: "Try Immer",
        done: false
    }
]

const nextState = baseState.slice() // shallow clone the array
nextState[1] = {
    ...nextState[1], 
    done: true // 
}

nextState.push({title: "Tweet about it"})

console.log(baseState);
console.log(nextState);


const nextState1 = immer.produce(baseState, draft => {
    draft[1].done = true
    draft.push({title: "Tweet about it"})
})

console.log(nextState1)