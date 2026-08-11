window.addEventListener('scroll', function() {
  var targetDiv = document.getElementById('targetDiv');
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var triggerPosition = 300; // Change this value to your desired pixel threshold

  if (scrollPosition > triggerPosition) {
      targetDiv.classList.remove('hidden');
      targetDiv.classList.add('visible');
  } else {
      targetDiv.classList.remove('visible');
      targetDiv.classList.add('hidden');
  }
});