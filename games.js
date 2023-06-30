function getSeason() {
    let month = +prompt('Введите номер месяца от (1 до 12)');
    if (month > 2 && month < 6) {
        alert('Весна');
    } else if (month > 5 && month < 9) {
        alert('Лето');
    } else if (month > 8 && month < 12) {
        alert('Осень');
    } else if (month > 0 && month < 3 || month === 12) {
        alert('Зима');
    } else {
        alert('Введите значение от (1 до 12)');
    }
};

function getWords() {
    let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    return arr.sort;
 
}
    console.log(getWords()); 
