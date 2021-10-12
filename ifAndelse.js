// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to specify many alternative blocks of code to be executed

//if
var Battery=17
if (Battery < 18) {
    Display = "Lowpower";
  }

  console.log(Display)

  //if and else

  var Battery=90
if (Battery < 18) {
    Display = "Lowpower";
  } else  {
      Display="Highpower";
  }

  console.log(Display)

  //if and else if
  var Battery=10
  if (Battery < 18) {
      Display = "Lowpower";
    } else if(Battery > 80) {
        Display="Highpower"; //semicolons are imp
    }
  
    console.log(Display)

    var currentDay="Sunday" 

    if (currentDay === "Monday") {
        console.log('Maths')
    } else if (currentDay === "Tuesday"){
        console.log('Hindi') 
    }else if (currentDay === "Wednesday"){
        console.log('Telugu') 
    }else if (currentDay === "Thursday"){
        console.log('Biology') 
    }else if (currentDay === "Friday"){
        console.log('Physics') 
    }else if (currentDay === "Saturday"){
        console.log('Chemistry') 
    }else if (currentDay === "Sunday"){
        console.log('History') 
    }



