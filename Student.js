let student = {
        name: "Rahul",
        maths: 78,
        science: 85,
        english: 90
    };

// Write a function to calculate total marks.

function TotalMarks(marks){
    return marks.english + marks.science + marks.maths;
}

// Write a function to calculate average marks.

function TotalAverage(marks) {
    let total = TotalMarks(marks);
    return total/3;
}

// Write a function to determine the grade based on the average.

function Grade(marks) {
    let avg = TotalAverage(marks);

    if(avg >= 80){
        return "Grade A";
    }
    else if(avg >= 60){
        return "Grade B";
    }
    else{
        return "Grade C"
    }
}

console.log("student name :" , student.name);
console.log("student Total Marks :" , TotalMarks(student));
console.log("student Total Average :" , TotalAverage(student));
console.log("student Grade :" , Grade(student));
