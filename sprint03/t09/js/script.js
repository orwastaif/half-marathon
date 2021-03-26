let validator = {
    set: function (obj, prop, value) {
      if (prop === "age") {
        if (!Number.isInteger(value)) {
          throw new TypeError("The age is not an integer");
        }
        else if (Number(value) > 200) {
          throw new RangeError("The age is invalid");
        } else {
          console.log(`Setting value '${value}' to '${prop}'`);
          obj[prop] = value;
          return obj[prop];
        }
      }
      console.log(`Setting value '${value}' to '${prop}'`);
      obj[prop] = value;
      return obj[prop];
    },
    get: (obj, prop, value) => {
      console.log(`Trying to access the property '${prop}'...`);
  
      if (!prop) {
        return false;
      }
      return obj[prop];
    },
  };
  
  let person = new Proxy({}, validator);
  person.age = 100;
  // Setting value'100' to 'age'
  console.log(person.age);
  // Trying to access the property'age'...
  // 100
  person.gender = "male";
  // Setting value'male' to 'gender'
  person.age = "young";
  // Uncaught TypeError: The age is not an integer
  person.age = 300;
  // Uncaught RangeError: The age is invalid