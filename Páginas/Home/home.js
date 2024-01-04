dataAtual = new Date()

aimg = document.getElementById('a-img') 

mig = document.querySelector('img.pointer_mig')

ano = dataAtual.getFullYear()
anoatual = parseInt(ano)
pgc = document.querySelector('b.pgc')
ts_img = document.querySelector('img.ts-img')
pg = 0
text = document.querySelector('div.content')

texts = [`Tenho atualmente ${anoatual - 2010} anos! 👦`, `Curto temas como: espaço🌌, gaming🎮, animação✍, entre outras coisas...`, `Sei as linguagens: Python🐍, Javascript e um pouco de PHP🐘`, `Gosto de muitos animais, mas de todos eles a Raposa é uma de minhas preferidas! 🦊`, `Tenho como cor favorita, Tons azulados 🔵 e roxos. 🟣`]

if(navigator.platform != Win32 || navigator.platform != Win64){
    alert('ATENÇÃO! Parece que você não está em um Windows, o site provavelmente vai estar com alguns bugs para você, O Site ainda é acessível da sua plataforma, porém, com alguns erros. Já estou cuidando dessa situação, obrigado pela compreensão :)')
}

function nextpage(){ 
    pg++

    if(pg > 5){
        pgc.innerHTML = `[1 | 5]`
        pg = 1
        text.innerHTML = texts[0]
    } else {
        pgc.innerHTML = `[${pg} | 5]`
        if(pg == 1){
            text.innerHTML = texts[0]
        } else if(pg == 2){
            text.innerHTML = texts[1]
        } else if(pg == 3){
            text.innerHTML = texts[2]
        } else if(pg == 4){
            text.innerHTML = texts[3]
        } else if(pg == 5){
            text.innerHTML = texts[4]
        } else {
            text.innerHTML = texts[1]
        }
        
    }
    ts_img.src = `Home_Assets/mig_${pg}.png`
}


function mostrar(){
    aimg.classList.remove('invisible')
    aimg.classList.add('shown')
}

function esconder(){
    aimg.classList.remove('shown')
    aimg.classList.add('invisible')
    
}

function mig_idle(){
    mig.src = 'Home_Assets/mig_idle.png'
}

function mig_left(){
    mig.src = 'Home_Assets/mig_left.png'
}

function mig_right(){
    mig.src = 'Home_Assets/mig_right.png'
}