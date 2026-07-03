Result(gradeCalculation,averageMarks);

function Result(avg,grade)
 {
 let marks1 = 80;
 let marks2 = 79;
 let marks3 = 70;
let totalMarks = marks1 + marks2 + marks3;
console.log("Total Marks: " + totalMarks);

// const average = averageMarks(totalMarks);
// calculate(average);

avg(totalMarks)
grade(totalMarks)

}

function averageMarks(total) {
    const average = total / 3;
    console.log("Average Marks: " + average);
    

}

function gradeCalculation(total) {
    let grade;
    if (total/3 >= 80) {
        grade = "A";
    } else if (total/3 >= 60) {
        grade = "B";
    } else {
        grade = "C";
    }
    //return grade
console.log("Grade is " + grade)
}

