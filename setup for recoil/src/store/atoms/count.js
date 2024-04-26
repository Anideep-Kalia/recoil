import { atom, selector } from 'recoil';

// Atom to hold counter state
export const counterState = atom({
  key: 'counterState',
  default: 0,
});

// Selector to calculate whether the counter is even or odd
export const counterEvenOddState = selector({
  key: 'counterEvenOddState',
  get: ({ get }) => {
    const counter = get(counterState);
    return counter % 2 === 0 ? 'even' : 'odd';
  },
});

// Atom to hold user data
export const userState = atom({
  key: 'userState',
  default: null,
});

// Selector to calculate the uppercase version of the username
export const uppercaseUsername = selector({
  key: 'uppercaseUsername',
  get: ({ get }) => {
    const user = get(userState);
    return user ? user.username.toUpperCase() : '';
  },
});

// Atom to hold todo list
export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
