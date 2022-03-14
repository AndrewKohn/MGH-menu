'use strict';
var weeklyMenu = [
  {
    morning: [`Donut`, `Fresh Banana`],
    lunch: [`Egg Salad`, `Pickle/Grapes`],
    dinner: [`Breaded Pork Chops`, `Buttered Potatoes`, `Broccoli`],
  },
  {
    morning: [`Banana Bread`, `Yogurt w/ Fresh Banana & Strawberries`],
    lunch: [`Grilled Cheese`, `Tomato Soup`],
    dinner: [
      `Rice`,
      `Chicken Curry w/ Potatoes & Carrots`,
      `Slice of Marble Cake`,
    ],
  },
  {
    morning: [`Cinnamon Toast`, `Yogurt w/ Fresh Banana & Blueberries`],
    lunch: [`Hotdog w/ Bun`, `Baked Beans`, `Pickle`],
    dinner: [`Penne Pasta w/ Spaghetti Meat Sauce`, `Steamed Broccoli`],
  },
  {
    morning: [`Frosted Mini Wheats w/ Milk`, `Fresh Blueberries`],
    lunch: [
      `Loaded Salad (Iceberg lettuce, Carrots, Ham, Boiled Eggs, Strawberries, & Salad Dressing)`,
    ],
    dinner: [`Hamburger`, `Fries`, `Pickle`],
  },
  {
    morning: [`Banana Bread`, `Fresh Fruits`],
    lunch: [`Tuna Sandwich`, `Tomato Soup`],
    dinner: [`Meatloaf`, `Mashed Potato`, `Broccoli`],
  },
  {
    morning: [`Oatmeal`, `Fresh Fruits`],
    lunch: [`Turkey Sandwich`, `Garden Salad`],
    dinner: [`Sloppy Joe`, `French Fries`],
  },
  {
    morning: [`Cinnamon Toast`, `Scrambled Eggs`],
    lunch: [`Mac and Cheese w/ Diced Hotdog`],
    dinner: [`Rice`, `Stir-fry Chicken`],
  },
];

// console.log(weeklyMenu);
// console.log(JSON.stringify(menu, null, 4));

for (const day of weeklyMenu) {
  console.log(day);
  console.log(day.morning);
  console.log(day.lunch);
  console.log(day.dinner);
}
