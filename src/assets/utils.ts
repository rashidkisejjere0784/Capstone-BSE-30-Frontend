// @ts-nocheck

import { useState } from 'react'

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible((prevState) => !prevState)
  }

  const inputType = visible ? 'text' : 'password'

  return { inputType, visible, toggleVisibility }
}

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const extractNum = (value: string) => {
  return Number(value.match(/\d+/g))
}

export const getRandomProducts = (productsArray, numOfProducts) => {
  const shuffled = [...productsArray] // Create a shallow copy to avoid mutating the original array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, numOfProducts)
}


//set cookies

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}
export function setUserCookie(user) {
  const userString = JSON.stringify(user);
  setCookie('user', userString, 1 / 24);
}
export function getUserCookie() {
  const userString = getCookie('user');
  return userString ? JSON.parse(userString) : '';
}
export function removeUserCookie() {
  setCookie('user', '', -1);
}


// Function to calculate the subtotal
export function calculateSubTotal(products) {
  return products.reduce((sum, item) => {

    const price  = item.price;
    const quantity  = item.quantity;
    return sum + price * quantity;

  }, 0);
}

export function calculateDiscount(products) {
  return products.reduce((totalDiscount, item) => {
    const price= item.price;
    const discount = item.discount
    const quantity  = item.quantity;
    const discountAmount =
      discount > 1 ? discount * quantity : price * discount * 0.01 * quantity;
    return totalDiscount + discountAmount;
  }, 0);
}

// Function to calculate the total after discounts
export function calculateTotal(products) {
  const subTotal = calculateSubTotal(products);
  const discount = calculateDiscount(products);
  return subTotal - discount;
}


//cart
export const getCartProducts = (cartItems) => {
  if (!cartItems?.products?.length) return [];

  const productMap = cartItems.products.reduce((acc, item) => {
    const productId = item.product._id;
    const totalQuantity = item.cartItem.quantity;
    if (acc[productId]) {
      acc[productId].quantity += totalQuantity;
    } else {
      acc[productId] = {
        ...item.product,
        quantity: totalQuantity,
      };
    }
    return acc;
  }, {});

  return Object.values(productMap);
};