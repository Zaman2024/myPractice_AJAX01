
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

/**-------------------------
const Teachers = [
  {
    name: 'saritha',
    subject: 'Maths'
  },
  {
    name: 'ahim',
    subject: 'science'
  },
  {
    name: 'sneha',
    subject: 'Social'
  }]

Teachers.forEach(teacher => {
  for (let x in teacher) {
    document.getElementById('demo').innerHTML = `${teacher[x]}`
  }
})


const arr = [{ x:1 }, { x: 2 }, { x: 3 }];
 
arr.forEach((element, index, array) => {
    console.log(element.x);    
});


/****Run loops throw nested Arry ****************

let myArr = [[1, 2, 3, 4, 5, 6, 7],
[45, 3, 3, 4, 5, 6, 9, 36],
[5, 6, 7, 4],
[13, 21, 35, 74, 5]
];

let x = myArr.length;
for (let i = 0; i < x; i++) {
  let items = myArr[i].length;
  console.log(i, items);
  for (let n = 0; n < items; n++) {
    console.log(myArr[i][n]);
  }
}
**************************************/
/************Run Loops throuw the Nested Object***********
let myData = {
  employees: [
    { name: "Sadik", age: 31, city: "Guwahati" },
    { name: "Ayan", age: 12, city: "morigaon" },
    { name: "Heena", age: 31, city: "Nagaon" },
    { name: "Zaman", age: 31, city: "Silchar" }
  ]
}

let myObj = myData['employees'];
for (let i = 0, len = myObj.length; i <len ; i++) {
  console.log(myObj[i]);
  document.getElementById('demo4').innerHTML = myObj[i].name + " , Age : " +myObj[i].age;
}
*** */
