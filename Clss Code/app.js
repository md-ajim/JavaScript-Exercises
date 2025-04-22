function calculate(x){
    form.display.value = form.display.value + x ;
  }

  function erase(){
    var len = form.display.value.length; 
    form.display.value = form.display.value.slice(0,len-1);
  }

  function eraseAll(){
    form.display.value = "";
  }

  function result(){
    form.display.value = eval(form.display.value);
  }