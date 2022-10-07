 //44

 let item = [ 'roast beef', 'cheddar cheese', 'lettuce', 'honey dijon'];
 
 sandwish.apply(this, item);

function sandwish(){
 	for(let i=0; i<item.length; i++){
 		console.log(item[i]);
    }
}