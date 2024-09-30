Get the form and result output
const form = document.getElementById('speedForm');
const result = document.getElementById('result');
const speedLimit = document.getElementById("speed").Value;
const speedLimit = 70;
const demiritPointsThreshold = 12;
const kmPerPoint = 5;
if(speed<=speedLimit){
    Result = "Ok", 

}else {
    const overSpeed = speed - speedLimit;
    const point = Math.floor(overSpeed / kmPerPoint);
    //check if licence should be suspended
    if(points > demiritPointsThreshold) {
        result.textContent = "License suspended";
        
    }else {
        result.textContent = points: ${points};  


    
}
}