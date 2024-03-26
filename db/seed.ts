import { db, Weeks, Days, Meals } from 'astro:db';

export default async function () {
	await db.insert(Weeks).values([
		{ week_id: 1, start_date: new Date('2024-03-25'), end_date: new Date('2024-03-31') },
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

	await db.insert(Meals).values([
		{ meal_id: 1, meal_type: 'lunch', name: 'Flatbread pizza', day_id: 1, macrofactor_url: 'https://macrofactor.com/flatbread-pizza', notes: 'Use whole wheat flatbread' },
		{ meal_id: 2, meal_type: 'dinner', name: 'Chicken and rice', day_id: 1, macrofactor_url: 'https://macrofactor.com/chicken-and-rice'},
		{ meal_id: 3, meal_type: 'dinner', name: 'Oatmeal', day_id: 2, macrofactor_url: 'https://macrofactor.com/oatmeal'},
		{ meal_id: 4, meal_type: 'dinner', name: 'Protein shake', day_id: 2, macrofactor_url: 'https://macrofactor.com/protein-shake'},
		{ meal_id: 5, meal_type: 'dinner', name: 'Greek yogurt', day_id: 3 },
		{ meal_id: 6, meal_type: 'dinner', name: 'Chicken salad', day_id: 3 },
		{ meal_id: 7, meal_type: 'dinner', name: 'Salmon and sweet potato', day_id: 4 },
		{ meal_id: 8, meal_type: 'dinner', name: 'Oatmeal', day_id: 4 },
		{ meal_id: 9, meal_type: 'dinner', name: 'Protein shake', day_id: 5 },
		{ meal_id: 10, meal_type: 'dinner', name: 'Greek yogurt', day_id: 5},
		{ meal_id: 11, meal_type: 'dinner', name: 'Chicken salad', day_id: 6},
		{ meal_id: 12, meal_type: 'dinner', name: 'Salmon and sweet potato', day_id: 6},
		{ meal_id: 13, meal_type: 'dinner', name: 'Oatmeal', day_id: 7},
		{ meal_id: 14, meal_type: 'dinner', name: 'Protein shake', day_id: 7},
	])
}
