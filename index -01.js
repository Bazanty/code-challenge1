let marks = prompt("Enter your marks:");

marks = Number(marks);

function getGrades(mark){
    if (mark > 79){
        return("A");
    }else if (mark >= 60 && mark <=79){
        return ("B");
    }else if (mark >= 49 && mark <=59){
        return("C");
    }else if (mark => 40 && mark <49){
        return("D");
    }else if (mark <40){
        return ("E");
    }else {
        return ("wrong input");
    }
    }
    // display the result 
   const grade = getGrades(marks)
   alert(`The grade for ${marks} is ${grade}`)