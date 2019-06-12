function openForm(nome_pagina) {
    document.getElementById(nome_pagina).style.display = "block";
  }
  
  function closeForm(nome_pagina) {
    document.getElementById(nome_pagina).style.display = "none";
  }  
  
  function selecionarTela(nome_pagina, elmnt, cor) {
    
    var i, conteudo_tela, menus;
    conteudo_tela = document.getElementsByClassName("conteudo_tela");
    for (i = 0; i < conteudo_tela.length; i++) {
      conteudo_tela[i].style.display = "none";
    }
  
    
    menus = document.getElementsByClassName("class_menu");
    for (i = 0; i < menus.length; i++) {
      menus[i].style.backgroundColor = "";
    }  
  
    document.getElementById(nome_pagina).style.display = "block";
    
  
    elmnt.style.backgroundColor = cor;
  }        
  document.getElementById("default").click();
  
  
  
  