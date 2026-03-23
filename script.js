// Data Storage
let mealsData = JSON.parse(localStorage.getItem('mealsData')) || [];
let routineData = JSON.parse(localStorage.getItem('routineData')) || [];
let progressData = JSON.parse(localStorage.getItem('progressData')) || [];
let waterIntake = parseInt(localStorage.getItem('waterIntake')) || 0;

// Motivation Quotes
const motivationQuotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your body can stand almost anything. It's your mind that you need to convince.",
    "Take care of your body. It's the only place you have to live.",
    "Healthy is a lifestyle, not a destination.",
    "Don't wish for a better body, work for it.",
    "Fitness is not about being better than someone else. It's about being better than you used to be.",
    "Your health is an investment, not an expense.",
    "The only way to define your limits is by going beyond them.",
    "Success is the sum of small efforts repeated day in and day out.",
    "You don't have to be great to start, but you have to start to be great.",
    "Push yourself, because no one else is going to do it for you.",
    "Discipline is choosing between what you want now and what you want most.",
    "Eat clean, train hard, be patient. Success is your reward.",
    "A fit body, a calm mind, a house full of love. These things cannot be bought.",
    "The body achieves what the mind believes."
];

// Tab Switching
function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName).classList.add('active');

    // Add active class to clicked button
    event.target.classList.add('active');

    // Update summary when switching to dashboard
    if (tabName === 'dashboard') {
        updateDashboardSummary();
    }
}

// Update Dashboard Summary
function updateDashboardSummary() {
    const todayCalories = mealsData.reduce((sum, meal) => {
        if (isToday(meal.date || new Date().toISOString().split('T')[0])) {
            return sum + parseInt(meal.calories);
        }
        return sum;
    }, 0);

    const todayActivities = routineData.filter(activity => 
        isToday(activity.date || new Date().toISOString().split('T')[0])
    ).length;

    document.getElementById('todayCalories').textContent = `${todayCalories} / 2000 kcal`;
    document.getElementById('todayWater').textContent = `${waterIntake} / 8 glasses`;
    document.getElementById('todayExercises').textContent = todayActivities;
}

// Check if date is today
function isToday(dateString) {
    const today = new Date().toISOString().split('T')[0];
    return dateString === today;
}

// BMI Calculator
function calculateBMI(event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value); // cm
    const weight = parseFloat(document.getElementById('weight').value); // kg
    const age = parseInt(document.getElementById('age').value);

    if (!height || !weight || !age) {
        alert('Please fill all fields');
        return;
    }

    // Convert height to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // Determine BMI status
    let status = '';
    let statusClass = '';
    if (bmi < 18.5) {
        status = 'Underweight';
        statusClass = 'underweight';
    } else if (bmi < 25) {
        status = 'Normal Weight';
        statusClass = 'normal';
    } else if (bmi < 30) {
        status = 'Overweight';
        statusClass = 'overweight';
    } else {
        status = 'Obese';
        statusClass = 'obese';
    }

    // Calculate daily calorie requirements using Harris-Benedict equation
    let bmr = 0;
    // Simplified calculation (typical for average person)
    bmr = 10 * weight + 6.25 * height - 5 * age + 5; // For males (basic)

    // Activity multipliers
    const sedentary = Math.round(bmr * 1.2);
    const moderate = Math.round(bmr * 1.55);
    const active = Math.round(bmr * 1.9);

    // Display result
    const resultDiv = document.getElementById('bmiResult');
    resultDiv.innerHTML = `
        <h3 style="margin-bottom: 1rem;">Your BMI Result</h3>
        <div class="bmi-value" style="color: var(--primary-color);">${bmi}</div>
        <div class="bmi-status" style="color: var(--dark-color);">Status: <strong>${status}</strong></div>
        <div class="bmi-info" style="color: var(--gray-color);">Height: ${height}cm | Weight: ${weight}kg | Age: ${age}</div>
    `;
    resultDiv.classList.remove('bmi-result-empty');

    // Display calorie requirements
    document.getElementById('sedentaryCalories').textContent = sedentary;
    document.getElementById('moderateCalories').textContent = moderate;
    document.getElementById('activeCalories').textContent = active;

    // Set daily calorie goal to moderate activity level
    sessionStorage.setItem('dailyCalorieGoal', moderate);

    // Save BMI data
    localStorage.setItem('bmiData', JSON.stringify({
        height,
        weight,
        age,
        bmi,
        status,
        bmr,
        sedentary,
        moderate,
        active,
        date: new Date().toISOString().split('T')[0]
    }));
}

// Add Meal
function addMeal(event) {
    event.preventDefault();

    const mealType = document.getElementById('mealType').value;
    const foodItem = document.getElementById('foodItem').value;
    const calories = parseInt(document.getElementById('calories').value);
    const protein = parseFloat(document.getElementById('protein').value) || 0;

    const meal = {
        id: Date.now(),
        type: mealType,
        food: foodItem,
        calories: calories,
        protein: protein,
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString()
    };

    mealsData.push(meal);
    localStorage.setItem('mealsData', JSON.stringify(mealsData));

    // Clear form
    document.getElementById('mealType').value = 'Breakfast';
    document.getElementById('foodItem').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('protein').value = '';

    updateMealsList();
    updateDashboardSummary();
}

// Update Meals List
function updateMealsList() {
    const mealsList = document.getElementById('mealsList');
    const todayMeals = mealsData.filter(meal => isToday(meal.date));

    if (todayMeals.length === 0) {
        mealsList.innerHTML = '<p class="empty-state">No meals added yet. Start tracking!</p>';
        updateMealsSummary();
        return;
    }

    mealsList.innerHTML = todayMeals.map(meal => `
        <div class="meal-item">
            <div class="meal-info">
                <div class="meal-type">${meal.type}</div>
                <div class="meal-details">${meal.food} | ${meal.time}</div>
                <div class="meal-details">Protein: ${meal.protein}g</div>
            </div>
            <div class="meal-calories">${meal.calories} kcal</div>
            <button class="delete-btn" onclick="deleteMeal(${meal.id})">×</button>
        </div>
    `).join('');

    updateMealsSummary();
}

// Delete Meal
function deleteMeal(id) {
    mealsData = mealsData.filter(meal => meal.id !== id);
    localStorage.setItem('mealsData', JSON.stringify(mealsData));
    updateMealsList();
}

// Update Meals Summary
function updateMealsSummary() {
    const todayMeals = mealsData.filter(meal => isToday(meal.date));
    const totalCalories = todayMeals.reduce((sum, meal) => sum + meal.calories, 0);
    const totalProtein = todayMeals.reduce((sum, meal) => sum + meal.protein, 0);
    const dailyGoal = parseInt(sessionStorage.getItem('dailyCalorieGoal')) || 2000;
    const remaining = dailyGoal - totalCalories;

    document.getElementById('totalCalories').textContent = totalCalories;
    document.getElementById('totalProtein').textContent = totalProtein.toFixed(1) + ' g';
    document.getElementById('remainingCalories').textContent = `${remaining} kcal`;

    // Change color based on remaining calories
    const remainingElement = document.getElementById('remainingCalories').parentElement;
    if (remaining < 0) {
        remainingElement.style.color = '#e74c3c';
    } else if (remaining < 300) {
        remainingElement.style.color = '#f39c12';
    } else {
        remainingElement.style.color = '#2ecc71';
    }
}

// Water Tracker
function addWater() {
    if (waterIntake < 8) {
        waterIntake++;
        localStorage.setItem('waterIntake', waterIntake);
        document.getElementById('waterCount').textContent = `${waterIntake} / 8 glasses`;
        updateDashboardSummary();
    }
}

function resetWater() {
    waterIntake = 0;
    localStorage.setItem('waterIntake', waterIntake);
    document.getElementById('waterCount').textContent = `0 / 8 glasses`;
    updateDashboardSummary();
}

// Add Activity
function addActivity(event) {
    event.preventDefault();

    const time = document.getElementById('time').value;
    const activity = document.getElementById('activity').value;
    const duration = parseInt(document.getElementById('duration').value);
    const caloriesBurned = parseInt(document.getElementById('caloriesBurned').value);

    const routine = {
        id: Date.now(),
        time: time,
        activity: activity,
        duration: duration,
        calories: caloriesBurned,
        date: new Date().toISOString().split('T')[0]
    };

    routineData.push(routine);
    localStorage.setItem('routineData', JSON.stringify(routineData));

    // Clear form
    document.getElementById('time').value = '';
    document.getElementById('activity').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('caloriesBurned').value = '';

    updateRoutineList();
    updateDashboardSummary();
}

// Update Routine List
function updateRoutineList() {
    const routineList = document.getElementById('routineList');
    const todayActivities = routineData.filter(activity => isToday(activity.date));

    if (todayActivities.length === 0) {
        routineList.innerHTML = '<p class="empty-state">No activities scheduled yet</p>';
        updateRoutineSummary();
        return;
    }

    // Sort by time
    todayActivities.sort((a, b) => a.time.localeCompare(b.time));

    routineList.innerHTML = todayActivities.map(activity => `
        <div class="activity-item">
            <div class="activity-info">
                <div class="activity-time">${activity.time}</div>
                <div class="activity-details">${activity.activity} | Duration: ${activity.duration} min</div>
            </div>
            <div class="calories-burned">${activity.calories} kcal</div>
            <button class="delete-btn" onclick="deleteActivity(${activity.id})">×</button>
        </div>
    `).join('');

    updateRoutineSummary();
}

// Delete Activity
function deleteActivity(id) {
    routineData = routineData.filter(activity => activity.id !== id);
    localStorage.setItem('routineData', JSON.stringify(routineData));
    updateRoutineList();
}

// Update Routine Summary
function updateRoutineSummary() {
    const todayActivities = routineData.filter(activity => isToday(activity.date));
    const totalDuration = todayActivities.reduce((sum, activity) => sum + activity.duration, 0);
    const totalBurned = todayActivities.reduce((sum, activity) => sum + activity.calories, 0);

    document.getElementById('totalDuration').textContent = totalDuration + ' min';
    document.getElementById('totalBurned').textContent = totalBurned + ' kcal';
}

// Record Progress
function recordProgress(event) {
    event.preventDefault();

    const date = document.getElementById('progressDate').value;
    const weight = parseFloat(document.getElementById('currentWeight').value);
    const bodyFat = parseFloat(document.getElementById('bodyFat').value) || null;
    const waist = parseFloat(document.getElementById('waist').value) || null;
    const notes = document.getElementById('notes').value;

    const progress = {
        id: Date.now(),
        date: date,
        weight: weight,
        bodyFat: bodyFat,
        waist: waist,
        notes: notes
    };

    progressData.push(progress);
    localStorage.setItem('progressData', JSON.stringify(progressData));

    // Clear form
    document.getElementById('progressDate').value = '';
    document.getElementById('currentWeight').value = '';
    document.getElementById('bodyFat').value = '';
    document.getElementById('waist').value = '';
    document.getElementById('notes').value = '';

    updateProgressDisplay();
    updateProgressStats();
}

// Update Progress Display
function updateProgressDisplay() {
    const progressDisplay = document.getElementById('progressData');

    if (progressData.length === 0) {
        progressDisplay.innerHTML = '<p class="empty-state">No progress recorded yet</p>';
        return;
    }

    // Sort by date descending
    const sortedProgress = [...progressData].sort((a, b) => new Date(b.date) - new Date(a.date));

    progressDisplay.innerHTML = sortedProgress.map(record => `
        <div class="progress-item">
            <div class="progress-info">
                <div style="font-weight: bold; color: #2ecc71;">${record.date}</div>
                <div style="font-size: 0.95rem; color: #333; margin-top: 0.5rem;">
                    Weight: ${record.weight}kg
                    ${record.bodyFat ? `| Body Fat: ${record.bodyFat}%` : ''}
                    ${record.waist ? `| Waist: ${record.waist}cm` : ''}
                </div>
                ${record.notes ? `<div style="font-size: 0.9rem; color: #666; margin-top: 0.3rem; font-style: italic;">"${record.notes}"</div>` : ''}
            </div>
            <button class="delete-btn" onclick="deleteProgress(${record.id})">×</button>
        </div>
    `).join('');
}

// Delete Progress
function deleteProgress(id) {
    progressData = progressData.filter(record => record.id !== id);
    localStorage.setItem('progressData', JSON.stringify(progressData));
    updateProgressDisplay();
    updateProgressStats();
}

// Update Progress Stats
function updateProgressStats() {
    if (progressData.length === 0) {
        document.getElementById('weightLoss').textContent = '0 kg';
        document.getElementById('streak').textContent = '0 days';
        document.getElementById('recordCount').textContent = '0';
        return;
    }

    // Sort by date
    const sortedProgress = [...progressData].sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate weight loss
    const firstWeight = sortedProgress[0].weight;
    const lastWeight = sortedProgress[sortedProgress.length - 1].weight;
    const weightLoss = (firstWeight - lastWeight).toFixed(1);

    // Calculate streak (consecutive days with records)
    let streak = 1;
    const today = new Date();
    for (let i = sortedProgress.length - 1; i > 0; i--) {
        const date1 = new Date(sortedProgress[i].date);
        const date2 = new Date(sortedProgress[i - 1].date);
        const diffDays = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
            streak++;
        } else {
            break;
        }
    }

    document.getElementById('weightLoss').textContent = weightLoss + ' kg';
    document.getElementById('streak').textContent = streak + ' days';
    document.getElementById('recordCount').textContent = progressData.length;
}

// Get New Motivation Quote
function getNewQuote() {
    const randomIndex = Math.floor(Math.random() * motivationQuotes.length);
    document.getElementById('motivationQuote').textContent = `"${motivationQuotes[randomIndex]}"`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateMealsList();
    updateRoutineList();
    updateProgressDisplay();
    updateProgressStats();
    updateDashboardSummary();
    document.getElementById('waterCount').textContent = `${waterIntake} / 8 glasses`;
    document.getElementById('todayWater').textContent = `${waterIntake} / 8 glasses`;
    
    // Set initial motivation quote
    if (document.getElementById('motivationQuote')) {
        getNewQuote();
    }
});

// Auto-update water count display
window.addEventListener('storage', function(e) {
    if (e.key === 'waterIntake') {
        waterIntake = parseInt(e.newValue) || 0;
        document.getElementById('waterCount').textContent = `${waterIntake} / 8 glasses`;
        updateDashboardSummary();
    }
    if (e.key === 'mealsData') {
        mealsData = JSON.parse(e.newValue) || [];
        updateMealsList();
    }
    if (e.key === 'routineData') {
        routineData = JSON.parse(e.newValue) || [];
        updateRoutineList();
    }
    if (e.key === 'progressData') {
        progressData = JSON.parse(e.newValue) || [];
        updateProgressDisplay();
        updateProgressStats();
    }
});
