
nomeArray = [];
    
function submit()
{
    var telaArray = [];

    for (var j = 1; j <= 4; j++) 
    {
        var nome = document.getElementById("nome"+j).value;
        console.log(nome);
        nomeArray.push(nome);
    }

    console.log(nomeArray);

    var ComprimentoNomeArray = nomeArray.length;
    console.log(ComprimentoNomeArray);

    for (var k = 0; k < ComprimentoNomeArray; k++) 
    {
        telaArray.push("<h4>NAME - "+ nomeArray[k] + "</h4>");
        console.log(telaArray);
    }

    console.log(telaArray);
    document.getElementById("TelaComVirgula").innerHTML = telaArray;

    var removerVirgula = telaArray.join(" ");
    console.log(removerVirgula);
    document.getElementById("TelaSemVirgula").innerHTML = removerVirgula;


    document.getElementById("enviar").style.display = "none";
    document.getElementById("organizar").style.display = "inline-block";

}

function sorting()
{
    nomeArray.sort();
    console.log(nomeArray);

    var telaArraySorting = [];

    var ComprimentoNomeArray = nomeArray.length;
    console.log(ComprimentoNomeArray);

    for (var k = 0; k < ComprimentoNomeArray; k++) 
    {
        telaArraySorting.push("<h4>NAME - " + nomeArray[k] + "</h4>");
        console.log(telaArraySorting);
    }
  
    var removerVirgula = telaArraySorting.join(" ");
    console.log(removerVirgula);
    document.getElementById("enviar").style.display ="inline-block";
    document.getElementById("organizar").style.display =  "none";

    document.getElementById("TelaSemVirgula").innerHTML = removerVirgula;
   
}



function newUpdate()
{
    document.getElementById("TelaSemVirgula").innerHTML = "<h1>" + nomeArray +"</h1>";
}
function searching()
{
var s=document.getElementById("s1").value;
var found=0;
var j;

for (j=0; j<nomeArray.length; j++){
if (s==nomeArray[j]){
found=found+1;}
}

document.getElementById("p2").innerHTML="Nome encontrado"+found+"vez(es)";
console.log("Nome encontrado "+found+"vez(es)");
}



