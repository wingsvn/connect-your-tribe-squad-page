

// const toggle = document.querySelector('.person-container')
// console.log(test)

// const rotate1 = document.querySelector('.polaroid')

// const rotate2 = document.querySelector('.polaroid-back')

// toggle.addEventListener('click', function(){
//     rotate1.classList.toggle('flip1')
//     rotate2.classList.toggle('flip2')
// })

const card = document.querySelector('.polaroid')
console.log(kaartje)

card.addEventlistener("click", () => {
    card.classList.toggle("flip")
})