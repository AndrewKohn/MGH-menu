'use strict';
var weeklyMenu = [
  [
    [`Donut`, `Fresh Banana`],
    [`Egg Salad`, `Pickle/Grapes`],
    [`Breaded Pork Chops`, `Buttered Potatoes`, `Broccoli`],
  ],
  [
    [`Banana Bread`, `Yogurt w/ Fresh Banana & Strawberries`],
    [`Grilled Cheese`, `Tomato Soup`],
    [`Chicken Curry w/ Potatoes & Carrots`, `Rice`, `Slice of Marble Cake`],
  ],
  [
    [`Cinnamon Toast`, `Yogurt w/ Fresh Banana & Blueberries`],
    [`Hotdog w/ Bun`, `Baked Beans`, `Pickle`],
    [`Penne Pasta w/ Spaghetti Meat Sauce`, `Steamed Broccoli`],
  ],
  [
    [`Frosted Mini Wheats w/ Milk`, `Fresh Blueberries`],
    [
      `Loaded Salad (Iceberg lettuce, Carrots, Ham, Boiled Eggs, Strawberries, & Salad Dressing)`,
    ],
    [`Hamburger`, `Fries`, `Pickle`],
  ],
  [
    [`Banana Bread`, `Fresh Fruits`],
    [`Tuna Sandwich`, `Tomato Soup`],
    [`Meatloaf`, `Mashed Potato`, `Broccoli`],
  ],
  [
    [`Oatmeal`, `Fresh Fruits`],
    [`Turkey Sandwich`, `Garden Salad`],
    [`Sloppy Joe`, `French Fries`],
  ],
  [
    [`Cinnamon Toast`, `Scrambled Eggs`],
    [`Mac and Cheese w/ Diced Hotdog`],
    [`Stir-fry Chicken`, `Rice`],
  ],
];

// Set weeklyMenu[day][mealTime][mealItem] to menu grid
const setMenuItems = menu => {
  for (let i = 0; i < menu.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (const menuItem of menu[i][j]) {
        document.getElementById(`meal--${i}-${j}`).insertAdjacentHTML(
          'beforeend',
          `
        <p class="meal--text">${menuItem}</p>
        `
        );
      }

      // console.log(j, i, menu[i][j]);
    }
  }
};

// console.log(weeklyMenu);
// console.log(JSON.stringify(weeklyMenu, null, 4));

setMenuItems(weeklyMenu);

// [TODO] Create a nav list to select which menu to choose from
