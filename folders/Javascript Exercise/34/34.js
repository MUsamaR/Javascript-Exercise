
//34
let pizza =['tikka', 'fajita', 'supreme'];
for (let i=0; i<pizza.length;i++){
    console.log(pizza[i]);
}

pizza.splice(0, 3, 'i like tikka pizza', 'i like fajita pizza', 'i like supreme pizza');
for (let i=0; i<pizza.length;i++){
    console.log(pizza[i]);
}
console.log('i really love pizza');
