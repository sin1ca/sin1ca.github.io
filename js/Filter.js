const list = document.querySelector('.sec-2__ulButtons')
const items = document.querySelectorAll('.cards__card')

function filter(){
    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id


        switch(targetId) {
            case 'all':
                getItems('cards__card')
                break
            case 'scales':
                getItems(targetId)
                break
            case 'hummer':
                getItems(targetId)
                break
            case 'sheet':
                getItems(targetId)
                break
        }
    })
}
filter()

function getItems(className) {
    items.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}