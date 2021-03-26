class Human {
  constructor(firstName, lastName, gender, age, calories) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.calories = calories;
    this.$firstName = document.getElementById("first-name");
    this.$lastName = document.getElementById("last-name");
    this.$gender = document.getElementById("gender");
    this.$age = document.getElementById("age");
    this.$calories = document.getElementById("calories");
    this.$speach = document.getElementsByClassName("speach")[0];
    this.$portrait = document.getElementsByClassName("portrait")[0];
  }
  sleepFor() {
    waiting = true;
    talk(this, `I'm sleeping now...`, 5000);
    this.$portrait.src = "assets/sleeping.gif";
    setTimeout(() => {
      talk(this, `I'm awake now!`, 3000);
      this.$portrait.src = "assets/Eddie Brock.jpeg";
      waiting = false;
    }, 5000);
    
  }

  feed() {
    if (!hungry) {
      this.$speach.textContent = `I'm not hungry`;
      this.$speach.style.color = "red";
      this.$portrait.style.transform = "scale(1.05)";
      waiting = false;
      setTimeout(() => {
        this.$portrait.style.transform = "scale(1.0)";
        this.$speach.style.color = "black";
      }, 500);
      setTimeout(() => {
        this.$speach.textContent = "...";
      }, 3000);
    } else {
      clearInterval(global);
      this.$speach.textContent = `Nom nom nom`;
      this.$speach.style.color = "red";
      this.$portrait.src = "assets/eating.gif";
      this.$portrait.style.transform = "scale(1.05)";
      
      setTimeout(() => {
        this.$portrait.style.transform = "scale(1.0)";
        this.$speach.style.color = "black";
      }, 500);
      setTimeout(() => {
        this.$speach.style.color = "red";
        


        this.calories += 200;
        if (this.calories >= 200) {
          hungry = false;
          this.$speach.textContent = `I'm not hungry now!`;
          this.$portrait.src = "assets/Eddie Brock.jpeg"
        } else {
          this.$speach.textContent = "I'm still hungry";
          this.$portrait.src = "assets/Eddie Brock.jpeg"
        }

        this.$calories.textContent = this.calories;
        this.$calories.style.color = "red";
        setTimeout(() => {
          this.$calories.style.color = "black";
          this.$speach.style.color = "black";
        }, 500);
        setTimeout(() => {
          this.$speach.textContent = "...";
        }, 3000);
        waiting = false;
        everyMinuteHunger();
      }, 10000);
    }
  }
}

class Superhero extends Human {
  constructor(age, calories, gender, name, fightDuration) {
    super(age, calories, gender);
    this.name = name;
    this.fightDuration = fightDuration;
    
  }
  fly() {
    waiting = true;
    talk(this, `I'm flying!`, 10000);
    this.$portrait.src = "assets/fly.gif";
    setTimeout(() => {
      talk(this, `I'm landed!`, 2000);
      this.$portrait.src = "assets/venom.gif";
      waiting = false;
    }, 10000);
  }
  fightWithEvil(fightDuration) {
    fightDuration = fightDuration * 1000;
    if (
      typeof fightDuration === "number" &&
      !Number.isNaN(fightDuration) &&
      fightDuration
    ) {
      waiting = true;
      talk(this, "Khhhh-chh... Bang-g-g-g... ", fightDuration);

      this.$portrait.src = "assets/fight1.gif";

      setTimeout(() => {
        talk(this, "Evil is defeated!", 3000);
        this.$portrait.src = "assets/turn.gif";
        waiting = false;
      }, fightDuration);
    } else {
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, 3000);
      talk(this, "I need a number of seconds for my fight!", 3000);
    }
  }

  }
 

const person = new Human("Eddie", "Brock", "male", 35, 0);

let waiting = false;
let global;

let applyCharacters = () => {
  person.$firstName.textContent = person.firstName;
  person.$lastName.textContent = person.lastName;
  person.$gender.textContent = person.gender;
  person.$age.textContent = person.age;
  person.$calories.textContent = person.calories;
};

let everyMinuteHunger = () => {
  clearInterval(global);
  global = setInterval(() => {
    if (person.calories !== 0 && waiting === false) {
      person.calories -= 200;
      person.$calories.textContent = person.calories;
      imHungry();
      console.log("Every minute hunger...");
    }
  }, 60000);
};

let imHungry = () => {
  if (!waiting) {
    waiting = true;
    talk(person, `I'm hungry...`, 3000);
    setTimeout(() => {
      waiting = false;
    }, 3000);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  applyCharacters();
  everyMinuteHunger();
  setTimeout(() => {
    imHungry();
  }, 5000);
});

let $sleepButton = document.getElementsByClassName("sleep")[0];
$sleepButton.onclick = () => {
  if (!waiting) {
    waiting = true;
    person.sleepFor();
  }
};

let hungry;

let $eatButton = document.getElementsByClassName("feed")[0];
$eatButton.onclick = () => {
  if (person.calories >= 200) {
    hungry = false;
  } else {
    hungry = true;
  }
  if (!waiting) {
    waiting = true;
    person.feed();
  }
};

let talk = (author, message, duration) => {
  author.$speach.textContent = message;
  author.$speach.style.color = "red";
  author.$portrait.style.transform = "scale(1.05)";
  setTimeout(() => {
    author.$speach.textContent = "...";
  }, duration);
  setTimeout(() => {
    author.$speach.style.color = "black";
    author.$portrait.style.transform = "scale(1.0)";
  }, 500);
};

let $fly = document.getElementsByClassName("fly")[0];
let $fight = document.getElementsByClassName("fight")[0];
let fightDuration;

const hero = new Superhero(
  person.age,
  person.calories,
  person.gender,
  "Venom",
  100
);

let changeDisplay = () => {
  $eatButton.style.display = "none";
  $sleepButton.style.display = "none";
  $turnSuperhero.style.display = "none";
  $fly.style.display = "block";
  $fight.style.display = "block";
  person.$portrait.src = "assets/turn.gif";
  document.getElementsByClassName("title")[0].textContent = hero.name;
  document.getElementsByClassName("property")[0].style.display = "none";
  document.getElementsByClassName("property")[1].style.display = "none";
  document.getElementsByClassName("property")[2].style.display = "inline";
  document.getElementById("hero__name").textContent = hero.name;
  document.getElementsByClassName('calories_prop')[0].style.display ='none'
};

let $turnSuperhero = document.getElementsByClassName("turn")[0];
$turnSuperhero.onclick = () => {
  if (!waiting) {
    if (hungry === false) {
      talk(person, "Venom is here ", 3000);
      changeDisplay();
      clearInterval(global);
      
    } else {
      imHungry();
    }
  }
};

$fly.onclick = () => {
  if (!waiting) {
    hero.fly();
  }
};

$fight.onclick = () => {
  if (!waiting) {
    hero.fightWithEvil(
      (fightDuration = Number(prompt("Enter fight duration! (seconds)")))
    );
  }
};