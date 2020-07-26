function addItem(){
    var val = document.getElementById("val");
    var textNode = document.createTextNode(val.value);
    var list = document.getElementById("list");
    var item = document.createElement("li");
    var editBtn = document.createElement("button");
    var delBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
    var delBtnText = document.createTextNode("Delete");
    editBtn.appendChild(editBtnText);
    delBtn.appendChild(delBtnText);
    delBtn.setAttribute("onclick","deleteItem(this)");
    editBtn.setAttribute("onclick","editItem(this)");
    item.appendChild(textNode);
    item.appendChild(editBtn);
    item.appendChild(delBtn);
    list.appendChild(item);
    val.value = "";
}
function deleteAll(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}
function deleteItem(del){
    del.parentNode.remove();
}
function editItem(edit){
    var val = edit.parentNode.firstChild;
    var newVal = prompt("Enter new Todo",val.nodeValue);
    val.nodeValue = newVal;
    console.log(val.nodeValue)
    // console.log(val);
}