inp=document.querySelector("input");
btn=document.querySelector("#add");
ul=document.querySelector("ul");
btn.addEventListener("click",()=>{
    li=document.createElement("li");
    li.innerText=inp.value
   
    delbtn=document.createElement("button");
    delbtn.innerText="delete"
    delbtn.classList.add("delete")
    li.appendChild(delbtn)
    ul.appendChild(li);
    inp.value=""
})
ul.addEventListener("click",(e)=>{
   if(e.target.nodeName=="BUTTON"){
      let item=e.target.parentElement;
      item.remove();

   }
})


// delclassbtns=document.querySelectorAll(".delete"); //THIS ONLY APPLY FOR EXISTING ITEMS IN LIST // 
// for(delclassbtn of delclassbtns){ 
//     delclassbtn.addEventListener("click",()=>{ 
//         let para=delclassbtn.parentElement;
//          console.log(para); //        
//  para.remove(); //     }) // }