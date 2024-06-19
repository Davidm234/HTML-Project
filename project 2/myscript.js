function calculate(){
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const term = parseFloat(document.getElementById("term").value);

    if(isNaN(principal) || isNaN(rate)){
        alert("please enter valid numbers.");
        return;
    }
    
    const monthlyRate = rate / 1200;
    const months = term * 12;
    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate,-months));
    
    document.getElementById('result').innerHTML = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;

}   
