'use strict';
//  [TODO]
//    Create a nav list when clicking on the menu button
//    Nav menu should include all present menus
//    Nav menu should include form to auto e-mail new submissions

let count = 0;

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

setMenuItems(menu1);

// EVENT LISTENERS //
document.querySelector(`.nav-menu-icon`).addEventListener(`click`, function () {
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
