for (var i = 0; i < document.getElementsByTagName('li').length; i++) {
    temp =document.getElementsByTagName('li')[i]
        
    if(!temp.hasAttribute('class'))
        {
            temp.className ="unknown"
        }
    if(!temp.hasAttribute('data-element'))
        {
            temp.setAttribute('data-element', 'none')
            console.log(temp.getAttribute('data-element'))
       
        }

    temp.append(document.createElement("br"))
    if(temp.hasAttribute('data-element')&& temp.hasAttribute('data-element')!=null)
        {
            console.log(temp.getAttribute('data-element'))
            a = temp.getAttribute('data-element').split(' ')
            console.log(a)
            
        for(let i=0; i<=a.length; i++)
            {
                let div = document.createElement("div")
                if(a[i] == 'fire')
                {
                    div.className +="elem fire"
                    temp.append(div)
                }
                if(a[i] == 'water')
                {
                    div.className +="elem water"
                    temp.append(div)
                }
                if(a[i] == 'earth')
                {
                    div.className +="elem earth"
                    temp.append(div)
                }
                if(a[i] == 'air')
                {
                    div.className +="elem air"
                    temp.append(div)
                }
                if(a[i] == 'none')
                {
                    div.className +="elem none"
                    td = document.createElement("div")
                    td.className +="line"
                    div.append(td)
                    temp.append(div)
                }
                
            }
        }
    }