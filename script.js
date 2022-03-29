"use strict";
document.getElementById("submit").addEventListener("click",function(){
    let form=document.getElementById("myform")
    let fname=document.getElementById("firstname");
    let lname=document.getElementById("lastname");
    let address=document.getElementById("address");
    let pincode=document.getElementById("pincode");
    let gender=document.querySelector('input[name="gender"]:checked');
    let choiceoffood=document.querySelectorAll('input[name="food"]:checked');
    let choices=[];
    if(choiceoffood.length>=2){
    choiceoffood.forEach((choiceoffoods)=>{
        choices.push(choiceoffoods.id)
    });}else{
        alert("select minimum two food choices");
        
    }
    //let choiceoffood=document.getElementsByName("food");
    let state=document.getElementById("state");
    let country=document.getElementById("country");


    let table=document.getElementById("tab_info");
    //add row
    let rowCount=table.rows.length;
   //console.log(rowCount);
    let row=table.insertRow(rowCount);
    //add column
    row.insertCell(0).innerHTML=fname.value;
    row.insertCell(1).innerHTML=lname.value;
    row.insertCell(2).innerHTML=address.value;
    row.insertCell(3).innerHTML=pincode.value;
    row.insertCell(4).innerHTML=gender.id;
    row.insertCell(5).innerHTML=choices;
    row.insertCell(6).innerHTML=state.value;
    row.insertCell(7).innerHTML=country.value;
    //clear input
    document.querySelector("form").reset();

});
