function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const resultContainer = document.getElementById("result");
    
    // Validation
    if (!weight || !height) {
        resultContainer.innerHTML = '<div class="error-message">Please fill in both weight and height fields.</div>';
        return;
    }
    
    if (weight <= 0 || height <= 0) {
        resultContainer.innerHTML = '<div class="error-message">Weight and height must be greater than zero.</div>';
        return;
    }
    
    if (weight > 500 || height > 3) {
        resultContainer.innerHTML = '<div class="error-message">Please enter realistic weight and height values.</div>';
        return;
    }
    
    // Calculate BMI
    const bmi = weight / (height * height);
    const bmiValue = bmi.toFixed(2);
    
    let category = '';
    let categoryClass = '';
    
    if (bmi < 18.5) {
        category = 'Underweight';
        categoryClass = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal Weight';
        categoryClass = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        categoryClass = 'overweight';
    } else if (bmi >= 30) {
        category = 'Obesity';
        categoryClass = 'obesity';
    }
    
    // Display result
    resultContainer.innerHTML = `
        <div class="result-box ${categoryClass}">
            <div class="result-value">${bmiValue}</div>
            <div class="result-category">${category}</div>
        </div>
    `;
}