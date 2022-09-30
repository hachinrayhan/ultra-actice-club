const setToLocalStorage = innerText => {
    localStorage.setItem('break-time', innerText);
}

const getLocalStorageValue = () => {
    const breakTime = localStorage.getItem('break-time');
    return breakTime;
}

const getTime = (time) => {
    return time;
}

export { setToLocalStorage, getLocalStorageValue, getTime };