let size = 10;
let orderElement = 1;

const init = () => {
    // button
    const btn = document.createElement('button')
    btn.textContent = 'Dodaj 10 Elementów Listy'
    document.body.appendChild(btn)
    // ul
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    btn.addEventListener('click', createLiElements)
}

const createLiElements = () => {
    console.log('klik')
    for (let i = 0; i < 10; i++) {
        const ul = document.createElement('ul')
        document.body.appendChild(ul)
        const li = document.createElement('li')
        li.textContent = `Punkt ${orderElement}`
        li.style.fontSize = `${size}px`
        ul.appendChild(li)
        orderElement++
        size++
    }
}
init()