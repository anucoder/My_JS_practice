var todo = [];
var option;
while(option!=="quit")
{
    var option = prompt("What would you like to do ?");
    if(option==="new")
    {
      var newtodo = prompt("Enter a new todo");
      todo.push(newtodo);
      console.log(newtodo+" added to TODO");
    }
    else if(option === "list")
    {
      console.log("***********************")
      todo.forEach((item,i) => {
        console.log(i+": "+item);
      });
      console.log("***********************")
    }
    else if(option === "delete")
    {
      var delindx = Number(prompt("Enter the index of the todo"));
      var removed = todo.splice(delindx,1);
      console.log(removed+ " removed from the array");
    }
}
