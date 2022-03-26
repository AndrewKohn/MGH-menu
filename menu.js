'use strict';
var menu1 = [
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

var menu2 = [
  [
    [`Lemon Bread`, `Yogurt w/ fresh sliced banana/strawberry`],
    [`Grilled Cheese`, `Fresh sliced pineapple`],
    [`Chicken Rotini Casserole w/ Broccoli`, `Dinner roll`],
  ],
  [
    [`Cereal`, `Fresh sliced strawberries`],
    [
      `Loaded Salad (Iceberg lettuce, Carrots, Ham, Boiled Eggs, Strawberries, & Salad Dressing)`,
    ],
    [`Pork lo mein w/ mixed veggies`, `Banana w/ jello`, `Dinner roll`],
  ],
  [
    [`Peanut butter sandwich`, `Yogurt q/ fresh fruits`],
    [`Chicken macaroni w/ soup and veggies`, `Pretzel roll`],
    [`Meatballs`, `Mashed potatoes`, `Carrots & corn`],
  ],
  [
    [`Pancakes`, `Yogurt`, `Fresh Fruits`],
    [`Grilled Cheese`, `Pineapple`],
    [`Sloppy Joe`, `Fresh orange`],
  ],
  [
    [`Cereal`, `Fresh fruits`],
    [`Hotdog w/ bun`, `Sliced cucumber`],
    [`Hamburger`, `Garden Salad`],
  ],
  [
    [`French Toast`, `Fresh Fruits`],
    [`Cold cut sandwich`, `Fresh pineapple`],
    [`Stir-fry Chicken w/ Broccoli`, `Buttered Potatoes`],
  ],
  [
    [`Oatmeal`, `Yogurt w/ frest fruits`],
    [`House Salad`, `Mandarin Orange`],
    [`Spaghetti w/ Meatsauce`, `Dinner roll`],
  ],
];

var menu3 = [
  [
    [`Peanut butter toast`, `Yogurt w/ fresh banana/blueberries`],
    [`Egg salad sandwich`, `Fresh orange`, `Pickle`],
    [`Roast Beef soup`, `Slice of chocolate cake`],
  ],
  [
    [`Lemon bread`, `Yogurt w/ fresh banana/strawberries`],
    [`Grilled Cheese`, `Baked beans`],
    [`Beef Stroganoff w/ broccoli`, `Dinner Roll`],
  ],
  [
    [`Pancakes`, `Scrambled eggs`, `Mixed fruits`],
    [`Tuna Sandwich`, `Pineapple`, `Pickle`],
    [`Sloppy Joe`, `Chips`, `Mandarin Orange`],
  ],
  [
    [`Oatmeal w/ milk`, `Yogurt w/ mixed fruits`],
    [`Grilled Turkey and cheese`, `Orange/Pickle`],
    [`Chicken Alfredo w/ Broccoli`],
  ],
  [
    [`Lemon bread`, `Mixed fruits`],
    [`Hotdog w/ bun`, `Baked beans`],
    [`Scallop Potatoes`, `Mixed veggies`],
  ],
  [
    [`French Toast`, `Mixed fruits`],
    [`Mac and cheese`, `Mixed fruits`],
    [`Sloppy Joe`, `Pineapple/Pickle`],
  ],
  [
    [`Cereal`, `Fresh Fruits`],
    [
      `Loaded Salad (Iceberg lettuce, Carrots, Ham, Boiled Eggs, Strawberries, & Salad Dressing)`,
    ],
    [`Spaghetti w/ Meatsauce`, `Dinner Roll`],
  ],
];

const gridHtml = `
<div class="menu-grid hidden">
        <!-- Menu Headers -->
        <div class="nav-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="nav-menu-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <div class="grid--item-container">
          <h2 class="menu-head">BREAKFAST</h2>
        </div>
        <div class="grid--item-container">
          <h2 class="menu-head">LUNCH</h2>
        </div>
        <div class="grid--item-container">
          <h2 class="menu-head">DINNER</h2>
        </div>

        <!-- Monday -->
        <div class="grid--item-container">
          <h2 class="menu-head">MONDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--0-0"></ul>
        <ul class="menu--meal" id="meal--0-1"></ul>
        <ul class="menu--meal" id="meal--0-2"></ul>

        <!-- Tuesday -->
        <div class="grid--item-container">
          <h2 class="menu-head">TUESDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--1-0"></ul>
        <ul class="menu--meal" id="meal--1-1"></ul>
        <ul class="menu--meal" id="meal--1-2"></ul>

        <!-- Wednesday -->
        <div class="grid--item-container">
          <h2 class="menu-head">WEDNESDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--2-0"></ul>
        <ul class="menu--meal" id="meal--2-1"></ul>
        <ul class="menu--meal" id="meal--2-2"></ul>

        <!-- Thursday -->
        <div class="grid--item-container">
          <h2 class="menu-head">THURSDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--3-0"></ul>
        <ul class="menu--meal" id="meal--3-1"></ul>
        <ul class="menu--meal" id="meal--3-2"></ul>

        <!-- Friday -->
        <div class="grid--item-container">
          <h2 class="menu-head">FRIDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--4-0"></ul>
        <ul class="menu--meal" id="meal--4-1"></ul>
        <ul class="menu--meal" id="meal--4-2"></ul>

        <!-- Saturday -->
        <div class="grid--item-container">
          <h2 class="menu-head">SATURDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--5-0"></ul>
        <ul class="menu--meal" id="meal--5-1"></ul>
        <ul class="menu--meal" id="meal--5-2"></ul>

        <!-- Sunday -->
        <div class="grid--item-container">
          <h2 class="menu-head">SUNDAY</h2>
        </div>
        <ul class="menu--meal" id="meal--6-0"></ul>
        <ul class="menu--meal" id="meal--6-1"></ul>
        <ul class="menu--meal" id="meal--6-2"></ul>
      </div>
`;
