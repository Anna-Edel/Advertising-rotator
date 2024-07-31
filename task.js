document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
  
    rotators.forEach(rotator => {
      const cases = rotator.querySelectorAll('.rotator__case');
      let currentIndex = 0;
  
      function rotate() {
        // Удаляем класс активности у текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');
  
        // Переходим к следующему элементу
        currentIndex = (currentIndex + 1) % cases.length;
  
        // Добавляем класс активности к следующему элементу
        cases[currentIndex].classList.add('rotator__case_active');
      }
  
      // Запускаем функцию rotate каждые 1 секунду
      setInterval(rotate, 1000);
    });
  });
  