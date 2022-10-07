
//24
//for true
let string = 'string';
if(string == 'string'){
    console.log(string == 'string');
}
else{
    console.log(string == 'string');
}

//for false
let string1 = 'str'
if(string1 == 'string'){
    console.log(string == 'string');
}
else{
    console.log(string1 == 'string');
}

//for true
let name2 = 'AHMAD';
let name3 = name2.toLowerCase();
console.log(name3);
if(name3 == 'ahmad'){
    console.log(name3 == 'ahmad');
}

//for false
let name4 = 'ahmad';
 name4 = name4.toUpperCase();
console.log(name4);
if(name4 == 'ahmad'){
    console.log(name4 == 'ahmad');
}
else{
    console.log(name4 == 'ahmad');

}
//true
if(2>1 && 1<3){
    console.log(2>1 && 1<3);
}
else{
    console.log('false');
}

//flase
a= 5, b= 10, c=12;
if (a>b && c<b){
    console.log(a>b && c<b);
}
else{
    console.log(a>b && c<b);
}

//true
if(b>=10){
    console.log(b>=10);
}
else{
    console.log(b>=10);
}

//OR operation
if(a ==10 || b==10){
 console.log('a or b is equal to 10');
}

//item is in array
//let array = ['pakistan', 'india', 'afghanistan', 'us', 'uk'];

for(let i =0;i<array.length; i++){
    if(array[i] == 'pakistan'){
        console.log(array[i]);
    }
}

//item is not in array
//let array = ['pakistan', 'india', 'afghanistan', 'us', 'uk'];
for(let i =0;i<array.length; i++){
    if(array[i] == 'idn'){
        console.log(array[i]);
    }
    else{
        console.log('false');
    }
}