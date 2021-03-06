// Таймер обратного отсчета
// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно
// определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах,
// страницах регистрации событий, во время технического обслуживания и т. д.

// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и
// секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.

// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Feb 17, 2020'),
// });

// Для подсчета значений используй следующие готовые формулы, где time - разница между
// targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

/*примечание
если 1 минут/секунд текст minute/second */

const valueDays = document.querySelector('span[data-value="days"]');
const valueHours = document.querySelector('span[data-value="hours"]');
const valueMins = document.querySelector('span[data-value="mins"]');
const valueSecs = document.querySelector('span[data-value="secs"]');

const stopDate = new Date('Feb 26, 2020');

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();

      const time = stopDate - currentTime;
      this.updateTextContent(time);
    }, 1000);
  }

  updateTextContent(time) {
    valueDays.textContent = this.padStart(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    valueHours.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    valueMins.textContent = this.padStart(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    valueSecs.textContent = this.padStart(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }
  padStart(value) {
    return String(value).padStart(2, '0');
  }
}
const counterDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 26, 2020'),
});

counterDown.start();
