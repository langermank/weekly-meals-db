import { db, Meals } from 'astro:db';

export default async function () {
	await db.insert(Meals).values([
		{ meal_id: 1, meal_type: 'lunch', name: 'Flatbread pizza', day: new Date('2024-03-25'), macrofactor_url: 'https://macrofactor.com/flatbread-pizza', notes: 'Use whole wheat flatbread' },
	])
}
