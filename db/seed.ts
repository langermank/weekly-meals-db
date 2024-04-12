// import { db, Meals } from 'astro:db';

// export default async function () {
// 	await db.insert(Meals).values([
// 		{ meal_id: 1, meal_type: 'lunch', name: 'Flatbread pizza', day: new Date('2024-04-08T05:00:00'), macrofactor_url: 'https://macrofactor.com/flatbread-pizza', notes: 'Use whole wheat flatbread', week: '2024-W15', dayOfWeek: 'Monday' },
// 		{ meal_id: 2, meal_type: 'dinner', name: 'Pasta', day: new Date('2024-04-09T05:00:00'), macrofactor_url: 'https://macrofactor.com/flatbread-pizza', notes: 'Use whole wheat flatbread', week: '2024-W15', dayOfWeek: 'Tuesday' },
// 	])
// }

import { db, Meals } from 'astro:db';

export default async function() {
  await db.insert(Meals).values([
		{ meal_id: 1, meal_type: 'Lunch', name: 'Pizza', day: new Date('2024-04-08T05:00:00'), macrofactor_url: '/', notes: 'Some notes', week: '2024-W15', dayOfWeek: 'Monday' },
		{ meal_id: 2, meal_type: 'Dinner', name: 'Pizza', day: new Date('2024-04-08T05:00:00'), macrofactor_url: '/', notes: 'Some notes', week: '2024-W15', dayOfWeek: 'Monday'},
  ])
}
