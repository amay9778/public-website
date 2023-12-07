
let isActive =false;
function toggle(){
    if(isActive){
      //disable active
      document.querySelector(selectors,'.humburger').className ='humburger active';
     document.querySelector(selectors,'.shadow').className ='shadow active';
     document.querySelector(selectors,'.mobile-nav').className ='mobile-nav active';
     isActive=false;

    }else{
     //activate
     document.querySelector(selectors,'.humburger').className ='humburger active';
     document.querySelector(selectors,'.shadow').className ='shadow active';
     document.querySelector(selectors,'.mobile-nav').className ='mobile-nav active';
     isActive=true;
    }
}