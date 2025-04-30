function homeButton(){
    const url = document.createElement('a')
    url.href = "./index2.html"
    window.location.assign(url)
}
let button
let list
function buttonNav(){
    const divNav= document.getElementById('list-button')
    const div = document.createElement('div')
    const button= document.createElement('button')
    const icon= document.createElement('i')
    icon.classList.add("bi", "bi-list")
    icon.style.fontSize= '30px'
    button.type = 'button';
    button.appendChild(icon)
    button.classList.add('btn', 'btn-secondary', 'positioned-button', 'd-flex', 'justify-content-center', 'align-items-center')
    button.style.width = '55px'
    div.appendChild(button)
    divNav.appendChild(div)
    const list = document.createElement('ul');
    list.style.opacity = '0'
    list.style.visibility = 'hidden' 
    list.id='animation-id'
    
    
    const menuItems = [
        { text: 'Início', link: '#img-ms'},
        { text: 'Growcast [episódios]', link: '#grow-cast' },
        { text: 'Webinar em Flutter', link: '#flutter' },
        { text: 'Jornada UX/UI', link: '#ux' },
        { text: 'Diversos', link: '#diversos'}
    ];

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = item.link;
        anchor.textContent = item.text
        listItem.appendChild(anchor)
        list.appendChild(listItem)
        
    });
    
    const divList = document.createElement('div')
    divList.style.position = 'absolute'
    divList.appendChild(list)
    divList.id= 'div-animation-list'
    divList.classList.add('list-position')
    
    divNav.appendChild(divList)
    
   
    button.addEventListener('click', function() {
        toggleList(list, button)
    });
    
}

function logoMs(){
    const divHtml = document.getElementById('img-ms')
    
    const img = document.createElement('img')
    const anchor = document.createElement('a')
    anchor.href = "./index.html" 
    img.src = "./assets/image/logo-growflix.svg" 
    img.alt = "logo"
    img.style.height= '50px'
    img.style.width = '110px'
    
    img.classList.add('positioned-img')
    anchor.appendChild(img)
    divHtml.appendChild(anchor)
}
logoMs()

function toggleList(list, button) {
    if (list.style.opacity === '0' && list.style.visibility === 'hidden' && list.classList.contains('to-appear')===false) {
        
        document.body.classList.add('zoomed')
        document.body.classList.remove('reverse')
        
        list.classList.add('to-appear')  
        list.classList.remove('to-disappear')  
        list.style.visibility = 'visible'  
        list.style.opacity = '1'
        list.classList.add('color-initial-item')  

        button.style.border = '4px solid grey'
        button.style.color = 'grey'
        
    }
    else if(list.classList.contains('to-appear')){
        document.body.classList.add('reverse')
        document.body.classList.remove('zoomed')
        list.classList.remove('to-appear')
        list.classList.add('to-disappear')
        button.style.border = '0.3px solid grey'
           
    }
    else if(list.classList.contains('to-disappear')){
        list.style.opacity = '0' 
        list.style.visibility = 'hidden'  
        
        button.style.border = '0.3px solid grey'
        if (list.style.opacity === '0' && list.style.visibility === 'hidden' && list.classList.contains('to-appear')===false) {
            document.body.classList.add('zoomed')
            document.body.classList.remove('reverse')
            
            list.classList.add('to-appear')  
            list.classList.remove('to-disappear') 
            list.style.visibility = 'visible'  
            list.style.opacity = '1'  
    
            button.style.border = '4px solid grey'
            button.style.color = 'grey'
            
        }
    }
    
}
buttonNav()

   