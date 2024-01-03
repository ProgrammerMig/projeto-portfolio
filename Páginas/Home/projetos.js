video = document.querySelector('.best-video')
max = 3
min = 0
random = Math.floor(Math.random() * (max - min) + min);
urls = ['https://www.youtube.com/embed/LYJnu-PS2N4?si=y8cI3CLp_iFAZE9-', 'https://www.youtube.com/embed/0sEm07OlPvc?si=lRXSiUW8gYvP5NB7', 'https://www.youtube.com/embed/aBAiTDjOFTs?si=RwIvmPP6v_HSb_G3']

data = new Date
hora = data.getHours()
console.log(hora)
despedida = document.getElementById('despedida')
mig = document.querySelector('#mig_despedida')

function tchau(){
    data = new Date
    hora = data.getHours()
    if(hora <= 6){
        despedida.innerHTML = `Tenha uma boa madrugada`
        mig.src = 'Contato&Projetos_Assets/mig_d.png'
        mig.alt = 'Apenas vá dormir. Por favor.'
    } else if(hora <= 11){
        despedida.innerHTML = `Tenha um bom dia`
        mig.src = 'Contato&Projetos_Assets/mig_a.png'
        mig.alt = 'Mig com um sorriso aberto no rosto.'
    } else if(hora <= 18){
        despedida.innerHTML = `Tenha uma boa tarde`
        mig.src = 'Contato&Projetos_Assets/mig_b.png'
        mig.alt = 'Mig feliz.'
    } else if(hora <= 23){
        despedida.innerHTML = `Tenha uma boa noite`
        mig.src = 'Contato&Projetos_Assets/mig_c.png'
        mig.alt = 'Mig dormindo.'
    }
}

function refreshvideo(){
    random = Math.floor(Math.random() * (max - min) + min);
    video.src = urls[random]
}