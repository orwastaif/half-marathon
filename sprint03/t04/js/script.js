let houseMixin = {
    wordReplace(minus, plus) {
      this.description = this.description.replace(minus, plus);
    },
    wordInsertAfter(after, word) {
      this.description = this.description.replace(after, after + " " + word);
    },
    wordDelete(minus) {
      this.description = this.description.replace(minus, "");
    },
    wordEncrypt() {
      this.description = (this.description + "").replace(/[a-zA-Z]/gi, function (
        s
      ) {
        return String.fromCharCode(
          s.charCodeAt(0) + (s.toLowerCase() < "n" ? 13 : -13)
        );
      });
    },
    wordDecrypt() {
      this.wordEncrypt();
    },
  };
  
  Object.assign(house, houseMixin);
  
  console.log(house.getDaysToBuild());
  console.log(house.description);
  house.wordReplace("wood", "tile");
  console.log(house.description);
  house.wordDelete("town ");
  console.log(house.description);
  house.wordInsertAfter("with", "marble");
  console.log(house.description);
  house.wordEncrypt();
  console.log(house.description);
  house.wordDecrypt();
  console.log(house.description);
  