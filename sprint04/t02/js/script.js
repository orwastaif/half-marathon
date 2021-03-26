data_th  = ['Name','Strength', 'Age']
data = [
    ['Black Pnther',66,53],
    ['Capitan America',79,137],
    ['Capitan Marvel',97,26],
    ['Hulk',80,49],
    ['Iron Man',88,48],
    ['Spider-Man',78,16],
    ['Thanos',99,1000],
    ['Thor',95,1000],
    ['Yon-Rogg',73,52]
]
tableCreate()

function tableCreate(){
    
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    tbl.style.width = '100%';

    var row = document.createElement('tr');

    for (var i = 0; i < 3; i++) 
    {
        var th = document.createElement('th');
        

        th.append(document.createTextNode(data_th[i]))
        if(i == 0){
            th.setAttribute("onclick", 'namesort()');
        }
        else if(i==1){
            th.setAttribute("onclick", 'stresort()');
        }
        else if(i==2){
            th.setAttribute("onclick", 'agesort()');
        }
        row.append(th)
        tbl.append(row)
    }


    for (var i = 0; i < data.length; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 3; j++) 
    {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(data[i][j]))
        td.id = "a"+i+"_"+j;
        tr.appendChild(td)
        
    }
    tbl.appendChild(tr);
    }
    body.appendChild(tbl);
}


function resetTable(){
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < 3; j++) 
        {
           document.getElementById("a"+i+"_"+j).innerHTML = data[i][j]
        }
    }
}


notif = document.getElementById('placeholder')
notif.innerHTML = 'Sorting by Name, order: ASC'

namesort.counter = 1
function namesort(){
    if(namesort.counter %2 == 0){
        data.sort(function(a,b){
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
            })
        namesort.counter += 1
        notif.innerHTML = 'Sorting by Name, order: ASC'
    }
    else{
        data.sort(function(a,b){
            if (a[0] > b[0]) return -1;
            if (a[0] < b[0]) return 1;
            return 0;
            })
            namesort.counter += 1
            notif.innerHTML = 'Sorting by Name, order: DESC'
    }
    resetTable()
}
stresort.counter = 1
function stresort(){
    if(stresort.counter %2 ==0){
        data.sort(function(a,b){
            if (a[1] < b[1]) return -1;
            if (a[1] > b[1]) return 1;
            return 0;
            })
            stresort.counter += 1
            notif.innerHTML = 'Sorting by Strength, order: DESC'
    }
    else{
        data.sort(function(a,b){
            if (a[1] > b[1]) return -1;
            if (a[1] < b[1]) return 1;
            return 0;
            })
            stresort.counter += 1
            notif.innerHTML = 'Sorting by Strength, order: ASC'
    }
    resetTable()
}
agesort.counter = 1
function agesort(){
    if(agesort.counter %2 ==0){
        data.sort(function(a,b){
            if (a[2] < b[2]) return -1;
            if (a[2] > b[2]) return 1;
            return 0;
            })
            agesort.counter += 1
            notif.innerHTML = 'Sorting by Age, order: DESC'
    }
    else{
        data.sort(function(a,b){
            if (a[2] > b[2]) return -1;
            if (a[2] < b[2]) return 1;
            return 0;
            })
            agesort.counter += 1
            notif.innerHTML = 'Sorting by Age, order: ASC'
    }
    resetTable()
}