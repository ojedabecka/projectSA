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

