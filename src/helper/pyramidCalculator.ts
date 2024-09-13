const pyramidCalculator = {
  splitNumber(number: string) {
    const date = number.split("-");
    const day = date[0];
    const month = date[1];
    const year = date[2];
    return { day, month, year };
  },

  sumFoot(number: string) {
    var plus = "+";
    while (number.length > 1) {
      number = "" + eval(("" + number).split("").join(plus));
    }
    return number;
  },

  isMasterNumber(num: string) {
    return num == "10" || num == "11";
  },

  sumTop(number: string) {
    var plus = "+";
    while (number.length > 1 && !this.isMasterNumber(number)) {
      number = "" + eval(("" + number).split("").join(plus));
    }
    return number;
  },

  calNumberPyramid(number: string) {
    const date = this.splitNumber(number);

    const leftFoot = this.sumFoot(date.month);
    const midFoot = this.sumFoot(date.day);
    const rightFoot = this.sumFoot(date.year);

    const firstTop = this.sumFoot((leftFoot + midFoot).toString());
    const secondTop = this.sumFoot((midFoot + rightFoot).toString());

    const thirdTop = this.sumTop((firstTop + secondTop).toString());
    const fourthTop = this.sumTop((leftFoot + rightFoot).toString());

    return { firstTop, secondTop, thirdTop, fourthTop };
  },
};

export default pyramidCalculator;
