
//print elements of an array in reverse
function printreverse(arr)
{
  var rev =  arr.reverse();
  rev.forEach((item, i) => {
    console.log(item);
  });
}

//check if all elements of an array are same and return true if so
function isUniform(arr)
{
  if(arr.length==1) return true;
  var first = arr[0];
  for(var i=1;i<arr.length;i++)
  {
    if(first!==arr[i])
      return false;
  }
  return true;
}

//return sum of the elements of an array
function sumArray(arr)
{
  if(arr.length==1) return arr[0];
  var sum = arr[0];
  for(var i=1;i<arr.length;i++)
  {
    sum += arr[i];
  }
  return sum;
}
//return max of the elements of an array
function max(arr)
{
  if(arr.length==1) return arr[0];
  var max = arr[0];
  for(var i=1;i<arr.length;i++)
  {
    if(max<arr[i]) max = arr[i]
  }
  return max;
}
