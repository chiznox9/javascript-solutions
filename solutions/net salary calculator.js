function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * 0.1;
    } else if (grossSalary <= 32333) {
        payee = grossSalary * 0.25;
    } else {
        payee = grossSalary * 0.3;
    }

    
    let nhif = grossSalary <= 5999 ? 150 : grossSalary <= 7999 ? 300 : 400;


    let nssf = grossSalary * 0.06;

    const netSalary = grossSalary - (payee + nhif + nssf);

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary,
    };
}

let basicSalary = Number(prompt("Enter basic salary: "));
let benefits = Number(prompt("Enter benefits: "));
console.log(calculateNetSalary(basicSalary, benefits));
