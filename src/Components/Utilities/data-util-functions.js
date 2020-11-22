import {keys}  from '../Data/config.js';

//get keys/columns to display as columns in table
const getKeys = () => {
    return keys;
}

//get age by epoch birthdate
const getAge =(birthdate)=> {

    let ageDifMs = Date.now() - birthdate.getTime();
    let ageDate = new Date(ageDifMs);
    let age = Math.abs(ageDate.getUTCFullYear() - 1970);

    return age;
}
//convert epoch to date
const getBirthdate = (birthdate) => {

    let utcSeconds = birthdate;
    let date = new Date(0);
    date.setUTCSeconds(utcSeconds);

    return date;
}

//capitalize only first letter
const capitalizeFirstLetter=(key)=>
{
    return key.charAt(0).toUpperCase() + key.slice(1);
}
//capitalize first letter and remove underscore
const setTitleValue=(key)=>
{
    return capitalizeFirstLetter(key).replace("_", " ");
}

//set birthdate and age by birthdate
const setBirthdateAndAge=(obj,key,value)=>{
    
    let date = getBirthdate(value);
    obj[key] = date.toLocaleDateString();
    obj["age"] = getAge(date);
    return obj;
}
//get data to display in table accordingly to required keys((columns)),age calculculted by birthdate
const getFilteredDataByKeys = (tableData) => {
    let keys = getKeys();

    let result =
        tableData.map(item => {
            let obj = {};

            keys.forEach(key => {

                if (key === "birthdate") {
                    obj = setBirthdateAndAge(obj,key,item[key]);
                    return;
                }

                if (key === "age") {return;}

                if (item.hasOwnProperty(key))
                    obj[key] = item[key];
            })
            return obj;
        });

    return result;
}
export default function utils() {
	return {
        getKeys,
		getAge,
        getBirthdate,
        capitalizeFirstLetter,
        setTitleValue,
		getFilteredDataByKeys
	};
}