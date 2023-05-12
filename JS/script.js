document.querySelector('.arrowright').addEventListener('click', function() {
    var items = document.querySelectorAll('.item1');
    for (var i = 0; i < items.length; i++) {
      
      // items[i].style.left = `${parseInt(items[i].style.left) + 150}px`;
      // items[i].classList.add('hovered');
      items[i].style.transform = 'translateX(160px)';
      items[i].style.transition = '0.5s 0.5s';

    }
  });


  // animation: 3s ease-in 1s infinite reverse both running slidein;

  document.querySelector('.arrowleft').addEventListener('click', function() {
    var items = document.querySelectorAll('.item1');
    for (var i = 0; i < items.length; i++) {
      
      items[i].style.transform = 'translateX(-160px)';
      items[i].style.transition = '0.5s 0.5s';

    }
  });


