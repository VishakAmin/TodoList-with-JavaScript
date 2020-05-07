
var ul = document.getElementById('list');
var li;


var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var remButton = document.getElementById('remove');
remButton.addEventListener('click',remItem);




function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item)


    if(item === ''){
        return false;
        
    }else{
        //create li
        li = document.createElement('li')
        //create label
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
        //create label
        var label = document.createElement('label')
        label.setAttribute('for','item') //optional 

        // add to website
        ul.appendChild(label) ;
        li.appendChild(checkbox);
        label.appendChild(textnode)
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0])
        setTimeout(() => {
            li.className = 'visual' ;    
        }, 2);
        input.value = ''

    }




}


function remItem() { 
    li = ul.children
   for (let index = 0; index < li.length; index++) {
       while (li[index].children[0].checked) {
           ul.removeChild(li[index])
       }
       
}
}