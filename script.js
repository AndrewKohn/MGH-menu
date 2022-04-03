'use strict';
//  [TODO]
//  ✅  Create a nav list when clicking on the menu button
//  ✅  Nav menu should include all present menus
//  ✅  Have an event handler for when the user clicks outside of the nav menu in order to close it
//    Nav menu should include form to auto e-mail new submissions
//    Add hover effects over day/meal according to respective hovered item.

// console.log(weeklyMenu);
// console.log(JSON.stringify(weeklyMenu, null, 4));

const overlay = document.querySelector(`.overlay`);
const navBtn = document.querySelector(`.nav-menu-btn`);
const navBtnOpened = document.querySelector(`.nav-menu--opened`);
const navScreen = document.querySelector(`.nav-screen`);
const navMenu = document.querySelector(`.nav-menu`);
const menuGrid = document.querySelector(`.menu-grid`);
const menuItem = document.querySelector(`.menu--meal`);
const listMenu1 = document.querySelector(`.list--menu-0`);
const listMenu2 = document.querySelector(`.list--menu-1`);
const listMenu3 = document.querySelector(`.list--menu-2`);
const menuNumberEl = document.querySelector(`.menu-number`);
const formSubmitBtn = document.querySelector(`.form-submit-btn`);

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

      // console.log(i, j, menu[i][j]);
    }
  }
};

// Removes all menu items from grid
const removeGridMenuElements = () => {
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      while (document.getElementById(`meal--${i}-${j}`).firstChild) {
        document
          .getElementById(`meal--${i}-${j}`)
          .removeChild(document.getElementById(`meal--${i}-${j}`).lastChild);
      }
    }
  }
};

// Opens nav menu
const openMenu = () => {
  navScreen.classList.toggle(`hidden`);
  overlay.classList.toggle(`hidden`);
  navMenu.classList.toggle(`anim--slide-left`);
  navMenu.classList.toggle(`anim--slide-right`);
  overlay.classList.toggle(`anim--blur-overlay`);
  overlay.classList.toggle(`anim--unblur-overlay`);
};

// Closes nav menu
const closeMenu = () => {
  navMenu.classList.toggle(`anim--slide-left`);
  navMenu.classList.toggle(`anim--slide-right`);
  overlay.classList.toggle(`anim--blur-overlay`);
  overlay.classList.toggle(`anim--unblur-overlay`);

  // 0.5s delay to animation performance
  setTimeout(() => {
    navScreen.classList.toggle(`hidden`);
    overlay.classList.toggle(`hidden`);
  }, 500);
};

//  [TODO]  if string contains a `,`, then split it to a new string
const getSubmissionInfo = (currentDay, currentMeal) => {
  const submitDataInput = document.getElementById(
    `form-input--${currentDay}-${currentMeal}`
  );

  if (submitDataInput.textContent.includes(`,`)) {
    return submitDataInput.value;
  } else {
    return `[` + submitDataInput.value + `]`;
  }
};

// INIT ON STARTUP
setMenuItems(menu1);

// EVENT LISTENERS //
// Menu Button Events
overlay.addEventListener(`click`, closeMenu);
navBtn.addEventListener(`click`, openMenu);
navBtnOpened.addEventListener(`click`, closeMenu);

// Menu grid hover effect
// menuGrid.addEventListener(`mouseover`, e => {
//   if (menuItem === e.target) {
//     menuItem.classList.add(`menu-item--hover`);
//   }
// });

// Menu List Events
listMenu1.addEventListener(`click`, function () {
  removeGridMenuElements();
  setMenuItems(menu1);
  menuNumberEl.textContent = `1`;
  closeMenu();
});

listMenu2.addEventListener(`click`, function () {
  removeGridMenuElements();
  setMenuItems(menu2);
  menuNumberEl.textContent = `2`;
  closeMenu();
});

listMenu3.addEventListener(`click`, function () {
  removeGridMenuElements();
  setMenuItems(menu3);
  menuNumberEl.textContent = `3`;
  closeMenu();
});

// Form Submission Event
formSubmitBtn.addEventListener(`click`, e => {
  e.preventDefault();

  for (let day = 0; day < 7; day++) {
    for (let mealTime = 0; mealTime < 3; mealTime++) {
      console.log(day, mealTime, getSubmissionInfo(day, mealTime));
    }
  }
});
