
const obj = {
    words : 'newspapers newspapers  books magazines'
};
console.log(obj);


function addWords(obj, strAdd){
    let arr = obj.words.split(' ').filter(item => {return item !=''});
   
    let arr2 = strAdd.split(' ').filter(item => {return item !=''});
  
    let x = arr.concat(arr2);
   
    let result = [];
    for(let str of x){
        if(!result.includes(str)){
            result.push(str);
        }
    }
    obj.words = result.join(" ");
    console.log(obj);
}
addWords(obj, 'radio newspapers  ');



function removeWords(obj, strRem){

    let arr3 = obj.words.split(' ').filter(item => {return item !=''});
    arr3.splice(0, 1);
    arr3.splice(2, 1)
   
    obj.words = arr3.join(" ");
    console.log(obj);
}
removeWords(obj, 'newspapers   radio')


function changeWords(obj, strChange){
    let arr4 = strChange.split(' ').filter(item => {return item !=''});
   
    arr4.splice(0, 3, "tv internet")
    
    obj.words = arr4.join(" ");
    console.log(obj);
}
 changeWords(obj, 'books radio  magazines', 'tv internet')





