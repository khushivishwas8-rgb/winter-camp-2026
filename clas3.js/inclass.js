  let ctr = 0;
  function callback(){
    console.log(ctr);
    ctr = ctr + 1;
  }
  
  
  setInterval(callback,1000); 

  let x = 0;
  for(let i =1; i<=400; i++){
    x = x + i;

  }
console.log(x)
  
