
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
       this.nome = nome;
       this.preco = preco;
       this.alturaCacamba = alturaCacamba;
       this.alturaVeiculo = alturaVeiculo;
       this.alturaSolo = alturaSolo;
       this.capacidadeCarga = capacidadeCarga;
       this.motor = motor;
       this.potencia = potencia;
       this.volumeCacamba = volumeCacamba;
       this.roda = roda;
       this.image = image;
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}


function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        let position = GetCarArrPosition(carArr, carClass);
        if (el.checked) {
            if (position === -1 && carArr.length < 2) {
                carArr.push(carClass);
            } else if(carArr.length >= 2){
                el.checked = false;
                alert("Só é possível comparar 2 carros");
            }
        } else {
            if (position !== -1) {
                carArr.splice(position, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
   for (let i = 0; i < carArr.length; i++) {
        let carroAtual = carArr[i];
        document.getElementById("compare_image_"+i).innerHTML = `<img src="${carroAtual.image}">`;
        document.getElementById("compare_modelo_"+i).innerHTML = carroAtual.nome;
        document.getElementById("compare_alturacacamba_"+i).innerHTML = carroAtual.alturaCacamba;
        document.getElementById("compare_alturaveiculo_"+i).innerHTML = carroAtual.alturaVeiculo;
        document.getElementById("compare_alturasolo_"+i).innerHTML = carroAtual.alturaSolo;
        document.getElementById("compare_capacidadecarga_"+i).innerHTML = carroAtual.capacidadeCarga;
        document.getElementById("compare_motor_"+i).innerHTML = carroAtual.motor;
        document.getElementById("compare_potencia_"+i).innerHTML = carroAtual.potencia;
        document.getElementById("compare_volumecacamba_"+i).innerHTML = carroAtual.volumeCacamba;
        document.getElementById("compare_roda_"+i).innerHTML = carroAtual.roda;
        document.getElementById("compare_preco_"+i).innerHTML = carroAtual.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}


// compare_modelo_
// compare_alturacacamba_
// compare_alturaveiculo_
// compare_alturasolo_
// compare_capacidadecarga_
// compare_motor_
// compare_potencia_
// compare_volumecacamba_
// compare_roda_
// compare_preco_