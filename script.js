
function myFunction(){
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  const myObj = myArr['employees'];// ----myObj = myArr.employees--
  let table = "<b>Employees Details :- </b> " + "<br>"+"<table border = '1'>"+"<tr><th>Name </th><th> Age </th><th> City </th><th>Type</th>";
  for(let i=0, len=myObj.length; i<len; i++){
    table += "<tr><td>" +
     myObj[i].name + 
    "</td><td>" +
     myObj[i].age + 
     "</td><td>" +
     myObj[i].city +
     "</td><td>"  +
     myObj[i].gaon +
    " </td></tr>"
  }
  document.getElementById("demo").innerHTML = table;
  document.getElementById("demo3").innerHTML = myObj[i].gaon;
}
xmlhttp.open("GET", "Practice.json");
xmlhttp.send();
}
/********New  JSON pactice***************/
const button = document.getElementById('btn');

function myData(){
const xhr = new XMLHttpRequest();
xhr.onload = function(){
  let obj = JSON.parse(this.responseText);
  let text = ""
  for(let y in obj){
    text += "Name -" + obj[y].name + ", " + "Age - "+ obj[y].age + ", city - "+obj[y].city
  }
  document.getElementById("demo2").innerHTML = text;
}
xhr.open('Get', "https://mocki.io/v1/d68d19ae-f6a1-49a3-bbfc-c1bf1f48aa29");
xhr.send();

  const newButton = document.createElement('button');
  newButton.textContent = 'Click me!';
  document.body.appendChild(newButton);
  newButton.addEventListener('click', () => {
    myFunction();
    newButton.style.display = "none";
    btn.style.display = "none";
    demo2.style.display = "none";
  });
}
