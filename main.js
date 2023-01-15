// const countEl = document.getElementById("count-el")
// let count =0
// const saveEl = document.getElementById("save-el")
// function increment(){
//     count =count+1
//     countEl.innerText= count

// }

// function save(){
//     let countStr =" " +count + " - "
    
//     saveEl.innerText += countStr
    
//     count.style.color = 'red' //pending..

// }


const incrementBtn = document.querySelector('#increment-btn')
const saveBtn = document.querySelector('#save-btn')
const saveEl = document.querySelector('#save-el')
let count = 0
incrementBtn.addEventListener('click',function(){
    count += 1
    document.querySelector('#count-el').innerText = count
    document.querySelector('#count-el').style.color = 'darkgreen'
    // console.log('clicked!')
})

saveBtn.addEventListener('click',function(){
    // console.log(count)
    saveEl.innerText += " " + count + " - "
    count=0
    document.querySelector('#count-el').innerText = count
})