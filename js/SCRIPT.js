var idadem = document.querySelector('#idadem')
idadem.addEventListener('click' , function (){
    this.innerHTML = 'IDADE : 100011 ANOS'
})
var alturam = document.querySelector('#alturam')
alturam.addEventListener('click' , function (){
    this.innerHTML = 'ALTURA : 10101010  aaCENTIMETROS'
})
var jogosm = document.querySelector('#jogosm')
jogosm.addEventListener('click' , function (){
    this.innerHTML = 'JOGOS : 1111100101 PARTIDAS'
})
var gols = document.querySelector('#golsm')
gols.addEventListener('click' , function (){
    this.innerHTML = 'GOLS : 1100010100 GOLS'
})
var assist = document.querySelector('#assistm')
assist.addEventListener('click' , function (){
    this.innerHTML = 'ASSISTENCIAS : 100100001 ASSIST'
})
var golsele = document.querySelector('#golselem')
golsele.addEventListener('click' , function (){
    this.innerHTML = 'GOLS PELA SELEÇÃO : 1011101 '
})
var titulos = document.querySelector('#titulosm')
titulos.addEventListener('click' , function (){
    this.innerHTML = 'NUMEROS DE TITULOS : 101001'
})

var idade = document.querySelector('#idade')
idade.addEventListener('click' , function (){
    this.innerHTML = 'IDADE : 11110 ANOS'
})

var altura = document.querySelector('#altura')
altura.addEventListener('click' , function (){
    this.innerHTML = 'ALTURA : 10101111  aaCENTIMETROS'
})

var jogos = document.querySelector('#jogos')
jogos.addEventListener('click' , function (){
    this.innerHTML = 'JOGOS : 1011100110 PARTIDAS'
})
var gols = document.querySelector('#gols')
gols.addEventListener('click' , function (){
    this.innerHTML = 'GOLS : 111001000 GOLS'
})
var assist = document.querySelector('#assist')
assist.addEventListener('click' , function (){
    this.innerHTML = 'ASSISTENCIAS : 100010001 ASSIST'
})
var golsele = document.querySelector('#golsele')
golsele.addEventListener('click' , function (){
    this.innerHTML = 'GOLS PELA SELEÇÃO : 1001011 '
})
var titulos = document.querySelector('#titulos')
titulos.addEventListener('click' , function (){
    this.innerHTML = 'NUMEROS DE TITULOS : 11011'
})

tamanho = 16;
function diminuir(){
  tamanho--;
  document.body.style.fontSize=tamanho+"px";
}
function aumentar(){
  tamanho++;
  document.body.style.fontSize=tamanho+"px";
}


var link_contraste_branco = document.querySelector('#contraste_branco')
var todasAsTags = document.querySelectorAll('*')

if (link_contraste_branco != null){
    link_contraste_branco.addEventListener('click', function(){
        console.log(todasAsTags);
        for(let i = 0; i< todasAsTags.length; i++){
            let tag = todasAsTags[i]
    
            if (tag.nodeName == 'A') {
                tag.style.backgroundColor = 'black'
                tag.style.color = 'white'
            }else {
                tag.style.backgroundColor = 'white'
                tag.style.color = 'black'
            }
        }
    })
}

//contraste preto
var link_contraste_preto = document.querySelector('#contraste_preto')
var todasAsTags = document.querySelectorAll('*')
if (link_contraste_preto != null){
    link_contraste_preto.addEventListener('click', function (){
        console.log(todasAsTags);
        for(let i = 0; i< todasAsTags.length; i++){
            let tag = todasAsTags[i]
    
            if (tag.nodeName == 'A'){
                tag.style.backgroundColor = 'white'
                tag.style.color = 'black'
            }else{
                tag.style.backgroundColor = 'black'
                tag.style.color = 'white'
            }
        }
    })
}