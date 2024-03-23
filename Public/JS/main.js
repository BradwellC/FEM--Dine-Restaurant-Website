function openEvent(evt, menu) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName('tab-content');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menu).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// Get the element with id="defaultOpen" and click on it
document.getElementById('defaultOpen').click();

// Counter JS
let counter = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('btn-plus');
const decrementBtn = document.getElementById('btn-minus');

// To increment the value of counter
incrementBtn.addEventListener('click', () => {
  counter++;
  counterValue.innerHTML = counter;
});

// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
  counter--;
  counterValue.innerHTML = counter;
});

// To reset the counter to zero
resetBtn.addEventListener('click', reset);

function reset() {
  counter = 0;
  counterValue.innerHTML = counter;
}
