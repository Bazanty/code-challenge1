function calculatePayee($salaryAmount, $nssfAmount){
    $tax = 0;
    $remaining = $salaryAmount - $nssfAmount;

if($remaining > 24000){
    $tax += 24000*(10/100);
    $remaining -=24000;

    if($remaining > 0){
        $amountToTax = ($remaining < 8333) ? $remaining : 8333;
        $tax += $amountToTax * (25/100);
        $remaining -= $amountToTax;
    }

    if($remaining > 0){
        $amountToTax = ($remaining < 467667)? $remaining : 467667;
        $tax += $amountToTax * (30/100);
        $remaining -= $amountToTax;
    }
    
    if($remaining > 0){
        $amountToTax = ($remaining < 300000) ? $remaining : 300000;
        $tax += $amountToTax * (32.5/100);
        $remaining -= $amountToTax;
    }

    if($remaining > 0){
        $tax += $remaining * (35/100);
        $remaining = 0;
    }
}
return $tax;
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
  // Calculate NSSF deductions
function NSSF(){
    let nssf = 0.06 * grossSalary;
    return nssf;
}

let PaYee = payee(), NhIf = NHIF(), NsSf = NSSF();
  // Calculate net salary
let netSalary = grossSalary - (PaYee + NhIf + NsSf);
console.log(netSalary)
