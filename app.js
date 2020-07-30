function addItem(){
    // Create List Item
    var list = document.getElementById("list");
    var item = document.createElement("div");
    item.setAttribute("class","item");
    var textDiv = document.createElement("div");
    var btnsDiv = document.createElement("div");
    textDiv.style.marginLeft = "10px";

    // Create Text Node & Span
    var span = document.createElement("span");
    var input = document.getElementById("input");
    // var textNode = document.createTextNode(input.value);
    
    // Create Edit Button
    var editBtn = document.createElement("i");
    editBtn.setAttribute("class","fas fa-pen-square");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.style.color = "#FFC107";

    // Create Delete Button
    var delBtn = document.createElement("i");
    delBtn.setAttribute("class","fas fa-minus-square");
    delBtn.setAttribute("onclick","deleteItem(this)");
    delBtn.style.color = "#DC3545";

    // Create Done Button
    var doneBtn = document.createElement("i");
    doneBtn.setAttribute("class","fas fa-check-square");
    doneBtn.setAttribute("onclick","doneItem(this)");
    doneBtn.style.color = "#28A745";

    // Append Items
    // span.appendChild(textNode);
    span.innerHTML = (input.value.slice(0,1)).toUpperCase() + (input.value.slice(1)).toLowerCase();
    textDiv.appendChild(span);
    btnsDiv.appendChild(doneBtn);
    btnsDiv.appendChild(editBtn);
    btnsDiv.appendChild(delBtn);
    item.appendChild(textDiv);
    item.appendChild(btnsDiv);
    list.appendChild(item);
    input.value = "";
}
// Delete All Function
function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}
// Delete Item Function
function deleteItem(del){
    del.parentNode.parentNode.remove();
}

// Create Done Badge element

// Edit Item Function
function editItem(edit){
    var val = edit.parentNode.parentNode.firstChild.firstChild;
    var newVal = prompt("Enter new Todo",val.firstChild.nodeValue);
    var sup = val.parentNode.lastChild;
    val.firstChild.nodeValue = (newVal.slice(0,1)).toUpperCase() + (newVal.slice(1)).toLowerCase();
    val.style.color = "#000";
    val.style.textDecoration = "none";
    if(sup.nodeName == "SUP"){
        sup.remove();
    }
    else{
        console.log(sup.nodeName);
    }
}
// Task Done Function
function doneItem(e){
    var task = e.parentNode.parentNode.firstChild;
    var badge = document.createElement("sup");
    var textNode = document.createTextNode(" done");
    badge.setAttribute("class","badge");
    badge.appendChild(textNode);
    task.appendChild(badge);
    task.firstChild.style.color = "#28A745";
    task.firstChild.style.textDecoration = "line-through";
}