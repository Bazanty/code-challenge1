let basicSalary = parseInt(prompt("Enter Basic Salary: "));
let benefits = parseInt(prompt("Enter Benefits: "));
let grossSalary = basicSalary + benefits;

function Payee(salaryAmount, nssfAmount) {
    let tax = 0;
    let remaining = salaryAmount - nssfAmount;

    if (remaining > 24000) {
        tax += 24000 * (10 / 100);
        remaining -= 24000;

        if (remaining > 0) {
            let amountToTax = (remaining < 8333) ? remaining : 8333;
            tax += amountToTax * (25 / 100);
            remaining -= amountToTax;
        }

        if (remaining > 0) {
            let amountToTax = (remaining < 467667) ? remaining : 467667;
            tax += amountToTax * (30 / 100);
            remaining -= amountToTax;
        }

        if (remaining > 0) {
            let amountToTax = (remaining < 300000) ? remaining : 300000;
            tax += amountToTax * (32.5 / 100);
            remaining -= amountToTax;
        }

        if (remaining > 0) {
            tax += remaining * (35 / 100);
            remaining = 0;
        }
    }
    
    return tax;
}

// Calculate NHIF deductions
function NHIF(grossSalary) {
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Calculate NSSF deductions
function NSSF(grossSalary) {
    let nssfContribution = 0;

    if (grossSalary <= 7000) {
        nssfContribution = grossSalary * 0.06;  
    } else {
        
        nssfContribution = 7000 * 0.06;  
        
        if (grossSalary > 7000 && grossSalary <= 36000) {
            nssfContribution += (grossSalary - 7000) * 0.06;  
        } else if (grossSalary > 36000) {
            nssfContribution += (36000 - 7000) * 0.06;
        }
    }

    return nssfContribution;
}

// Calculate deductions and net salary
let nssf = NSSF(grossSalary);
let payee =Payee(grossSalary, nssf);
let nhif = NHIF(grossSalary);

// Calculate net salary
let netSalary = grossSalary - (payee + nhif + nssf);

// Output the results
alert(`Net Salary: ${netSalary.toFixed(2)}`);
