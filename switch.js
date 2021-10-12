//The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.
var currentDay="Mon"
switch(currentDay) {
    case "Mon":
        console.log('Today is Monday')
        break
        case "Tue":
        console.log('Today is Tuesday')
        break
        case "Wed":
        console.log('Today is Wednesday')
        break
        case "Thu":
        console.log('Today is Thursday')
        break
        default:
            console.log('Sunday')
}