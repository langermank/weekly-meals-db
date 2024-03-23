import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead } from '../astro_9JUODw5U.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { createLocalDatabaseClient, asDrizzleTable, seedLocal } from '@astrojs/db/runtime';
import '@astrojs/db/dist/runtime/config.js';

const dbUrl$1 = "file:///Users/katielangerman/Projects/weekly-meals-db/.astro/content.db";
const db$1 = createLocalDatabaseClient({ dbUrl: dbUrl$1 });

const Weeks = asDrizzleTable("Weeks", {"columns":{"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}},"start_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"start_date","collection":"Weeks"}},"end_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"end_date","collection":"Weeks"}}},"deprecated":false}, false);
const Days = asDrizzleTable("Days", {"columns":{"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Days"}},"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Days","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}}}}},"deprecated":false}, false);
const Meals$1 = asDrizzleTable("Meals", {"columns":{"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}},"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Meals","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Meals","primaryKey":false,"optional":false}}},"deprecated":false}, false);
const Foods = asDrizzleTable("Foods", {"columns":{"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Foods","primaryKey":false,"optional":false}},"label_image":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"label_image","collection":"Foods","primaryKey":false,"optional":false}}},"deprecated":false}, false);
const MealFoods = asDrizzleTable("MealFoods", {"columns":{"meal_food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_food_id","collection":"MealFoods","primaryKey":true}},"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}}}},"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}}}},"quantity_user1":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user1","collection":"MealFoods","primaryKey":false,"optional":false}},"quantity_user2":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user2","collection":"MealFoods","primaryKey":false,"optional":false}}},"deprecated":false}, false);

async function seed() {
  await db$1.insert(Weeks).values([
    { week_id: 1, start_date: /* @__PURE__ */ new Date("2024-03-01"), end_date: /* @__PURE__ */ new Date("2024-03-07") }
  ]);
  await db$1.insert(Days).values([
    { day_id: 1, date: /* @__PURE__ */ new Date("2024-03-01"), week_id: 1 }
  ]);
  await db$1.insert(Foods).values([
    { food_id: 1, name: "Oatmeal", label_image: "path/to/oatmeal.jpg" }
  ]);
  await db$1.insert(Meals$1).values([
    { meal_id: 1, day_id: 1, name: "Breakfast" }
  ]);
  await db$1.insert(MealFoods).values([
    { meal_food_id: 1, meal_id: 1, food_id: 1, quantity_user1: 100, quantity_user2: 150 }
  ]);
}

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: seed
}, Symbol.toStringTag, { value: 'Module' }));

const dbUrl = "file:///Users/katielangerman/Projects/weekly-meals-db/.astro/content.db";
const db = createLocalDatabaseClient({ dbUrl });

await seedLocal({
	db,
	tables: {"Weeks":{"columns":{"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}},"start_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"start_date","collection":"Weeks"}},"end_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"end_date","collection":"Weeks"}}},"deprecated":false},"Days":{"columns":{"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Days"}},"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Days","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}}}}},"deprecated":false},"Meals":{"columns":{"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}},"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Meals","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Meals","primaryKey":false,"optional":false}}},"deprecated":false},"Foods":{"columns":{"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Foods","primaryKey":false,"optional":false}},"label_image":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"label_image","collection":"Foods","primaryKey":false,"optional":false}}},"deprecated":false},"MealFoods":{"columns":{"meal_food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_food_id","collection":"MealFoods","primaryKey":true}},"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}}}},"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}}}},"quantity_user1":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user1","collection":"MealFoods","primaryKey":false,"optional":false}},"quantity_user2":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user2","collection":"MealFoods","primaryKey":false,"optional":false}}},"deprecated":false}},
	userSeedGlob: /* #__PURE__ */ Object.assign({"/db/seed.ts": __vite_glob_0_0}),
	integrationSeedFunctions: [],
});

asDrizzleTable("Weeks", {"columns":{"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}},"start_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"start_date","collection":"Weeks"}},"end_date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"end_date","collection":"Weeks"}}},"deprecated":false}, false);
asDrizzleTable("Days", {"columns":{"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}},"date":{"type":"date","schema":{"optional":false,"unique":false,"deprecated":false,"name":"date","collection":"Days"}},"week_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Days","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"week_id","collection":"Weeks","primaryKey":true}}}}},"deprecated":false}, false);
const Meals = asDrizzleTable("Meals", {"columns":{"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}},"day_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Meals","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"day_id","collection":"Days","primaryKey":true}}}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Meals","primaryKey":false,"optional":false}}},"deprecated":false}, false);
asDrizzleTable("Foods", {"columns":{"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}},"name":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"name","collection":"Foods","primaryKey":false,"optional":false}},"label_image":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"label_image","collection":"Foods","primaryKey":false,"optional":false}}},"deprecated":false}, false);
asDrizzleTable("MealFoods", {"columns":{"meal_food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_food_id","collection":"MealFoods","primaryKey":true}},"meal_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"meal_id","collection":"Meals","primaryKey":true}}}},"food_id":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"MealFoods","primaryKey":false,"optional":false,"references":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"food_id","collection":"Foods","primaryKey":true}}}},"quantity_user1":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user1","collection":"MealFoods","primaryKey":false,"optional":false}},"quantity_user2":{"type":"number","schema":{"unique":false,"deprecated":false,"name":"quantity_user2","collection":"MealFoods","primaryKey":false,"optional":false}}},"deprecated":false}, false);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const meals = await db.select().from(Meals);
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const content = formData.get("name");
    if (typeof name === "string") {
      await db.insert(Meals).values({ content });
    }
  }
  await db.select().from(Meals);
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> <h1>Astro</h1> ${meals.map(({ name: name2 }) => renderTemplate`<article> <p>${name2}</p> </article>`)} <form method="POST" style="display: grid"> <label for="meal_name">Meal name</label> <input id="meal_name" name="name"> <button type="submit">Submit</button> </form> <!--render \`comments\`--> </body></html>`;
}, "/Users/katielangerman/Projects/weekly-meals-db/src/pages/index.astro", void 0);

const $$file = "/Users/katielangerman/Projects/weekly-meals-db/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
