min = Math.floor(0);
max = Math.ceil(100);

const number = Math.floor(Math.random() * (max - min + 1)) + min
console.log(number);

function game() {
    const userNumber = prompt('Введите число');
    console.log(typeof (parseInt(userNumber)));

    switch (userNumber) {

        case (isNaN(parseInt(userNumber))):
            alert('Вы ввели не число. Введите числовое значение');
            
        case (userNumber === null):
            alert('Игра закончена');
            break;


        case (parseInt(userNumber) === number):
            alert('Правильно');
            break;
        case (parseInt(userNumber) > number):
            alert('Меньше');
        case (parseInt(userNumber) < number):
            alert('Больше');
    }
    
}

game();