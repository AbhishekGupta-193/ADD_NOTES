//EXAMINE THE DOCUMENT PROPERTIES//

//console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//document.title=123
//console.log(document.url);
//console.log(document.head);
//console.log(document.body);

/* console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='Hello';
console.log(document.forms[0]); 
console.log(document.links); */

//var button=document.getElementById('button');
//addEventListener('mousemove',buttonClick);

//function buttonClick(e){
   // console.log("Button Clicked");
   // document.getElementById('header-title').textContent="Changed";
   // document.querySelector('#main').getElementsByClassName.backgroundColor="";
   //console.log(e.clientX);
 //output.innerHTML='<h3>MouseX: '+e.offsetX+'</h3> <h3>MouseY: '+e.offsetY+'</h3>';}
 

 var form=document.querySelector('.form-inline');
 var input_val=document.querySelector('#input');
 var li=document.querySelector('#items')
 form.addEventListener('submit',addItem);
 html = ''



 function addItem(e){
   e.preventDefault()
  //  console.log(input_val.value);
  var Li=document.createElement('li');
  Li.className='list-grp-items';
  var text=document.createTextNode(input_val.value);
  Li.appendChild(text);
  var Btn=document.createElement('button');
  Btn.className='item-btn';
  Btn.appendChild(document.createTextNode('X'));
  Li.appendChild(Btn);
  li.append(Li);
  input_val.value = ''
  //SHORTCUT TO DO THE ABOVE
  // html += `<li class="list-grp-items">${input_val.value}<button class="item-btn"><span>X</span></button></li>`
  // li.innerHTML = html
 }

//  var Li_item=document.querySelector('.list-grp-items');
 var BTN=document.querySelector('.list-group');
 BTN.addEventListener('click',removeItem);
 function removeItem(e){
   e.preventDefault();
  //  console.log(2);
      // console.log(e.target.classList)
   if(e.target.classList.contains('item-btn')){
     if(confirm('Item will be permanently deleted')){
       var a = e.target.parentElement;
      //  console.log(a)
       li.removeChild(a);
     }
   }

 }

var Button=document.querySelector('.delete-all');
Button.addEventListener('click',deletion);
function deletion(e){
var baap = document.querySelectorAll('.list-grp-items')
naya_baap = Array.from(baap)
naya_baap.forEach(item => {
  li.removeChild(item)
});
// console.log(naya_baap)
}

var searchBar=document.getElementById('search-bar');
searchBar.addEventListener("input",filterItems);
// function search(e){
//   console.log(e.target.value);

//   var baap = document.querySelectorAll('.list-grp-items')
// naya_baap = Array.from(baap)
// naya_baap.forEach(item => {
// });


// }

function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = document.querySelectorAll('.list-grp-items')
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    // console.log(itemName.toLowerCase().indexOf(text))
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}