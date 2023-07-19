/*Задание 1
По аналогии с классным заданием про вампира.

Создайте новый репозиторий на гитхаб, разместите в нем файл ИМЯ_ФАЙЛА.json 
на ваш выбор (например, можно про страну или автомобиль и т.д.). Опубликуйте 
на git pages. Получите ссылку, куда кидать fetch.

После этого создайте страницу с подключенным js файлом. Получите информацию 
из вашего json при помощи fetch, отразите ее на странице. */

const countryApiElement = document.getElementById("country-api");

async function getCountryApiElement(){
    
    const response = await fetch("https://tdumler74.github.io/fake-api2/country.json");
    const obj = await response.json();
    console.log(obj);    
    const {name,language,population} =obj;
    console.log(name,language,population);
    countryApiElement.textContent = `${name}  ${language} ${population}`;

}       
getCountryApiElement();




