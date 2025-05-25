//cartdiv hover logic
const cartimage=document.querySelector(".cartimage");
const hoverdiv=document.querySelector(".hoverdiv");
hoverdiv.addEventListener("mouseover",()=>{
   hoverdiv.style.display="block";
});
hoverdiv.addEventListener("mouseout",()=>{
   hoverdiv.style.display="none";
});
cartimage.addEventListener("mouseover",()=>{
   hoverdiv.style.display="block";
});
cartimage.addEventListener("mouseout",()=>{
   setTimeout(() => {
      if(!hoverdiv.matches(":hover")){
         hoverdiv.style.display="none";
      }
   }, 100);
});

//main image section
const smallimages=document.querySelectorAll(".bg-images");
const mainimage=document.querySelector(".mainimage");
function resetall(){
   smallimages.forEach(div=>{
      div.style.backgroundImage="";
      div.style.border="";
   });
};
smallimages.forEach(div=>{
   div.addEventListener("click",function(){
      resetall();
      const imagepath=this.dataset.image;
      const num=Number(imagepath.replace(/\D/g,""));
      console.log(num);
      this.style.backgroundImage=`linear-gradient(rgba(201, 199, 196, 0.448), rgba(201, 199, 196, 0.448)), url('${imagepath}')`;
      this.style.border="3px solid rgb(255, 166, 0)";
      mainimage.src=`images/image-product-${num}.jpg`;
   });
});

// plus minus;
const minus=document.querySelector(".minus");
const plus=document.querySelector(".plus");
const text = document.querySelector(".count");

let count=0;
plus.addEventListener("click",()=>{
   count++;

   text.textContent=count;
   countdisplay(count);
});
minus.addEventListener("click",()=>{
   if(count>0){
      count--;
      text.textContent=count;
      countdisplay(count);
   }
});

//add to cart
const count1=document.querySelector(".count1");
const totalammount=document.querySelector(".totalammount");
const addtcart=document.querySelector(".addcartoption");
addtcart.addEventListener("click",()=>{
   console.log(count);
   if(count>0){
      document.querySelector(".lowerhoverdiv").style.display="none";
      document.querySelector(".lowwerdivifselected").style.display="block";
      count1.textContent=count;
      const total=count*125;
      totalammount.textContent=total.toFixed(2);

   }else{
      document.querySelector(".lowerhoverdiv").style.display="";
      document.querySelector(".lowwerdivifselected").style.display="none";
   }
});


//working on delete image
const delet=document.querySelector(".delet");
delet.addEventListener("click",()=>{
   document.querySelector(".lowerhoverdiv").style.display="";
      document.querySelector(".lowwerdivifselected").style.display="none";
      countdisplay(0);
      count=0;
      text.textContent=count;
});

//count display on cart

const div=document.querySelector(".itemcount");
const display=document.querySelector(".itemscount");
function countdisplay(count){
   div.style.display="flex";
   if(count==0){
      div.style.display="none";
   }
   display.textContent=count;
}

//menu bar for mobile
const menuediv=document.querySelector(".menusection");
const memu=document.querySelector(".menu");
const cross=document.querySelector(".cross");
const mobilecart=document.querySelector(".mobilecartimage");
memu.addEventListener("click",(event)=>{
   event.stopPropagation();
   menuediv.style.display="block";
});
cross.addEventListener("click",()=>{
   menuediv.style.display="none";
})



// jas code for mobile cart

const mobilecount=document.querySelector(".mobilecount");
const mobiletotalammount=document.querySelector(".mobiletotalammount");
const cartdiv=document.querySelector(".cartdiv");
const allfullcart=document.querySelector(".allfullcart");
mobilecart.addEventListener("click",(event)=>{
   event.stopPropagation();
   if(count>0){
      document.querySelector(".emptycart").style.display="none";
      allfullcart.style.display="block"
      mobilecount.textContent=count;
      const mobiletotal=count*125.00;
      mobiletotalammount.textContent=`$${mobiletotal.toFixed(2)}`;
   }else{
      allfullcart.style.display="none";
      document.querySelector(".emptycart").style.display="";
   }
   cartdiv.style.display="block";
});
document.addEventListener("click", () => {
  cartdiv.style.display = "none";
  menuediv.style.display="none";
});