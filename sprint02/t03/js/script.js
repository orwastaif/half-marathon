do{
    
 var mynumber = Number(prompt("Enter a number from 1 to 10"));
}
while( mynumber<1 || mynumber>10 || Number.isNaN(mynumber));

switch(mynumber){
    case 1 :
        alert("Back to square 1");
        break;
    case 2 :
        alert("Goody 2-shoes");
        break;
    case 3:
    case 6:
        alert("Two's company, three's a crowd");
        break;
    case 4:
    case 9:
        alert("Counting sheep");
        break;
    case 5 :
        alert("Take five");
        break;
    case 7 :
        alert("seventh heaven");
        break;
    case 8 :
        alert("Behind the eight-ball");
        break;
    case 10 :
        alert("Cheaper by the dozen");
        break;
}
