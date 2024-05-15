/*var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult);//This should display the string "No"*/

  //IF ELSE STATEMENT
var minimumVotingAge = 18;
var age = 17;
if(age < minimumVotingAge){
    console.log("Not eligible to vote");
} else {
    console.log("Eligible to vote");
}

//SWITCH STATEMENT

var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

var ageRange = "below 13";
switch (ageRange){
    case "below 1":
        console.log("Infant");
        break;
    case "below 13":
        console.log("Pre-teen");
        break;
    case "below 20":
        console.log("Teenager");
        break;
    default:
        console.log("Adult")
}//This switch statement should print out Pre-teen.
