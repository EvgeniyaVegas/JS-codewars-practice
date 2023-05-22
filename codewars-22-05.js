//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let temp = 0;
      for (let i = 0; i < args.length-1; i++) {
        for (let j = i + 1; j < args.length; j++) {
          if (args[i] > args[j]) {
            temp = args[i];
            args[i] = args[j];
            args[j] = temp;
          }
        }
      }
      return args[0];
    }
  }

  //Geometry Basics: Circle Circumference in 2D

  //Training JS #12: loop statement --for..in and for..of