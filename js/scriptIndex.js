
const movies= [
    {
        img: "https://img.youtube.com/vi/aJ-HZuLcKeA/sddefault.jpg",
        title: "Growcast #00 - conheça a GrowDev",
        link: "https://www.youtube.com/embed/aJ-HZuLcKeA",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/7OWT3lfHYvE/sddefault.jpg",
        title: "Growcast #01 - As profissões do futuro",
        link: "https://www.youtube.com/embed/7OWT3lfHYvE",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/ci1eQGPK89o/sddefault.jpg",
        title: "Growcast #02 - Como seguir a carreira internacional",
        link: "https://www.youtube.com/embed/ci1eQGPK89o",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/WM7pGG7OicQ/sddefault.jpg",
        title: "Growcast #03 - Superando os desafios da carreira de Dev",
        link: "https://www.youtube.com/embed/WM7pGG7OicQ",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/2c8VOBZ160Y/sddefault.jpg",
        title: "Growcast #04 - Agile Master: Tudo sobre a profissão!",
        link: "https://www.youtube.com/embed/2c8VOBZ160Y",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/mxnEm03cYPc/sddefault.jpg",
        title: "Growcast #05 - Como iniciar na carreira em desenvolvimento de softwares",
        link: "https://www.youtube.com/embed/mxnEm03cYPc",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/m7DyR07KrOE/sddefault.jpg",
        title: "Growcast #06 - Mulheres e inclusão na tecnologia",
        link: "https://www.youtube.com/embed/m7DyR07KrOE",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/vW8G9KPwRL0/sddefault.jpg",
        title: "Growcast #07 - Desenvolvendo profissionais na área de TI",
        link: "https://www.youtube.com/embed/vW8G9KPwRL0",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/_Ut2KqAqPyk/sddefault.jpg",
        title: "Growcast #08 - A solução que está transformando o mercado de TI no Brasil",
        link: "https://www.youtube.com/embed/_Ut2KqAqPyk",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/dfDgs0Ive2Q/sddefault.jpg",
        title: "Growcast #09 - Acompanhe com quem realamente entende, tudo sobre o mercado de trabalho no mundo da TI",
        link: "https://www.youtube.com/embed/dfDgs0Ive2Q",
        category: "growcast"
    },
    {
        img: "https://img.youtube.com/vi/WKbLXuP9S-c/sddefault.jpg",
        title: "Webnar - Recriando a interface do linkedin com flutter",
        link: "https://www.youtube.com/embed/WKbLXuP9S-c",
        category: "flutter"
    },
    {
        img: "https://img.youtube.com/vi/dJ6y1zMjVXU/sddefault.jpg",
        title: "Webnar - Recriando a interface do Instagram com Flutter",
        link: "https://www.youtube.com/embed/dJ6y1zMjVXU",
        category: "flutter"
    },
    {
        img: "https://img.youtube.com/vi/8rdJsqUjsGg/sddefault.jpg",
        title: "Webnar - Recriando a interface do Ifood com Flutter",
        link: "https://www.youtube.com/embed/8rdJsqUjsGg",
        category: "flutter"
    },
    {
        img: "https://img.youtube.com/vi/C4p_7qBsECw/sddefault.jpg",
        title: "Webnar - Recriando a interface do PicPay com Flutter",
        link: "https://www.youtube.com/embed/C4p_7qBsECw",
        category: "flutter"
    },
    {
        img: "https://img.youtube.com/vi/L1pKoMC6hWk/sddefault.jpg",
        title: "Webnar - Recriando a interface do wattsApp com Flutter",
        link: "https://www.youtube.com/embed/L1pKoMC6hWk",
        category: "flutter"
    },
    {
        img: "https://img.youtube.com/vi/FiZMowbaiJA/sddefault.jpg",
        title: "Falando sobre design, essa jornada é para todos?",
        link: "https://www.youtube.com/embed/FiZMowbaiJA",
        category: "ux"
    },
    {
        img: "https://img.youtube.com/vi/cwqDu0ZzbYE/sddefault.jpg",
        title: "A tragetoria de uma designer - GrowDev",
        link: "https://www.youtube.com/embed/cwqDu0ZzbYE",
        category: "ux"
    },
    {
        img: "https://img.youtube.com/vi/ZMZjQ9aRuIY/sddefault.jpg",
        title: "Oportunidades de estudar um programa de formação pagando pós formado",
        link: "https://www.youtube.com/embed/ZMZjQ9aRuIY",
        category: "ux"
    },
    {
        img: "https://img.youtube.com/vi/8sd3wuKTZMA/sddefault.jpg",
        title: "Profissional de UX/UI no mercado digital - GrowDev",
        link: "https://www.youtube.com/embed/8sd3wuKTZMA",
        category: "ux"
    },
    {
        img: "https://img.youtube.com/vi/-26aqPtgoEY/sddefault.jpg",
        title: "UX/UI designer no desenvolvimento de um produto digital - GrowDev",
        link: "https://www.youtube.com/embed/-26aqPtgoEY",
        category: "ux"
    },
    {
        img: "https://img.youtube.com/vi/QsuhYgsSYQo/sddefault.jpg",
        title: "Célula de talentos- Uma solução GrowDev",
        link: "https://www.youtube.com/embed/QsuhYgsSYQo",
        category: "diversos"
    },
    {
        img: "https://img.youtube.com/vi/ouDn8z3PSqs/sddefault.jpg",
        title: "Como é o dia a dia de um Dev - Live Grow Dev com Marcelo Eltes ",
        link: "https://www.youtube.com/embed/ouDn8z3PSqs",
        category: "diversos"
    },
    {
        img: "https://img.youtube.com/vi/cQDQNX6NXYo/sddefault.jpg",
        title: "Onde trabalhar com qualidade de Software? conheça a Testing Company empresa parceira da GrowDev",
        link: "https://www.youtube.com/embed/cQDQNX6NXYo",
        category: "diversos"
    },
    {
        img: "https://img.youtube.com/vi/nKGbolkirBM/sddefault.jpg",
        title: "Webinar ANALISTA DE DADOS - Com Paulo Marcon da Arezzo & Co",
        link: "https://www.youtube.com/embed/nKGbolkirBM",
        category: "diversos"
    },
    {
        img: "https://img.youtube.com/vi/6sZPsqNjeek/sddefault.jpg",
        title: "Tecnologia trazendo soluções para Arezzo & Co - Ricardo Pinho",
        link: "https://www.youtube.com/embed/6sZPsqNjeek",
        category: "diversos"
    },
    
]


    
    
const growcast = movies.filter(itemLista => itemLista.category === "growcast")
const diversos = movies.filter(itemLista => itemLista.category === "diversos")
const flutter = movies.filter(itemLista => itemLista.category === "flutter")
const ux = movies.filter(itemLista => itemLista.category === "ux")
const firstVideo = movies.find(itemLista => itemLista.title === "Growcast #01 - As profissões do futuro")

    function initialVideo(){
        const button  = document.getElementById("initial-iframe")
        button.addEventListener('click', function(event){
            event.preventDefault()
            const iframeContainer = document.createElement('div')

            iframeContainer.classList.add('iframe-container')
            const iframe = document.createElement('iframe')
            iframe.src = firstVideo.link
            //iframe-clasList-style
            iframe.classList.add('iframe')
            const divIframe = document.createElement('div')
            //divIframe-classList-style
            divIframe.classList.add('div-iframe')
            
            const overlay = document.createElement('div')
            //overlay-classList-style
            overlay.classList.add('overlay')
            
            const closeButton = document.createElement('button')
            const divButton = document.createElement('div')
            divButton.classList.add('div-button')
            //closeButton-classList-style
            closeButton.classList.add('close-btn')
            
            closeButton.innerHTML = '<i class="bi bi-x-lg"></i>'
            divButton.appendChild(closeButton)
            divIframe.appendChild(iframe)
            
            document.body.style.overflow = 'hidden'
            
            //closeButton-funcion-click
            closeButton.addEventListener('click', function() {
                iframeContainer.remove() 
                document.body.style.overflowY='scroll'
                
                
            })
            iframeContainer.appendChild(overlay)
            iframeContainer.appendChild(divButton)
            iframeContainer.prepend(divButton)
            iframeContainer.appendChild(divIframe)
            

            
            document.body.appendChild(iframeContainer)
            
            
        })
    }
    initialVideo()
    function createDivsFromSection1(){
        growcast.forEach(item => {
            const sectionGrowCast = document.getElementById('grow-cast')
            const div = document.createElement('div')
            //div-add-classList-style
            div.classList.add( 'div-img', 'col-sm-6', 'col-md-3','col-lg-3','col-xl-col-3','pb-4')
                //
            
            const img = document.createElement('img')
            img.src = item.img
            img.alt= "imagem"
            //img-add-classList-style
            img.classList.add('img-fluid','img-fluid', 'img-lg', 'img-xl', 'img-md')
                //
            div.appendChild(img)
            
            const link = document.createElement('a')
            
            //link-style
            link.classList.add('link-movies')
            link.style.textDecoration = "none"
            link.style.paddingTop = "0"
                //
            link.href = item.link
            link.target = '_blank'
            link.textContent = item.title
            
            
            const icon = document.createElement('i')
            //icon-style
            icon.classList.add("bi", "bi-play-circle", "ps-3")
            icon.style.fontSize = '30px'
            icon.style.paddingRight ="10px"
                //
            link.prepend(icon)
          
            div.appendChild(link)
            
            sectionGrowCast.appendChild(div)
            
             iframe(link)
                
        }) 
    }

    createDivsFromSection1()
    
    function createDivsFromSection2(){
        flutter.forEach(item => {
            const sectionFlutter = document.getElementById('flutter')
            const div = document.createElement('div')
            
            
            div.classList.add( 'col-sm-6', 'col-md-3','col-lg-3','col-xl-col-3','pb-4','div-img', 'img-fluid', 'img-lg', 'img-xl', 'img-md', 'img-ms')
            
            const img = document.createElement('img')
            img.src = item.img
            img.alt= "imagem-1"
            
            const divImg = document.createElement('div')
            img.classList.add('img-fluid')
            div.appendChild(img)
            
            const link = document.createElement('a')
            
            link.classList.add('link-movies')
            link.href = item.link
            link.target = '_blank'
            link.textContent = item.title
            link.style.textDecoration = "none"
            link.style.paddingTop = "0"
            const icon = document.createElement('i')
            icon.classList.add("bi", "bi-play-circle", "ps-3")
            icon.style.fontSize = '30px'
            icon.style.paddingRight ="10px"
            link.prepend(icon)
            
            div.appendChild(link)
            sectionFlutter.appendChild(div)
            
            iframe(link)
                
             
            
        }) 
    } 
    createDivsFromSection2()
    function createDivsFromSection3(){
        ux.forEach(item => {
            const sectionUx = document.getElementById('ux')
            const div = document.createElement('div')
            
            
            div.classList.add( 'col-sm-6', 'col-md-3','col-lg-3','col-xl-col-3','pb-4','div-img', 'img-fluid', 'img-lg', 'img-xl', 'img-md', 'img-ms')
            
            const img = document.createElement('img')
            img.src = item.img
            img.alt= "imagem-1"
            
            const divImg = document.createElement('div')
            img.classList.add('img-fluid')
            div.appendChild(img)
            
            const link = document.createElement('a')
            
            link.classList.add('link-movies')
            link.href = item.link
            link.target = '_blank'
            link.textContent = item.title
            link.style.textDecoration = "none"
            link.style.paddingTop = "0"
            const icon = document.createElement('i')
            icon.classList.add("bi", "bi-play-circle", "ps-3")
            icon.style.fontSize = '30px'
            icon.style.paddingRight ="10px"
            link.prepend(icon)
            
            div.appendChild(link)
            sectionUx.appendChild(div)

            iframe(link)
            
        }) 
    } 
     createDivsFromSection3()

    
    function createDivsFromSection4(){
        diversos.forEach(item => {
            const sectionDiversos = document.getElementById('diversos')
            const div = document.createElement('div')
            
           div.classList.add( 'col-sm-6', 'col-md-3','col-lg-3','col-xl-col-3','pb-4','div-img', 'img-fluid', 'img-lg', 'img-xl', 'img-md', 'img-ms')
            
            const img = document.createElement('img')
            img.src = item.img
            img.alt= "imagem-1"
            
            const divImg = document.createElement('div')
            img.classList.add('img-fluid')
            div.appendChild(img)
            
            const link = document.createElement('a')
            
            link.classList.add('link-movies')
            link.href = item.link
            link.target = '_blank'
            link.textContent = item.title
            link.style.textDecoration = "none"
            link.style.paddingTop = "0"
            const icon = document.createElement('i')
            icon.classList.add("bi", "bi-play-circle", "ps-3")
            icon.style.fontSize = '30px'
            icon.style.paddingRight ="10px"
            link.prepend(icon)
            
            div.appendChild(link)
            sectionDiversos.appendChild(div)
            
            iframe(link)
            
        }) 
    }
    createDivsFromSection4()
    
    
    function iframe(link){
        link.addEventListener('click', function(event){
            event.preventDefault()
            const iframeContainer = document.createElement('div')
            
            iframeContainer.classList.add('iframe-container')
            const iframe = document.createElement('iframe')
            iframe.src = link.href
            //iframe-clasList-style
            iframe.classList.add('iframe')
            const divIframe = document.createElement('div')
            //divIframe-classList-style
            divIframe.classList.add('div-iframe')
            
            const overlay = document.createElement('div')
            //overlay-classList-style
            overlay.classList.add('overlay')
            
            const closeButton = document.createElement('button')
            const divButton = document.createElement('div')
            divButton.classList.add('div-button')
            //closeButton-classList-style
            closeButton.classList.add('close-btn')
            
            closeButton.innerHTML = '<i class="bi bi-x-lg"></i>'
            divButton.appendChild(closeButton)
            divIframe.appendChild(iframe)
            
            document.body.style.overflow = 'hidden'
            
            //closeButton-funcion-click
            closeButton.addEventListener('click', function() {
                iframeContainer.remove() 
                document.body.style.overflowY='scroll'
                
                
            })
            iframeContainer.appendChild(overlay)
            iframeContainer.appendChild(divButton)
            iframeContainer.prepend(divButton)
            iframeContainer.appendChild(divIframe)
            

            
            document.body.appendChild(iframeContainer)
            
            
        })
    }
    