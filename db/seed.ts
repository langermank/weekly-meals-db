import { db, Weeks, Days, Meals, Foods, MealFoods } from 'astro:db';

export default async function() {
  await db.insert(Weeks).values([
  { week_id: 1, start_date: new Date('2024-03-01'), end_date: new Date('2024-03-07') },
])

await db.insert(Days).values([
  { day_id: 1, date: new Date('2024-03-01'), week_id: 1 },
])

await db.insert(Foods).values([
  { food_id: 1, name: 'Oatmeal', label_image: 'path/to/oatmeal.jpg' },
])

await db.insert(Meals).values([
  { meal_id: 1, day_id: 1, name: 'Breakfast' },
])

await db.insert(MealFoods).values([
  { meal_food_id: 1, meal_id: 1, food_id: 1, quantity_user1: 100, quantity_user2: 150 },
])
}
