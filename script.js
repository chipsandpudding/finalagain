var display = document.body.querySelector(".display");

function validation(){
  var username = document.body.querySelector(".username").value;
  var password = document.body.querySelector(".password").value;
  var message = document.body.querySelector(".message");
  var validate = document.body.querySelector(".validate");
  if(username === "cool" && password === "password"){
    display.removeChild(validate);
    validated();
  }else if(username ==="cool"){
    message.innerHTML = "Password incorrect";
  }else if(password ==="password"){
    message.innerHTML = "Username incorrect";
  }else{
    message.innerHTML = "Username and password incorrect"
  }
  
  
}//end validation

document.body.querySelector(".submit").addEventListener("click", function(){validation();});





function validated(){
var nav = document.body.querySelector(".nav");
var student = [];
var grade =[];

var pages = [
  {
    title:"Grade",
    content:""
  },
  {
    title:"Add Grade",
    content:""
  }
  
]//pages

for(var i=0; i<pages.length; i++){
  new pageMaker(pages[i]);
}//for

function pageMaker(input){
  this.button = document.createElement("button");
  this.button.innerHTML = input.title;
  this.button.addEventListener("click",function(){
    writepage(input.title, input.content)
                          })
  nav.appendChild(this.button);
}//pageMaker




function writepage(title,content){
  display.innerHTML="";
  if(title === "Grade"){
    interact(title);
  }else if(title === "Add Grade"){
  view(title);}
   else{  
     writecontent(title,content);
        }//end else
}//end function writepage

function writecontent(title,content){
  
  var header = document.createElement("h1");
  var contentinput = document.createElement("h3");
  
  header.innerHTML = title;
  contentinput.innerHTML = content;
  
  display.appendChild(header);
  display.appendChild(contentinput);
  
}//end function writecontent

function interact(title){
    
var list1 = document.createElement("div");
list1.className = "list";
    
var header = document.createElement("h1");
header.innerHTML = title;
display.appendChild(header);
  
  list1.innerHTML = "";
  for(var i=0; i<student.length; i++){
    var holder = document.createElement("div");
    holder.innerHTML = "Student Name: " + student[i] + "   Grade: " + grade[i];
    list1.append(holder);
  }//end for
  display.appendChild(list1);
}//end function interact


function view(title){

var header = document.createElement("h1");
header.innerHTML = title;
display.appendChild(header);
  
var message = document.createElement("div");
message.innerHTML = "";
  
var btn = document.createElement("button");
btn.innerHTML = "Submit";
btn.className = "addItem";
btn.addEventListener("click",function(){itemEntered();});
  
var input1 = document.createElement("input");
input1.type = "text";
input1.className = "itemName";
input1.placeHolder = "username";
input1.setAttribute("placeholder","Student Name");
  
var input2 = document.createElement("input");
input2.type = "text";
input2.className = "itemImport";
input2.setAttribute("placeholder","Grade");


    
display.appendChild(input1);
display.appendChild(input2);
display.appendChild(btn);
  




function itemEntered(){
  var itemName = document.body.querySelector(".itemName").value;
  var itemImport = document.body.querySelector(".itemImport").value;
  var check = typeof itemName;
  
   if(itemName.length>0 && itemImport >= 0 && check === "string" && itemImport.length>0){
     message.innerHTML = "";
     display.appendChild(message);
     student.push(itemName);
     grade.push(itemImport);
     display.innerHTML="";
    interact("Grade");
   }else{
     message.innerHTML = "Please input a valid student name and a grade number";
     display.appendChild(message);
        }//end else
    
}//end itemEntered

 
}//end function view
  
  
 writepage(pages[0].title,pages[0].content);
}//end function validated