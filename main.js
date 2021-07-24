const age=document.getElementById("age");
const university=document.getElementById("university");
const department=document.getElementById("department");
const hoby=document.getElementById("hoby");
const food=document.getElementById("favorite-food");
const ett=document.getElementById("favorite-ett");
const form=document.getElementById("form")
const textarea=document.getElementById("textarea");
const button=document.getElementById("button");
const ac=document.getElementById("ac");
const box=document.getElementById("box");
const box2=document.getElementById("box4");

age.onmouseover=function(){
    age.style.fontSize=300+'%';
    age.textContent=20;
    university.style.fontSize=50+'%';
    department.style.fontSize=50+'%';
    hoby.style.fontSize=50+'%';
    food.style.fontSize=50+'%';
    ett.style.fontSize=50+'%';
}
age.onmouseout=function(){
    age.style.fontSize=100+'%';
    age.textContent="Age";
    university.style.fontSize=100+'%';
    department.style.fontSize=100+'%';
    hoby.style.fontSize=100+'%';
    food.style.fontSize=100+'%';
    ett.style.fontSize=100+'%';
}
university.onmouseover=function(){
    university.style.fontSize=300+'%';
    university.textContent="Rikkyo";
    age.style.fontSize=50+'%';
    department.style.fontSize=50+'%';
    hoby.style.fontSize=50+'%';
    food.style.fontSize=50+'%';
    ett.style.fontSize=50+'%';
}
university.onmouseout=function(){
    university.style.fontSize=100+'%';
    university.textContent="College";
    age.style.fontSize=100+'%';
    department.style.fontSize=100+'%';
    hoby.style.fontSize=100+'%';
    food.style.fontSize=100+'%';
    ett.style.fontSize=100+'%';
}
department.onmouseover=function(){
    department.style.fontSize=300+'%';
    department.textContent="Economics";
    age.style.fontSize=50+'%';
    university.style.fontSize=50+'%';
    hoby.style.fontSize=50+'%';
    food.style.fontSize=50+'%';
    ett.style.fontSize=50+'%';
}
department.onmouseout=function(){
    department.style.fontSize=100+'%';
    department.textContent="Department";
    university.style.fontSize=100+'%';
    age.style.fontSize=100+'%';
    hoby.style.fontSize=100+'%';
    food.style.fontSize=100+'%';
    ett.style.fontSize=100+'%';
}
hoby.onmouseover=function(){
    hoby.style.fontSize=300+'%';
    hoby.textContent="Basketball";
    age.style.fontSize=50+'%';
    university.style.fontSize=50+'%';
    department.style.fontSize=50+'%';
    food.style.fontSize=50+'%';
    ett.style.fontSize=50+'%';
}
hoby.onmouseout=function(){
    hoby.style.fontSize=100+'%';
    hoby.textContent="Hoby";
    university.style.fontSize=100+'%';
    age.style.fontSize=100+'%';
    department.style.fontSize=100+'%';
    food.style.fontSize=100+'%';
    ett.style.fontSize=100+'%';
}
food.onmouseover=function(){
    food.style.fontSize=300+'%';
    food.textContent="Noodle";
    age.style.fontSize=50+'%';
    university.style.fontSize=50+'%';
    department.style.fontSize=50+'%';
    hoby.style.fontSize=50+'%';
    ett.style.fontSize=50+'%';
}
food.onmouseout=function(){
    food.style.fontSize=100+'%';
    food.textContent="Food";
    university.style.fontSize=100+'%';
    age.style.fontSize=100+'%';
    department.style.fontSize=100+'%';
    hoby.style.fontSize=100+'%';
    ett.style.fontSize=100+'%';
}
ett.onmouseover=function(){
    ett.style.fontSize=300+'%';
    ett.textContent="SandwichMen";
    age.style.fontSize=50+'%';
    university.style.fontSize=50+'%';
    department.style.fontSize=50+'%';
    hoby.style.fontSize=50+'%';
    food.style.fontSize=50+'%';
}
ett.onmouseout=function(){
    ett.style.fontSize=100+'%';
    ett.textContent="Entertainer";
    university.style.fontSize=100+'%';
    age.style.fontSize=100+'%';
    department.style.fontSize=100+'%';
    hoby.style.fontSize=100+'%';
    food.style.fontSize=100+'%';
}
button.onclick=function(){
    form.style.display='block';
}
ac.onclick=function(){
    textarea.textContent="";
}
