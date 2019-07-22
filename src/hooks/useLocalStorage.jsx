import {useState} from 'react';

export const useLocalStorage =  key => {
  const [value] = useState(key);

  function localStorageTest() {
    console.log(`I was called`);
    if (localStorage.getItem(value)) {
      return true;
    }
    return false;
  };

  function localStorageGet() {
    const token = JSON.parse( localStorage.getItem( value ) );
    return token;
  }
  function localStorageSet(item) {
    console.log(`I set ${item} to Local Storage`)
    localStorage.setItem(value, JSON.stringify(item));
  }
  function localStorageDelete() {
    localStorage.removeItem( value );
  }
  return [localStorageTest, localStorageGet, localStorageSet, localStorageDelete]
};
