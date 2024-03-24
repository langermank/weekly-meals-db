import { db, Weeks, Days, Meals, Foods, MealFoods, MealTypes } from 'astro:db';

export default async function () {
	await db.insert(Weeks).values([
		{ week_id: 1, start_date: new Date('2024-03-01'), end_date: new Date('2024-03-07') },
	])

	await db.insert(MealTypes).values([
		{ meal_type_id: 1, type_name: 'Lunch' },
		{ meal_type_id: 2, type_name: 'Dinner' },
	])

	await db.insert(Days).values([
		{ day_id: 1, date: new Date('2024-03-25'), week_id: 1 },
		{ day_id: 2, date: new Date('2024-03-26'), week_id: 1 },
		{ day_id: 3, date: new Date('2024-03-27'), week_id: 1 },
		{ day_id: 4, date: new Date('2024-03-28'), week_id: 1 },
		{ day_id: 5, date: new Date('2024-03-29'), week_id: 1 },
		{ day_id: 6, date: new Date('2024-03-30'), week_id: 1 },
		{ day_id: 7, date: new Date('2024-03-31'), week_id: 1 },
	])

	await db.insert(Foods).values([
		{ food_id: 1, name: 'Oatmeal', macrofactor_url: '/' },
		{ food_id: 2, name: 'Banana', macrofactor_url: '/' },
		{ food_id: 3, name: 'Protein Powder', macrofactor_url: '/' },
		{ food_id: 4, name: 'Milk', macrofactor_url: '/' },
		{ food_id: 5, name: 'Greek Yogurt', macrofactor_url: '/' },
		{ food_id: 6, name: 'Berries', macrofactor_url: '/' },
		{ food_id: 7, name: 'Peanut Butter', macrofactor_url: '/' },
		{ food_id: 8, name: 'Bread', macrofactor_url: '/' },
		{ food_id: 9, name: 'Chicken', macrofactor_url: '/' },
		{ food_id: 10, name: 'Rice', macrofactor_url: '/' },
		{ food_id: 11, name: 'Broccoli', macrofactor_url: '/' },
		{ food_id: 12, name: 'Salmon', macrofactor_url: '/' },
		{ food_id: 13, name: 'Sweet Potato', macrofactor_url: '/' },
		{ food_id: 14, name: 'Asparagus', macrofactor_url: '/' },
		{ food_id: 15, name: 'Beef', macrofactor_url: '/' },
		{ food_id: 16, name: 'Pasta', macrofactor_url: '/' },
		{ food_id: 17, name: 'Eggs', macrofactor_url: '/' },
		{ food_id: 18, name: 'Avocado', macrofactor_url: '/' },
		{ food_id: 19, name: 'Almonds', macrofactor_url: '/' },
		{ food_id: 20, name: 'Tuna', macrofactor_url: '/' },
		{ food_id: 21, name: 'Cottage Cheese', macrofactor_url: '/' },
		{ food_id: 22, name: 'Turkey', macrofactor_url: '/' },
		{ food_id: 23, name: 'Pork', macrofactor_url: '/' },
		{ food_id: 24, name: 'Lentils', macrofactor_url: '/' },
		{ food_id: 25, name: 'Quinoa', macrofactor_url: '/' },
	])

	await db.insert(Meals).values([
		{ meal_id: 1, meal_type_id: 1, name: 'Flatbread pizza', day_id: 1 },
		{ meal_id: 2, meal_type_id: 2, name: 'Chicken and rice', day_id: 1 },
		{ meal_id: 3, meal_type_id: 1, name: 'Oatmeal', day_id: 2 },
		{ meal_id: 4, meal_type_id: 2, name: 'Protein shake', day_id: 2 },
		{ meal_id: 5, meal_type_id: 1, name: 'Greek yogurt', day_id: 3 },
		{ meal_id: 6, meal_type_id: 2, name: 'Chicken salad', day_id: 3 },
		{ meal_id: 7, meal_type_id: 1, name: 'Salmon and sweet potato', day_id: 4 },
		{ meal_id: 8, meal_type_id: 2, name: 'Oatmeal', day_id: 4 },
		{ meal_id: 9, meal_type_id: 1, name: 'Protein shake', day_id: 5 },
		{ meal_id: 10, meal_type_id: 2, name: 'Greek yogurt', day_id: 5},
		{ meal_id: 11, meal_type_id: 1, name: 'Chicken salad', day_id: 6},
		{ meal_id: 12, meal_type_id: 2, name: 'Salmon and sweet potato', day_id: 6},
		{ meal_id: 13, meal_type_id: 1, name: 'Oatmeal', day_id: 7},
		{ meal_id: 14, meal_type_id: 2, name: 'Protein shake', day_id: 7},
	])

	await db.insert(MealFoods).values([
		{ meal_food_id: 1, meal_id: 1, food_id: 1, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 2, meal_id: 2, food_id: 2, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 3, meal_id: 3, food_id: 3, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 4, meal_id: 4, food_id: 4, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 5, meal_id: 5, food_id: 5, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 6, meal_id: 6, food_id: 6, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 7, meal_id: 7, food_id: 7, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 8, meal_id: 8, food_id: 8, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 9, meal_id: 9, food_id: 9, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 10, meal_id: 10, food_id: 10, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 11, meal_id: 11, food_id: 11, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 12, meal_id: 12, food_id: 12, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 13, meal_id: 13, food_id: 13, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 14, meal_id: 14, food_id: 14, quantity_katie: 100, quantity_taran: 150 },
		{ meal_food_id: 15, meal_id: 1, food_id: 15, quantity_katie: 100, quantity_taran: 150 },
	])
}
