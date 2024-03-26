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
		name: column.text(),
		meal_type: column.text(),
		day_id: column.number({ references: () => Days.columns.day_id }),
		macrofactor_url: column.text({ optional: true }),
		notes: column.text({ optional: true }),
	}
});


export default defineDb({
  tables: { Weeks, Days, Meals },
})
