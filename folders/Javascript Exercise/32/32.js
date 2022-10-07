
//32
let current_users =['usama', 'saad', 'asad', 'bakar', 'nabeel'];
let new_users =['Ali' , 'Akbar', 'SAAD', 'uzair', 'umer'];
for (let i=0; i<current_users.length;i++)
    for (let j=0; j< new_users.length; j++){
        if(current_users[i]== new_users[j].toLowerCase()){
            console.log(current_users[i] ,'is already added. Use a new username ');
        }
    }