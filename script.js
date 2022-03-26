'use strict';
let count = 0;

// Create new grid
// const createMenuGrid = menus => {
//   for (let i = 0; i < menus.length; i++) {
//     const gridHtml = `
//     <div class="menu-grid" id="menu--${i}">
//             <!-- Menu Headers -->
//             <div class="nav-btn">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 class="nav-menu-icon"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 stroke-width="2"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </div>

//             <div class="grid--item-container">
//               <h2 class="menu-head">BREAKFAST</h2>
//             </div>
//             <div class="grid--item-container">
//               <h2 class="menu-head">LUNCH</h2>
//             </div>
//             <div class="grid--item-container">
//               <h2 class="menu-head">DINNER</h2>
//             </div>

//             <!-- Monday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">MONDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--0-0"></ul>
//             <ul class="menu--meal" id="meal--0-1"></ul>
//             <ul class="menu--meal" id="meal--0-2"></ul>

//             <!-- Tuesday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">TUESDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--1-0"></ul>
//             <ul class="menu--meal" id="meal--1-1"></ul>
//             <ul class="menu--meal" id="meal--1-2"></ul>

//             <!-- Wednesday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">WEDNESDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--2-0"></ul>
//             <ul class="menu--meal" id="meal--2-1"></ul>
//             <ul class="menu--meal" id="meal--2-2"></ul>

//             <!-- Thursday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">THURSDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--3-0"></ul>
//             <ul class="menu--meal" id="meal--3-1"></ul>
//             <ul class="menu--meal" id="meal--3-2"></ul>

//             <!-- Friday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">FRIDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--4-0"></ul>
//             <ul class="menu--meal" id="meal--4-1"></ul>
//             <ul class="menu--meal" id="meal--4-2"></ul>

//             <!-- Saturday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">SATURDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--5-0"></ul>
//             <ul class="menu--meal" id="meal--5-1"></ul>
//             <ul class="menu--meal" id="meal--5-2"></ul>

//             <!-- Sunday -->
//             <div class="grid--item-container">
//               <h2 class="menu-head">SUNDAY</h2>
//             </div>
//             <ul class="menu--meal" id="meal--6-0"></ul>
//             <ul class="menu--meal" id="meal--6-1"></ul>
//             <ul class="menu--meal" id="meal--6-2"></ul>
//           </div>
//     `;

//     document
//       .querySelector(`.container`)
//       .insertAdjacentHTML(`beforeend`, gridHtml);
//   }
// };

// Set menu[day][mealTime][mealItem] to menu grid
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

      console.log(i, j, menu[i][j]);
    }
  }
};

// console.log(weeklyMenu);
// console.log(JSON.stringify(weeklyMenu, null, 4));

// createMenuGrid(menuArray);
// document.querySelector(`.menu-grid`).classList.toggle(`hidden`);
// setMenuItems(menu1);
// [TODO] Create a nav list to select which menu to choose from
document.querySelector(`.nav-btn`).addEventListener(`click`, function () {
  console.log(`button clicked`);

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      while (document.getElementById(`meal--${i}-${j}`).firstChild) {
        document
          .getElementById(`meal--${i}-${j}`)
          .removeChild(document.getElementById(`meal--${i}-${j}`).lastChild);
      }
    }
  }

  // [TODO] Set default to menu1 on startup
  console.log(`text removal finished`);
  if (count === 0) {
    console.log(count);
    count++;
    setMenuItems(menu1);
  } else if (count === 1) {
    console.log(count);
    count++;
    setMenuItems(menu2);
  } else if (count < 3) {
    console.log(count);
    count = 0;
    setMenuItems(menu3);
  }
});
