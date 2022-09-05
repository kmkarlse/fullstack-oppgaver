// Oppgave 1
const btnR = document.getElementById('remove-btn');
const remove = document.getElementById("remove")

btnR.addEventListener('click', () => {
    // Det som skal skje når knappen er trykket
    remove.remove();
    console.log('text ble fjernet');
  });
// Oppgave 2
const btnC = document.getElementById('change-btn')
const change = document.getElementById('change');

btnC.addEventListener('click', () => {
    document.getElementById('change').innerHTML = "Fint vær idag da!";
    console.log('texten ble endret');
}); 
// Oppgave 3
const input = document.querySelector('input');
const inputB = document.getElementById('input-text');

input.addEventListener('change', updateValue);

function updateValue(e) {
    inputB.textContent = e.target.value;
}
// Oppgave 4
let getUl = document.getElementById('ul');
let writeListBtn = document.getElementById('write-list');
const myList = ['item one', 'item two', 'item three'];

const createListElement = () => {
    myList.forEach(Element => {
        let li = document.createElement('li');

        li.innerHTML = Element;
        getUl.appendChild(li);
    });

}

writeListBtn.addEventListener("click", createListElement);

// Oppgave 5
let placeHolder = document.getElementById("placeholder");
let select = document.getElementById("select");
let textInput = document.getElementById("text");
const createBnt = document.getElementById("create");

const createElement = () => {
    let element = document.createElement(select.value); 
    
    element.innerHTML = textInput.value;
    placeHolder.appendChild(element);
}

createBnt.addEventListener("click", createElement);

// Oppgave 6
let list = document.getElementById("list");
let removeLi = document.getElementById("remove-li");

removeLi.addEventListener('click', () => {
    list.lastElementChild.remove();
});

// Oppgave 7
let textName = document.getElementById('name');
const btn = document.getElementById('order');

btn.addEventListener("click",  () => {
    if (textName.value.length > 4)  {
        btn.disabled = true;
        textName.style.borderColor = "red";

    } 
});

textName.addEventListener('change', () => {
    if (textName.value.length <= 4) {
        btn.disabled = false;
        textName.style.borderColor = "grey";
        
    }
});

// Oppgave 8
let color = document.getElementById('color');
let parent = document.getElementsByClassName('children').item(0);

color.addEventListener('click', () => {
    let children = parent.children;

    for (let index = 0; index < children.length; index++) {
        const element = children[index];

        if ((index + 1) % 2 == 0) {
            element.style.border = 'solid pink';
        } else {
            element.style.border = 'solid green';
        
        }

    } 
});