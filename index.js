// UTILITY
function printValue(value){
    console.info(value)
}

// 1.0 DEFINE VARIABLES
//TODO: ADD fixed variable
// const pi = 3.142
// printValue(pi)

//TODO: ADD redeclarable variable
var radius = 20
radius = 30
printValue(radius)
//TODO: ADD re-assignable but not redeclarable variable
let age = 16
age = 14
printValue(age)

// 2.0 DIFFERENT DATA TYPES
//TODO: Create a fixed variable with a number value
const number = 20;

//TODO: Create a redeclarable variable with a boolean value
var goon = true
printValue(goon)

//TODO: Create a re-assignable variable with a string value
let fName = 'Alex'
let lastName = 'Thiga'
printValue(fName)

// 3.0 STRING OPERATIONS
//TODO: Concatenate string (+)
let fullName = fName +' ' + lastName
printValue(fullName)

//TODO: Interpolate string (`${}`)
let othername = `Name: ${fullName}`
printValue( othername )
let anotherName = `Name: ${ fName } ${ lastName }`
printValue(anotherName)
//TODO: Convert to uppercase
printValue(anotherName.toUpperCase())

//TODO: Convert to lowercase
printValue(fullName.toLowerCase())

//TODO: Index a specific character
printValue(anotherName.charAt(1))

//TODO: PRACTICE ON YOUR OWN (Check mozilla documentation)


// 4.0 COMPARISON
//TODO: strict equality
printValue(5 === '5')

//TODO: strict inequality
printValue( 5 !== '5')

//TODO: equality
printValue(5 == '5')

//TODO: inequality
printValue(5 != '5')

//TODO: greater than
printValue(9 > 5)

//TODO: less than

printValue( 3< 5)
//TODO: greater or equal to
printValue(22 >= 20)

//TODO: less or equal to
printValue( 19 <= 20)


// 5.0 CONTROL FLOW
// TODO: if-else statement
// one option
const wheels = 5
if ( wheels > 4 )
{
    printValue('this is a truck')
}

// two options
if(wheels > 4)
{
  printValue("this is a truck");
}else{
  printValue('this is a bike')
}

//TODO: switch-case
const grade = 'a';
switch ( grade )
{
  case 'A':
    printValue( 'Well done' );
    break;
  case 'B':
    printValue( 'Good try' );
    break;
  case 'D':
    printValue( 'see me' );
    break;
  default:
    printValue('you seem lost')
}





