let button = document.getElementById("button");
var numberInShape=1;
var oldValue=0;


button.onclick= () =>{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const rect=document.getElementById("rectangle");
    const square=document.getElementById("square");
    const box=document.getElementById("box");
    const col=document.getElementById("co").value;

    

    n=Number(n)+Number(oldValue);

    for(let j=numberInShape;j<=n;j++){
        let shape = document.createElement("div");
        shape.innerHTML+=numberInShape;
        if(circle.checked){
            shape.classList.add("circle");}
        else if(square.checked){
                shape.classList.add("square");}
        else if(rect.checked){
                shape.classList.add("rectangle");}
        else {
            document.write("Invalid Input");
        }
            numberInShape++;
            box.appendChild(shape);
            oldValue=document.getElementById("box").lastElementChild.innerHTML;
            shape.style.backgroundColor= col;
    }
};