const setToLocalStorage = innerText => {
    console.log(innerText);
    localStorage.setItem('break-time', innerText);
}

const getLocalStorageValue = () => {
    const breakTime = localStorage.getItem('break-time');
    return breakTime;
}

export { setToLocalStorage, getLocalStorageValue };