import { defineDb, defineTable, column } from 'astro:db';

export const Weeks = defineTable({
	columns: {
		week_id: column.number({ primaryKey: true }),
		start_date: column.date(),
		end_date: column.date(),
	}
});

export const Days = defineTable({
	columns: {
		day_id: column.number({ primaryKey: true }),
		date: column.date(),
		week_id: column.number({ references: () => Weeks.columns.week_id }),
	}
});

export const Meals = defineTable({
	columns: {
		meal_id: column.number({ primaryKey: true }),
		day_id: column.number({ references: () => Days.columns.day_id }),
		name: column.text(),
	}
});

export const Foods = defineTable({
	columns: {
		food_id: column.number({ primaryKey: true }),
  	name: column.text(),
  	label_image: column.text(),
	}
});

export const MealFoods = defineTable({
	columns: {
		meal_food_id: column.number({ primaryKey: true }),
		meal_id: column.number({ references: () => Meals.columns.meal_id }),
		food_id: column.number({ references: () => Foods.columns.food_id }),
		quantity_user1: column.number(),
		quantity_user2: column.number(),
	}
});

export default defineDb({
  tables: { Weeks, Days, Meals, Foods, MealFoods },
})
