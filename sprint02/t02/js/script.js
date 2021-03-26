let animalName, gender, age;
function fail() {
  alert("Input is not valid");
}

animalName = prompt("What animal is the superhero most similar to?");
if (!animalName.match(/\b[a-z]{1,20}\b/i)) {
  fail();
} else {
  gender = prompt(
    "Is the superhero male or female?"
  );
  if (!gender.match(/(^$|female|male)/i)) {
    fail();
  } else {
    age = prompt("How old is the superhero?");
    if (!age.match(/\b[1-9]{1,5}\b/)) {
      fail();
    } else {
      if (age < 18) {
        if (gender.match(/^$/)) {
          gender = gender.replace(/^$/, "-kid");
        } else {
          gender = gender.replace(/female/i, "-girl");
          gender = gender.replace(/male/i, "-boy");
        }
      } else {
        if (gender.match(/^$/)) {
          gender = gender.replace(/^$/, "-hero");
        } else {
          gender = gender.replace(/female/i, "-woman");
          gender = gender.replace(/male/i, "-man");
        }
      }
      alert("The superhero name is: " + animalName + gender + "!");
    }
  }
}