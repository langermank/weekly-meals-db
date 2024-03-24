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

export const MealTypes = defineTable({
  columns: {
    meal_type_id: column.number({ primaryKey: true }),
    type_name: column.text(), // "Lunch" or "Dinner"
  }
});

export const Foods = defineTable({
	columns: {
		food_id: column.number({ primaryKey: true }),
  	name: column.text(),
		macrofactor_url: column.text({ optional: true }),
	}
});

export const Meals = defineTable({
	columns: {
		meal_id: column.number({ primaryKey: true }),
		name: column.text(),
		meal_type_id: column.number({ references: () => MealTypes.columns.meal_type_id, default: 1}),
		day_id: column.number({ references: () => Days.columns.day_id }),
	}
});

export const MealFoods = defineTable({
	columns: {
		meal_food_id: column.number({ primaryKey: true }),
		meal_id: column.number({ references: () => Meals.columns.meal_id }),
		food_id: column.number({ references: () => Foods.columns.food_id }),
		quantity_katie: column.number({ optional: true }),
		quantity_taran: column.number({ optional: true }),
	}
});


export default defineDb({
  tables: { Weeks, Days, Meals, Foods, MealFoods, MealTypes },
})
