var bucketlist = [];

var listItem = document.getElementById("list-container");

function addValues(){
    let value = document.getElementById("input-field").value;
    bucketlist.push(value);
    showList();
}

function showList(){
    listItem.innerHTML = "";
    for(let i=0;i<bucketlist.length;i++)
    {
        let li = document.createElement("li");
        li.innerHTML = bucketlist + `<span><img class="checked" onclick="remove(`+i+`)" src="https://i1.faceprep.in/tick-mark.png"/></span`;
        li.className="list";
        listItem.appendChild(li);
    } 
}

function remove(i)
{
    bucketlist.splice(i,1);
    showList();
}

function reset(){
    bucketlist = [];
    showList();
}