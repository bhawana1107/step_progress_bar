const steps = document.querySelectorAll('.step');
const progressBar = document.querySelector('.progress-bar-run');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

function handleNext(el) {
  for (let i = 1; i < steps.length; i++) {
      if (!steps[i].classList.contains('checked')) {
          steps[i].classList.add('checked');
      let icon = steps[i].querySelector('.icon');     
      if (icon) {
        icon.classList.remove('fa-xmark'); // old icon class
        icon.classList.add('fa-check'); // new icon class
      }
      let text = steps[i].querySelector('.text');
      if (text) {
        text.style.display = 'block';
      }
          prevBtn.disabled = false;
          let progressPercent = (i / (steps.length - 1)) * 100;
          progressBar.style.width = `${progressPercent}%`;
          if (i === steps.length - 1) {
              el.disabled = true;
          }
          break;
      }
  }
}

function handlePrev(el) {
  for (let i = steps.length - 1; i >= 1; i--) {
      if (steps[i].classList.contains('checked')) {
          steps[i].classList.remove('checked');
          if (i == 1) {
              el.disabled = true;
              nextBtn.disabled = false;
          }
       let icon = steps[i].querySelector('.icon');
      
       if (icon) {
         icon.classList.remove('fa-check'); 
         icon.classList.add('fa-xmark');
       }
       let text = steps[i].querySelector('.text');
      if (text) {
        text.style.display = 'none';
      }     
      let progressPercent = ((i - 1) / (steps.length - 1)) * 100;
      progressBar.style.width = `${progressPercent}%`;
          break;
      }
  }
}
