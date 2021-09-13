// var conRes= [];
// var finRes = [];


function main(){
    

//create XHR object
var xhttp = new XMLHttpRequest();
//eventlistener
xhttp.onreadystatechange = function(){
    //condition
    if(this.readyState ==4 && this.status == 200){
        //convert json to normal text
        var conRes = JSON.parse(this.responseText)
        console.log(conRes)
        //to accessing objct parameter
        var finRes = conRes.products;
        var final =""
        for(i=0;i<finRes.length;i++){
            final += "<tr>"
            final += "<td>" +finRes[i].slno+"</td>"
            final += "<td>" +finRes[i].name+"</td>"
            final += "<td>" +finRes[i].qty+"</td>"
            final += "<td>" +finRes[i].unit+"</td>"
            final += "<td>" +finRes[i].catagory+"</td>"
            final += "<td>" +finRes[i].description+"</td>"
            final += "</tr>"

        }
        document.getElementById("demo").innerHTML = final;
    }

}
xhttp.open("GET","groceryList.json",true);
xhttp.send()

// var btn1 = document.getElementById("Addbtn")
//     btn1.style.display = "block"
var btn2 = document.getElementById("liBtn")
btn2.style.display = "none"

// function show(){
//     document .getElementById("")
}

function Add(){
   var additem = document.getElementById("AddItem");
   additem.style.display = "block"
    
}


// var ind = 11;

var counter = 10
   function Addnew(){
       counter++;
    //    e.peventDefault();
  var tbody1 = document.querySelector("tbody")
  var table1 = document.querySelector("table")
//   var length = 10 + localStorage.length;
//   var index =  length + 1;
  
   
//    var slno = finRes.length+1; 
   var product = document.getElementById("pname").value;
   var quant = document.getElementById("pqty").value;
   var unit = document.getElementById("punit").value;
   var procat = document.getElementById("pcat").value;
   var pdes = document.getElementById("pdes").value; 
    
   var error = document.getElementById("errmsg")
    if(product =="" | quant =="" |unit ==""|procat ==""|pdes ==""){
        error.innerHTML = "Fields cannot be empty";
        error.style.color = "red"
        return false;
    }else{
        error.innerHTML = ""
    }

    tbody1.innerHTML += `
          <tr>
              <td>${counter}</td>
              
              <td>${product}</td>
              <td>${quant}</td>
              <td>${unit}</td>
              <td>${procat}</td>
              <td>${pdes}</td>
          </tr>
    
    `;
    ++index;
   }
  // hide
  function close() {
    // var x = document.getElementById("additem");
    // if (x.style.display === "block") {
    //   x.style.display = "none";
      document.getElementById("additem").style.visibility = "none";  
    }
  