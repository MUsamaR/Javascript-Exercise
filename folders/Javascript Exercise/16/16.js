//16
let list2=[
    {'hamza' : 'You are not deserve it but i want you to be here'},
    {'usama' : 'come on time bro'},
    {'mehdi' : 'Come brother come!!!'}
]
for(let i =0;i<list2.length; i++){
    console.log(list2[i]);
}

console.log('found 3 more guests');

list2.splice(0, 0, {'abdul' : 'warmly welcome on party'});

list2.splice(2, 0, {'rauf' : 'party will be started on 3 am'});

list2.push({'haris': 'welcome'});

for(let i =0;i<list2.length; i++){
    console.log(list2[i]);
}
