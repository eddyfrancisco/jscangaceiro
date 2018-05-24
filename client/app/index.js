
var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

console.log(campos); 

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
  
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {

        //Cria um td sem informações
        var td = document.createElement('td');

        //Atribui um valor a td
        td.textContent = campo.value;

        //Adiciona a td ma tr
        tr.appendChild(td);
    })
    
});

//Nova td que armazenará o volume da negociação

var tdVolume = document.createElement('td');

//as posições 1 e 2 do array armazenam os campos de quantidade e valor, respectivamente
td.volume.textContent = campos[1].value * campos[2].value;

//Adicionando a td que faltava à tr
tr.appendChild(tdVolume);

