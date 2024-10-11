// Get the form and result output
const speed = prompt("speed")
const demiritPointsThreshold = 12;
const speedLimit = 70
const kmPerPoint = 5;

if(speed <= speedLimit){
    alert("Ok")
}else {
    let points = Math.floor((speed - speedLimit) / kmPerPoint)
    //check if licence should be suspended
    if(points > demiritPointsThreshold) {
        alert("License suspended");
        
    }else {
        alert(`points: ${points}`);  
  }
}