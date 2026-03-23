# FitLife - Diet & Fitness Tracker 🏋️

A comprehensive web-based application for tracking diet, calculating BMI, planning meals, scheduling daily routines, and monitoring fitness progress. Perfect for anyone looking to maintain a healthy lifestyle and reduce body weight.

## Features

### 📊 Dashboard
- **Quick Summary**: View today's calorie intake, water consumption, and exercises at a glance
- **Health Tips**: Daily tips for maintaining fitness and healthy eating habits
- **Eating Rules**: Guidelines for balanced nutrition throughout the day

### 📈 BMI Calculator
- **Calculate Your BMI**: Enter height, weight, and age to compute Body Mass Index
- **Health Status**: Get immediate feedback on your BMI category (Underweight, Normal, Overweight, Obese)
- **Calorie Recommendations**: Automatic calculation of daily calorie requirements based on:
  - Sedentary lifestyle
  - Moderate activity level
  - Very active lifestyle

### 🥗 Meal Planner
- **Track Daily Meals**: Log breakfast, lunch, dinner, and snacks
- **Calorie Counter**: Monitor total daily calorie intake
- **Protein Tracking**: Keep track of protein consumption
- **Remaining Calories**: Visual indicator showing calories left for the day
- **Water Intake**: Track daily water consumption (8-glass goal)
- **Food Guide**: Quick reference for calorie content of common foods:
  - Vegetables
  - Fruits
  - Proteins
  - Grains
  - Dairy
  - Nuts & Seeds

### ⏰ Daily Routine Scheduler
- **Schedule Activities**: Plan exercises and activities with time, duration, and calories burned
- **Activity Log**: View all scheduled activities for the day
- **Exercise Summary**: Track total exercise time and calories burned
- **Sample Routine**: Pre-built daily routine suggestions:
  - Morning routine (6-9 AM)
  - Daytime activities (9 AM-6 PM)
  - Evening routine (6-10 PM)
- **Exercise Guide**: Calorie burn reference for popular exercises:
  - Cardio activities
  - Strength training
  - Flexibility exercises
  - Sports

### 📉 Progress Tracking
- **Weight Records**: Log weight measurements with dates
- **Body Measurements**: Track body fat percentage and waist circumference
- **Progress Notes**: Add personal notes about how you felt
- **Statistics**: View:
  - Total weight loss since starting
  - Current tracking streak
  - Total records logged
- **Success Tips**: Six key tips for successful weight loss
- **Daily Motivation**: Rotating motivational quotes to keep you inspired

## How to Use

### Getting Started
1. Open `index.html` in your web browser
2. No installation or login required - everything is stored locally in your browser

### Step-by-Step Guide

#### 1. Calculate Your BMI
- Click "BMI Calculator" tab
- Enter your height (cm), weight (kg), and age
- Click "Calculate BMI"
- Review your BMI status and daily calorie recommendations
- Use the moderate activity level calorie goal as your daily target

#### 2. Track Your Meals
- Click "Meal Planner" tab
- Select meal type (Breakfast, Lunch, Dinner, Snack)
- Enter food item and calories
- Optionally add protein amount
- Click "Add Meal"
- View your daily summary with total calories and remaining allowance

#### 3. Add Water Intake
- In the "Meal Planner" tab, click "+ Add Glass" for each glass of water
- Goal: 8 glasses per day
- Your water intake syncs to the dashboard

#### 4. Plan Daily Routine
- Click "Daily Routine" tab
- Enter activity time (HH:MM format)
- Enter activity name and duration (minutes)
- Enter estimated calories burned
- Click "Add Activity"
- View your schedule sorted by time
- Track total exercise duration and calories burned

#### 5. Record Progress
- Click "Progress" tab
- Enter date of measurement
- Enter current weight (required)
- Optionally enter body fat percentage and waist measurement
- Add personal notes about your progress
- Click "Record Progress"
- View historical records and statistics

## Data Storage

All data is stored **locally in your browser** using localStorage:
- Meals data
- Routine data
- Progress history
- Water intake
- BMI calculations

**Note**: Data will be lost if you clear your browser cache. Download or export important data regularly.

## Tips for Success

### Daily Calorie Target
Based on your BMI and activity level, here are typical daily calorie goals:
- **Sedentary**: Base metabolic rate × 1.2
- **Moderate Activity**: Base metabolic rate × 1.55
- **Very Active**: Base metabolic rate × 1.9

For weight loss: Create a deficit of 300-500 calories per day (0.5-1 kg per week loss)

### Balanced Nutrition
- **Breakfast** (25-30% of daily calories): High in protein and fiber
- **Lunch** (35-40% of daily calories): Balanced with vegetables
- **Dinner** (25-30% of daily calories): Light, eaten 2-3 hours before bed
- **Snacks** (5-10% of daily calories): Fruits, nuts, yogurt

### Exercise Plan
- **Cardio**: 150 minutes per week (30 min × 5 days)
- **Strength Training**: 2-3 times per week
- **Flexibility**: Daily stretching or yoga (15 min)
- **Rest**: At least 1-2 rest days per week

### Healthy Lifestyle
- ✅ Drink 2-3 liters of water daily
- ✅ Sleep 7-9 hours per night
- ✅ Eat 5 servings of fruits/vegetables daily
- ✅ Limit processed foods
- ✅ Track consistently for best results
- ✅ Be patient - healthy weight loss takes time

## Nutritional Reference

### Vegetables (per serving)
- Spinach: 7 kcal
- Broccoli: 34 kcal
- Carrot: 25 kcal
- Tomato: 18 kcal

### Fruits (per serving)
- Apple: 52 kcal
- Banana: 89 kcal
- Orange: 47 kcal
- Berries: 40 kcal

### Proteins (per 100g)
- Chicken: 165 kcal
- Fish: 206 kcal
- Eggs: 155 kcal
- Tofu: 86 kcal (per 100g)

### Grains (per serving)
- Oats: 150 kcal
- Brown Rice: 111 kcal
- Whole Wheat Bread: 80 kcal

### Dairy (per serving)
- Yogurt: 100 kcal
- Milk: 61 kcal
- Cheese: 113 kcal

### Nuts & Seeds (per 30g)
- Almonds: 164 kcal
- Peanuts: 161 kcal
- Chia Seeds: 138 kcal

## Exercise Calorie Burn (per 30 minutes)

### Cardio
- Running: 350 kcal
- Cycling: 250 kcal
- Swimming: 275 kcal
- Jump Rope: 275 kcal

### Strength Training
- Weight Training: 180 kcal
- Push-ups: 150 kcal
- Resistance Training: 200 kcal

### Flexibility
- Yoga: 120 kcal
- Stretching: 60 kcal
- Pilates: 150 kcal

### Sports
- Tennis: 250 kcal
- Basketball: 240 kcal
- Soccer: 260 kcal

## Browser Compatibility

Works on:
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## File Structure

```
website/
├── index.html       (Main HTML file)
├── styles.css       (Styling)
├── script.js        (JavaScript functionality)
└── README.md        (This file)
```

## Tips for Maximum Effectiveness

1. **Consistency**: Log your meals and activities daily for best tracking
2. **Honesty**: Record everything you eat, even small snacks
3. **Patience**: Weight loss is a gradual process, celebrate weekly changes
4. **Adjustment**: If not seeing results after 2-3 weeks, reduce calorie intake by 100-200 kcal
5. **Variety**: Change exercises regularly to prevent plateaus
6. **Hydration**: Drinking water before meals helps with portion control
7. **Sleep**: Lack of sleep increases hunger hormones - prioritize sleep!
8. **Stress**: High stress increases cortisol - manage stress with yoga/meditation

## Disclaimer

This application provides general fitness and nutrition tracking. For personalized advice, consult with:
- A registered dietitian
- A certified fitness trainer
- Your healthcare provider

Results vary based on individual factors including genetics, metabolism, medical history, and consistency.

## Support for Issues

Common issues:
- **Data not saving**: Check if localStorage is enabled in your browser
- **Page not loading**: Clear browser cache and refresh
- **Missing calculations**: Ensure all required fields are filled

## Future Enhancements

Potential features:
- Export data to CSV
- Graph visualization of progress
- Recipe suggestions
- Social sharing
- Mobile app version
- Integration with fitness trackers
- Meal prep planning

---

## Getting Started Right Now

1. Open `index.html` in your browser
2. Go to the BMI Calculator and enter your stats
3. Follow the daily routine schedule
4. Log meals in the Meal Planner
5. Record progress weekly
6. Stay motivated with the daily inspirational quotes!

**Remember: A healthy lifestyle is a journey, not a destination. Start today, stay consistent, and celebrate every milestone! 💪**

---

*Created for: Weight Loss & Fitness Goal Tracking*
*Last Updated: March 2026*

