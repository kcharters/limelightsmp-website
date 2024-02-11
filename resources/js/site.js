// This is all you.
import './bootstrap';
import '../css/app.css';

// header js
document.addEventListener("DOMContentLoaded", () => {
    window.scroll(function(){
      let winTop = window.scrollTop();
      if(winTop >= 30){
        $("body").classList.add("sticky-header");
      }else{
        $("body").classList.remove("sticky-header");
      }
    });
  });