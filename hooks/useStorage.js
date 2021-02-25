import { useState, useEffect } from "react";

export const useStorage = (key) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const value = window.localStorage.getItem(key);
        if (value)
            setList(JSON.parse(value));
    }, []);

    const setStorage = (value) => {
        const listValue = window.localStorage.getItem(key);
        var newList = JSON.parse(listValue)
        newList.push({id: value.id, name: value.name});
        window.localStorage.setItem(key, JSON.stringify(newList));
        setList(newList);
    }

    const removeStorage = (index) => {
        const listValue = window.localStorage.getItem(key);
        var newList = JSON.parse(listValue)
        newList.splice(index, 1);
        window.localStorage.setItem(key, JSON.stringify(newList));
        setList(newList);
    }

    const showCount = () => list.length

    return {
        currentStorage: list,
        setStorage,
        removeStorage,
        showCount
    };
}