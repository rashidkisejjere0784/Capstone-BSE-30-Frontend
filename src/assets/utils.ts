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
  return userString ? JSON.parse(userString) : null;
}
