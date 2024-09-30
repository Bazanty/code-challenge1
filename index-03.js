let basicSalary = prompt("Basic Salary: ");
let benefits = prompt("Benefits: ");
  // Calculate gross salary
let grossSalary = basicSalary + benefits;
function payee(){
    let pay;
    if(grossSalary <= 24000){
        pay = 10/100* grossSalary;
    }else if(grossSalary >= 24001 && grossSalary <= 32333){
        pay = 25/100 * grossSalary ;
    }else if(grossSalary >= 32334 && grossSalary <= 500000){
        pay = 30/100 * grossSalary;
    }else if(grossSalary >= 500001 && grossSalary <= 800000){
        pay =32.5/100 * grossSalary;
    }else{
        pay = 35/100 * grossSalary;
    }
    return pay;
}
  // Calculate NHIF deductions
function NHIF(){
    let nhif;
    if(grossSalary <= 5999){
        nhif = 150;
    }else if(grossSalary >= 6000 && grossSalary <= 7999){
        nhif = 300;
    }else if(grossSalary >= 8000 && grossSalary <= 11999){
        nhif = 400;
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        nhif = 500;
    }else if(grossSalary >= 15000 && grossSalary <= 19999){
        nhif = 600;
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        nhif = 750;
    }else if(grossSalary >=25000 && grossSalary <= 29999){
        nhif = 850;
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        nhif = 900;
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        nhif = 950;
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        nhif = 1000;
    }else if(grossSalary >= 45000 && grossSalary <= 49999){
        nhif = 1100;
    }else if(grossSalary >= 50000 && grossSalary <= 59999){
        nhif = 1200;
    }else if(grossSalary >= 60000 && grossSalary <= 69999){
        nhif = 1300;
    }else if(grossSalary >= 70000 && grossSalary <= 79999){
        nhif = 1400;
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        nhif = 1500;
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        nhif = 1600;
    }else{
        nhif = 1700;
    }
    return nhif;
}
function calculateNSSF(grossSalary) {
  let nssfContribution = 0;
  
  // Tier I: Up to KES 7,000
  if (grossSalary <= 7000) {
    nssfContribution = grossSalary * 0.06;  // 6% of gross salary
  } else {
    // Contributions for Tier I capped at 7,000
    nssfContribution = 7000 * 0.06;  // 6% of the first 7,000

    // Tier II: From KES 7,001 to KES 36,000 
    if (grossSalary > 7000 && grossSalary <= 36000) {
      nssfContribution += (grossSalary - 7000) * 0.06;  // 6% on the remainder up to 36,000
    } else if (grossSalary > 36000) {
      // Contributions for Tier II capped at 36,000
      nssfContribution += (36000 - 7000) * 0.06;  
    }
  }

  return nssfContribution;
}  


let PaYee = payee(), NhIf = NHIF(), NsSf = NSSF();
  // Calculate net salary
let netSalary = grossSalary - (PaYee + NhIf + NsSf);
console.log(netSalary)