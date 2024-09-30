function Grades(){  
if (Grades > 81){
    console.log ("A");

}else if (Grades >= 60 && Grades <=79){
    console.log ("B");
}else if (Grades >= 49 && Grades <=59){
    console.log ("C");
}else if (Grades => 40 && Grades <49){
    console.log ("D");
}else if (Grades <40){
    console.log ("E");
}else {
    console.log ("wrong input");
}
}
// display the result 
output.textContent = `The grades for ${marks} is ${grades}.`;


