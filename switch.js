// switch case

let grade = parseInt(prompt("Enter your grade (0-100):"));

switch (true) {
  case grade >= 90 && grade <= 100:
    console.log("You received an A.");
    break;
  case grade >= 80 && grade < 90:
    console.log("You received a B.");
    break;
  case grade >= 70 && grade < 80:
    console.log("You received a C.");
    break;
  case grade >= 60 && grade < 70:
    console.log("You received a D.");
    break;
  case grade >= 0 && grade < 60:
    console.log("You received an F.");
    break;
  default:
    console.log("Invalid grade entered.");
}
