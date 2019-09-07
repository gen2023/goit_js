'use strict';
let total=0;
let input;


while (input !== null)
{
    input = prompt('Введите число');
    if (Number(input))
        {
            total=total + Number(input);
        }
        else if (input === null)
            {
                break;
            }
            else
                {
                    alert('введено некоректное число');
                }
}

alert('Общая сумма чисел равна= ' + total);