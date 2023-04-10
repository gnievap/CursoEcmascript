function* iterate(array){
    for ( let value of array ){
        yield value;
    }
}

const it = iterate(['Torcuato', 'Anacleta', 'Pánfilo', 'Filomeno']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);