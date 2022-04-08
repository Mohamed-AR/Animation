let mohamed = document.querySelector(".mohamed");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river.style.top = value + 'px';
  boat.style.top = value + 'px';
  boat.style.left = value * 3 + 'px';
  mohamed.style.fontSize = value + 'px';
  if(scrollY >= 67){
    mohamed.style.fontSize = 67 + 'px';
    if(scrollY >= 555){
    mohamed.style.display = 'none';
    }
    else{
    mohamed.style.display = 'block';
    }
    if(scrollY >= 127){
        main.style.background = 'linear-gradient(#376281,#10001f)';
    }else{
        main.style.background = 'linear-gradient(#200016,#10001f)';
    }
  }
};
