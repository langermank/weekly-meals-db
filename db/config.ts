import { defineDb, defineTable, column } from 'astro:db';

export const Meals = defineTable({
	columns: {
		meal_id: column.number({ primaryKey: true }),
		name: column.text(),
		meal_type: column.text(),
		day: column.date(),
		macrofactor_url: column.text({ optional: true }),
		notes: column.text({ optional: true }),
	}
});

export default defineDb({
  tables: { Meals },
})
