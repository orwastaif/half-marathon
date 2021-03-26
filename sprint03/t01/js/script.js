function removeDuplicates(){
    let str = '' ;
    for(let i=0; i < this.length; i++){
        if(!(this[i] == ' ' && this[i-1] == ' ')) str += this[i];

    }

str = str.split(' ');
for(let i = 0; i < str.length; i++) {
    let index = str.indexOf(str[i],i+1);
    if(index != -1) {
        str.splice(index,1);
        i--;
      } 
   }
   return str.join(' ');
}

String.prototype.removeDuplicates = removeDuplicates;

let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str);
str.removeDuplicates();


str = str.removeDuplicates();
console.log(str);

str = str.removeDuplicates();
console.log(str);


str = ". . . . ? . . . . . . . . . . . ";
console.log(str); 

str = str.removeDuplicates();
console.log(str); 

