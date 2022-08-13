class Player {
    
    constructor(firstName, lastName, rating) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.rating = rating;
      this.numBlacks = 0;
      this.results = [];
      this.hasBye = false;
      this.numPoints = 0;
      this.opponents = new Set();
    }

    set setNumBlacks(numBlacks) {
        this.numBlacks = numBlacks;
    }

    set updateNumPoints(result) {
        this.points += result;
    }

    giveBye() {
        this.hasBye = true;
    }

}