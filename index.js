let title = document.querySelector('.text')

let texts = document.querySelectorAll('.text')

console.log(title)

console.log(texts)

let body = document.getElementsByClassName('body-container')
console.log(body)

// body[0].style.backgroundColor = 'blue'
// body[1].style.backgroundColor = 'grey'


for (let div of body){
    console.log(div)
    div.style.backgroundColor = 'green'
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//         0  1  2  3
for (let item of arr){
    console.log(item)
}

let p = document.createElement('p')
p.textContent = 'This is a p tag'
p.style.color = 'white'
console.log(p)

body[1].append(p)


let isClicked = false
const handleClick = () => {
    isClicked = !isClicked
    console.log(isClicked)
    console.log('this button has been clicked')
    //alert('You clicked this button')
    if(isClicked === true){
        document.querySelector('html').className = 'dark'
    } else{
        document.querySelector('html').className = 'light'
    }

}

const handleMouseOver = () => {
    console.log('Mouse entered!')
    document.querySelector('#square').style.backgroundColor = 'blue'
}

const handleMouseLeave = () =>{
    document.querySelector('#square').style.backgroundColor = 'brown'
}

const handleMouseClick = () => {
    console.log('Mouse clicked')
    document.querySelector('#square').style.backgroundColor = 'yellow'
}

let color = ''
const handleInput = (event) => {
    color = event.target.value
    console.log(color)
}

function handleSubmit(event){
    event.preventDefault()
    document.querySelector('#square').style.backgroundColor = color
}