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
    let arr = (['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']);
    arr = arr.sort(() => Math.random() - 0.5)
    alert(arr);
    let answerOne = prompt('Чему равнялся первый элемент массива?');
    let answerTwo = prompt('Чему равнялся последний элемент массива?');
    if (answerOne.toLowerCase() === arr[0].toLowerCase() && answerTwo.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        alert ('Поздравляю, угадал оба элемента.')
    } else if (answerOne.toLowerCase() === arr[0].toLowerCase() || answerTwo.toLowerCase() === arr[6].toLowerCase()) { 
        alert ('Вы были близки к победе!')
    } else {
        alert ('не угадал ни одного элемента')
    }

}
