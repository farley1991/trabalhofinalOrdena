//vetor crescente;
let vet1 = []

for (let i = 1; i <= 10000; ++i) {
    vet1.push(i)
}
// vetor  decrescente;
let vet2 = []

for (let i = 10000; i >= 1; --i) {
    vet2.push(i)
}
// vetor aleatorio;
let vet3 = []


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let vetSelect = []

for (let i = 10000; i >= 1; ++i) {
    vetSelect.push(i)
}
let vetSelect2 = []


for (let i = 10000; i >= 1; --i) {
    vetSelect2.push(i)
}

let vetSelect3 = []


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10000; ++i) {
    vetSelect3.push(getRandom(0, 10000))

}
 
 let vetBubble = []

for (let i = 10000; i >= 1; ++i) {
    vetBubble.push(i)
}
let vetBubble2 = []


for (let i = 10000; i >= 1; --i) {
    vetBubble2.push(i)
}

let vetBubble3 = []


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10000; ++i) {
    vetBubble3.push(getRandom(0, 10000))

}

 
 let vetQuick = []

for (let i = 10000; i >= 1; ++i) {
    vetQuick.push(i)
}
let vetQuick2 = []


for (let i = 10000; i >= 1; --i) {
    vetQuick2.push(i)
}

let vetQuick3 = []


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10000; ++i) {
    vetQuick3.push(getRandom(0, 10000))

}


 let vetInsert = []

for (let i = 10000; i >= 1; ++i) {
    vetInsert.push(i)
}
let vetInsert2 = []


for (let i = 10000; i >= 1; --i) {
    vetInsert2.push(i)
}

let vetInsert3 = []


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 1; i <= 10000; ++i) {
    vetInsert3.push(getRandom(0, 10000))

} 

 function selectionsort(tim) {

    let primeiroT = 0;
    for (let x = 0; x < tim.length; ++x) {
        for (let j = x + 1; j < tim.length; ++j) {
            if (tim[x] > tim[j]) {
                primeiroT = tim[x];  
                tim[x] = tim[j];
                tim[j] = primeiroT;
            }
        }
    }

    return (tim);

}


function insertionsort(funcao) {

    var length = funcao.length;

    for (var i = 1, j; i < length; i++) {

        var temp = funcao[i];
        for (var j = i - 1; j >= 0 && funcao[j] > temp; j--) {
            funcao[j + 1] = funcao[j];

        }

        funcao[j + 1] = temp;
    }

    return funcao;

}


 function quicksort(metodo) {

    if (metodo.length <= 1) {

        return metodo;
    }

    let pivot = metodo[0];

    let left = [];
    let right = [];

    for (let i = 1; i < metodo.length; i++) {
        metodo[i] < pivot ? left.push(metodo[i]) : right.push(metodo[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
};

function Bubblesort(fun) {

    const ordenar = Array.from(fun);
    let make;
    do {

        make = false;
        for (let i = 1; i < ordenar.length; ++i) {
            if (ordenar[i - 1] > ordenar[i]) {
                [ordenar[i], ordenar[i - 1]] = [ordenar[i - 1], ordenar[i]];
                make = true;
            }

        }

    } 
    while (make)
    return ordenar;

}

 

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var subLeft = mergesort(arr.slice(0, mid));
    var subRight = mergesort(arr.slice(mid));

    return merge(subLeft, subRight);
}

function merge(node1, node2) {
    var result = [];
    while (node1.length > 0 && node2.length > 0)
        result.push(node1[0] < node2[0] ? node1.shift() : node2.shift());
    return result.concat(node1.length ? node1 : node2);
}
const quickSort = function(rodar){

    let x = new Date().getTime()
    quicksort(rodar)
    let f = new Date().getTime()
    let t = f-x
    console.log(`o tempo de execução foi  :${t}s`)

}
const selectionSort = function(rodar){
    let x = new Date().getTime()
    selectionsort(rodar)
    let f = new Date().getTime()
    let t = f-x
    console.log(`o tempo de execução foi  :${t}s`)
}

const insertionSort = function(rodar){

    let a = new Date().getTime()
    insertionsort(rodar)
    let b = new Date().getTime()
    let c = b - a
    console.log(`o tempo de execução foi do vetor A foi :${c}s`)

}

const BubbleSort = function(rodar){

    let x = new Date().getTime()
    Bubblesort(rodar)
    let f = new Date().getTime()
    let t = f-x
    console.log(`o tempo de execução foi :${t}s`)
}

const mergeSort = function(rodar){
    let x = new Date().getTime()
    mergesort(rodar)
    let f = new Date().getTime()
    let t = f-x
    console.log(`o tempo de execução foi  :${t}s`)
}

mergeSort(vet1)
mergeSort(vet2)
mergeSort(vet3)

selectionsort(vetSelect1)
selectionsort(vetSelect2)
selectionsort(vetSelect3)

Bubblesort(vetBubble)
Bubblesort(vetBubble2)
Bubblesort(vetBubble3)






