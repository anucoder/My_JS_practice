function isEven(num)
{
  if(num%2===0) return true;
  else return false;
}

function factorial(num)
{
  if(num===0) return 1;
  var fact = num;
  while(num-1>0)
  {
    num--;
    fact = fact * num;
  }
  return fact;
}

function kebabToSnake(str)
{
  //Use a regular expressiion with a g flag //global -g
  var newstring = str.replace(/-/g,"_");
  return newstring;
}
