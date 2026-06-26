function GradeCalculation(mark) 
    {
        let marks=mark;
switch (true) {
case (marks >= 90):
    console.log("A");
    break;
case (marks >= 80):
    console.log("B");
    break;
case (marks >= 70):
    console.log("C");
    break;
case (marks >= 60):
    console.log("D");
    break;
default:
    console.log("F");
}

    }
    GradeCalculation(85);