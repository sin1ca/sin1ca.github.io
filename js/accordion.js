document.querySelectorAll('.accordion').forEach((elem) => {
    elem.addEventListener('click', () => {
        
        let content = elem.nextElementSibling;

        if(content.style.maxHeight) {
            document.querySelectorAll('.accordionCont').forEach((elem) => elem.style.maxHeight = null)
        } else {
            document.querySelectorAll('.accordionCont').forEach((elem) => elem.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })
})