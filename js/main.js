function tocaSom(seletorAudio){
  const elemento = document.querySelector(seletorAudio);

  if(elemento && elemento.localName === 'audio'){
    elemento.play();
  }else{
    console.log('Elemento ou seletor não encontrado');
  }
}

const listButtons = document.querySelectorAll('.tecla');

for (let i = 0; i < listButtons.length; i++){
  const tecla = listButtons[i];
  const idAudio = `#som_${tecla.classList[1]}`;

  tecla.onclick = function(){
    tocaSom(idAudio);
  }
  tecla.onkeydown = function(evento){
    if(evento.code === 'Enter' || evento.code === 'Space'){
      tecla.classList.add('ativa');
    }
  }
  tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
  }
}