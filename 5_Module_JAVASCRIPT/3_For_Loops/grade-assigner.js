//The grade assigner 

function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

  for (number=60; number <= 100; number++) {
      console.log ('For scoring ' + number + ' points, you get a ' + assignGrade(number));
  }