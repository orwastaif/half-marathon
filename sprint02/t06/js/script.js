
var firstName = prompt('Enter your first name')
var lastName = prompt('Enter your last name')

if (firstName.match(/^[a-z]{1,20}$/) && lastName.match(/^[a-z]{1,20}$/)) {

  var capital1= firstName[0].toUpperCase() + firstName.slice(1);
  var capital2 = lastName[0].toUpperCase() + lastName.slice(1);

  alert('Hello ' + capital1 + ' ' + capital2)
  console.log(`Hello ${capital1} ${capital2}`)

} else {
  alert('Wrong input')
  console.log(`wrong input`)
}