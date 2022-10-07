
//15
console.log('next exercise!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
let list2=[
    {'hamza' : 'You are not deserve it but i want you to be here'},
    {'usama' : 'come on time bro'},
    {'mehdi' : 'Come brother come!!!'}
]
for(let i =0;i<list2.length; i++){
    console.log(list2[i]);
}

console.log('Hamza is not able to come');
console.log('updated one');

list2.splice(0, 1, {'ahmad' : 'come on dinner'});

for(let i =0;i<list2.length; i++){
    console.log(list2[i]);
}