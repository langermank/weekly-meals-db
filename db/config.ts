import { defineDb, defineTable, column } from 'astro:db';

export const Meals = defineTable({
	columns: {
		meal_id: column.number({ primaryKey: true }),
		name: column.text(),
		meal_type: column.text(),
		day: column.date({ optional: true }),
		macrofactor_url: column.text({ optional: true }),
		notes: column.text({ optional: true }),
		week: column.text({ optional: true }),
		dayOfWeek: column.text({ optional: true })
	}
});

export default defineDb({
  tables: { Meals },
})
