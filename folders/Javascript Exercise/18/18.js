
//18
console.log('print array');
let array = ['pakistan', 'india', 'afghanistan', 'us', 'uk'];
for(let i =0;i<array.length; i++){
    console.log(array[i]);
}
array.sort();
console.log('print array in alphabetical order');
for(let i =0;i<array.length; i++){
    console.log(array[i]);
}

array.reverse();
console.log('print array in reverse order');
for(let i =0;i<array.length; i++){
    console.log(array[i]);
}

array.sort();
console.log('print array in original order');
for(let i =0;i<array.length; i++){
    console.log(array[i]);
}
