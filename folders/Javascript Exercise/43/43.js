//43
show_magicians = (magiciansName) =>{
    magiciansName = ['shaka', 'akbar', 'alibaba','ahmad'];
    
    for (let i =0; i<magiciansName.length; i++){
        console.log(magiciansName[i]);
    }
     }

make_great = (magiciansName) => {
   magiciansName = ['shaka', 'akbar', 'alibaba','ahmad'];
   magiciansName.splice(0,4, 'Great Shaka','Great akbar', 'Great alibaba', 'Great ahmad',);  
   let newArray = [].concat(magiciansName);
   console.log(newArray);
   }

make_great();
show_magicians();