const btn = document.querySelector(".btn-toggle");
btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

/*----------------button--------------------*/
const buyButtons = document.querySelectorAll('.buy-button');

// Перебираем все кнопки "Купить" и навешиваем на них обработчик события
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Создаем форму
    const form = document.createElement('form');
    form.classList.add('buy-form');

    // Добавляем поле ввода для указания количества товара
    const quantityInput = document.createElement('input');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('min', '1');
    quantityInput.setAttribute('max', '999');
    quantityInput.setAttribute('required', '');
    const quantityLabel = document.createElement('label');
    quantityLabel.textContent = 'Количество товара:';
    quantityLabel.appendChild(quantityInput);
    form.appendChild(quantityLabel);

    // Добавляем радио-баттоны для указания цвета
    const colors = ['Красный', 'Синий', 'Зеленый', 'Желтый'];
    const colorLabel = document.createElement('label');
    colorLabel.textContent = 'Цвет товара:';
    colors.forEach(color => {
      const colorInput = document.createElement('input');
      colorInput.setAttribute('type', 'radio');
      colorInput.setAttribute('name', 'color');
      colorInput.setAttribute('value', color);
      colorLabel.appendChild(colorInput);

      const colorText = document.createTextNode(color);
      colorLabel.appendChild(colorText);
    });
    form.appendChild(colorLabel);

    // Добавляем поле ввода для комментария
    const commentInput = document.createElement('textarea');
    commentInput.setAttribute('maxlength', '2000');
    commentInput.setAttribute('rows', '5');
    const commentLabel = document.createElement('label');
    commentLabel.textContent = 'Комментарий к заказу:';
    commentLabel.appendChild(commentInput);
    form.appendChild(commentLabel);

    // Добавляем кнопки "Купить" и "Закрыть" (можно добавить стили и классы)
    const buyButton = document.createElement('button');
    buyButton.setAttribute('type', 'submit');
    buyButton.textContent = 'Купить';

    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.textContent = 'Закрыть';
    closeButton.addEventListener('click', () => {
      form.remove();
    });

    form.appendChild(buyButton);
    form.appendChild(closeButton);

    // Добавляем форму на страницу (можно задать стили и классы)
    const container = document.createElement('div');
    container.classList.add('buy-form-container');
    container.appendChild(form);
    document.body.appendChild(container);

    // Обработка события отправки формы
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      // Получаем данные из формы
      const quantity = quantityInput.value;
      const color = form.querySelector('input[name="color"]:checked')?.value;
      const comment = commentInput.value;

      // Очищаем форму и скрываем ее
      form.reset();
      container.remove();

      // Отображаем сообщение о покупке 
      const message = `Вы купили товар ${button.dataset.item} в количестве ${quantity} штук, цвет ${color || 'не указан'}, комментарий: ${comment || 'нет'}.`;
      alert(message);
    });
  });
});

/*------------------date----------------*/
function getDayInfo(dateString) {
  const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  
  const date = new Date(dateString);
  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  const weekNumber = Math.ceil((date.getDate() + 6 - date.getDay()) / 7);
  
  return `${dayOfWeek}, ${weekNumber} неделя ${month} ${year} года`;
}

const dateAddedElements = document.querySelectorAll('.date-added');
dateAddedElements.forEach((element) => {
  const dateString = '05.28.2023'; // замените на дату добавления товара
  const dayInfo = getDayInfo(dateString);
  element.textContent = `Добавлено: ${dayInfo}`;
});

/*---------------scrollbtn----------------*/
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
      } else {
        document.getElementById("backToTop").style.display = "none";
      }
    }

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }