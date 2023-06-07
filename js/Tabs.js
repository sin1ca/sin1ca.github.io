const list_t = document.querySelector('.sec-4__ulButtonsSec4')
const items_t = document.querySelectorAll('.cards-4__card-4')
const listItems = document.querySelectorAll('.ulButtonsSec4__itemSec4')

function filter(){
    list_t.addEventListener('click', event => {
        const targetId_t = event.target.dataset.id
        const target = event.target


        listItems.forEach(listItems => listItems.classList.remove('active'))
        target.classList.add('active')



        switch(targetId_t) {
            case 'all':
                getItems_t('cards-4__card-4')
                break
            case 'ceo':
                getItems_t(targetId_t)
                break
            case 'lawyer':
                getItems_t(targetId_t)
                break
            case 'coFounder':
                getItems_t(targetId_t)
                break
        }
    })
}
filter()

function getItems_t(className) {
    items_t.forEach(item => {
        if (item.classList.contains(className)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}