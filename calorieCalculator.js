const calculateBtn = document.getElementById('calculate-btn');
const calorieForm = document.getElementById('calorie-form');
const output = document.getElementById('output');

function calculateBMR(gender, age, height, weight) {
    if(gender === 'male')  {
        return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if(gender === 'female') {
        return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    } else {
        return 0;
    }
}

calculateBtn.addEventListener('click', () => {
    const genderSelect = document.getElementById('gender-select').value;
    const ageInput = document.getElementById('age').value;
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const dailyCalories = calculateBMR(genderSelect, ageInput, heightInput, weightInput);
    if(isNaN(ageInput) || isNaN(heightInput) || isNaN(weightInput) || !genderSelect) {
        output.textContent = 'Fill out the form to calculate.';
        return;
    }
    output.textContent = `Your estimated Daily Calorie is ${Math.round(dailyCalories)} Calories.`;
    calorieForm.reset();
});
