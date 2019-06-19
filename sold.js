localStorage.nome;
localStorage.email;
localStorage.telefone;
localStorage.site;
localStorage.nomeArray;
localStorage.emailArray;
localStorage.telefoneArray;
localStorage.siteArray;
var auxNomeArray = new Array();
var auxEmailArray = new Array();
var auxTelefoneArray = new Array();
var auxSiteArray = new Array();
var auxGerente = new Array();
var auxTelFil = new Array();
var auxEmailFil = new Array();
var auxSiteFil = new Array();

//Estoque
var auxCode = new Array();
var auxDesc = new Array();
var auxQnt = new Array();
var auxVal = new Array();

function salvarInfoEstoque(){
    var code = document.getElementById("codigo1").value;
    var desc = document.getElementById("descricao1").value;
    var qnt = document.getElementById("quantidade1").value;
    var val = document.getElementById("valor1").value;
    if(code===""|| desc===""|| qnt===""|| val===""){
        alert("Informações insuficientes");
        return;
    }
    localStorage.setItem("codigo1", code); 
    localStorage.setItem("descricao1", desc);
    localStorage.setItem("quantidade1", qnt);
    localStorage.setItem("valor1", val);

    auxCode.push(code); 
    auxDesc.push(desc);
    auxQnt.push(qnt);
    auxVal.push(val);
    console.log("fiuheu");
}
//Filiais
    

function salvarInfoFiliais(){
    var gerenteFil1 = document.getElementById("gerenteFil").value;
    var telFil1 = document.getElementById("telefoneFil").value;
    var emailFil1 = document.getElementById("emailFil").value;
    var siteFil1 = document.getElementById("siteFil").value;
    if(gerenteFil1===""|| telFil1===""|| siteFil1===""|| siteFil1===""){
        alert("Informações insuficientes");
        return;
    }
    localStorage.setItem("gerenteFil", gerenteFil1); 
    localStorage.setItem("telFil1", telFil1);
    localStorage.setItem("emailFil", emailFil1);
    localStorage.setItem("siteFil", siteFil1);

    auxGerente.push(gerenteFil1); 
    auxTelFil.push(telFil1);
    auxEmailFil.push(emailFil1);
    auxSiteFil.push(siteFil1);
    
}
    auxMatricula = new Array();
    auxData = new Array();
    auxCargo = new Array();

function salvarInfoVendedor(){
    var matriculaVend = document.getElementById("matricula1").value;
    var dataVend = document.getElementById("data1").value;
    var cargoVend = document.getElementById("cargo1").value;
    if(matriculaVend===""|| dataVend===""|| cargoVend===""){
        alert("Informações insuficientes");
        return;
    }
    localStorage.setItem("matricula1", matriculaVend); 
    localStorage.setItem("data1", dataVend);
    localStorage.setItem("cargo1", cargoVend);

    auxMatricula.push(matriculaVend); 
    auxData.push(dataVend);
    auxCargo.push(cargoVend);
}
//Cliente
 var auxNomeCli = new Array();
 var auxAddressCli = new Array();
 var auxTelefoneCli = new Array();
 var auxEmailCli = new Array();

function salvarInfoCliente(){
    var nomeCli = document.getElementById("nomeCliente").value;
    var addressCli  = document.getElementById("addressCliente").value;
    var telefoneCli = document.getElementById("telefoneCliente").value;
    var emailCli = document.getElementById("emailCliente").value;
    if(nomeCli===""|| addressCli===""|| telefoneCli===""|| emailCli===""){
        alert("Informações insuficientes");
        return;
    }
    localStorage.setItem("nomeCliente", nomeCli); 
    localStorage.setItem("addressCliente", addressCli);
    localStorage.setItem("telefoneCliente", telefoneCli);
    localStorage.setItem("emailCliente", emailCli);

    auxNomeCli.push(nomeCli); 
    auxAddressCli.push(addressCli);
    auxTelefoneCli.push(telefoneCli);
    auxEmailCli.push(emailCli);
}

function salvarInfo(){
    var n = document.getElementById("nome").value;
    var e = document.getElementById("email").value;
    var t = document.getElementById("telefone").value;
    var s = document.getElementById("site").value;

    if(n ==="" || e === "" || t === "" || s === ""){
        alert("Informações insuficientes");
        return;
    }

    localStorage.setItem("nome", n); //localStorage.nome = n;
    localStorage.setItem("email", e); // localStorage.email = e;
    localStorage.setItem("telefone", t); // localStorage.telefone = t;
    localStorage.setItem("site", s); //

    auxNomeArray.push(n);
    auxEmailArray.push(e);
    auxTelefoneArray.push(t);
    auxSiteArray.push(s)

    localStorage.setItem("nomeArray", auxNomeArray);
    localStorage.setItem("emailArray", auxEmailArray);
    localStorage.setItem("telefoneArray", auxTelefoneArray);
    localStorage.setItem("siteArray", auxSiteArray)

    console.log(localStorage.nomeArray,localStorage.emailArray,localStorage.telefoneArray,localStorage.siteArray);
    alert("Nome: "+localStorage.nomeArray+"\nEmail: "+localStorage.emailArray+"\nTelefone: "+localStorage.telefoneArray+"\nSite: "+localStorage.siteArray);

}
function imprimirInfo(){
    var n = document.getElementById("nome").value;
    var e = document.getElementById("email").value;
    var t = document.getElementById("telefone").value;
    var s = document.getElementById("site").value;

    localStorage.setItem("nome", n); //localStorage.nome = n;
    localStorage.setItem("email", e); // localStorage.email = e;
    localStorage.setItem("telefone", t); // localStorage.telefone = t;
    localStorage.setItem("site", s);

    auxNomeArray.push(n);
    auxEmailArray.push(e);
    auxTelefoneArray.push(t);
    auxSiteArray.push(s);

    localStorage.setItem("nomeArray", auxNomeArray);
    localStorage.setItem("emailArray", auxEmailArray);
    localStorage.setItem("telefoneArray", auxTelefoneArray);
    localStorage.setItem("siteArray", auxSiteArray);

    console.log(localStorage.nomeArray,localStorage.emailArray,localStorage.telefoneArray);
    document.write("Informações salvas e impressas com sucesso!<br>"+"Nome: "+localStorage.nomeArray+"<br>Email: "+localStorage.emailArray+"<br>Telefone: "+localStorage.telefoneArray);
}