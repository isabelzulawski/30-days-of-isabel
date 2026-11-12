if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('awaiting');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -4% 0px' });

  for (const section of document.querySelectorAll('.reveal:not(#caleb-photo)')) {
    if (section.getBoundingClientRect().top >= innerHeight) {
      section.classList.add('awaiting');
      observer.observe(section);
    }
  }
}

const calebPhoto = document.getElementById('caleb-photo');
const calebReference = document.getElementById('caleb-reference');
if (calebPhoto && calebReference) {
  let frame = 0;
  function updateScrollImages() {
    frame = 0;
    const referenceText = calebReference.getBoundingClientRect();
    const referenceReached = referenceText.top + referenceText.height / 2 <= innerHeight * 0.85;
    calebPhoto.classList.toggle('awaiting', !referenceReached);
  }
  function scheduleUpdate() {
    if (!frame) frame = requestAnimationFrame(updateScrollImages);
  }
  addEventListener('scroll', scheduleUpdate, { passive: true });
  addEventListener('resize', scheduleUpdate);
  updateScrollImages();
}

const projects = document.querySelector('.projects');
const motionPreference = matchMedia('(prefers-reduced-motion: no-preference)');
if (projects && motionPreference.matches) {
  const grid = projects.querySelector('.project-grid');
  const images = [...grid.querySelectorAll('img')];
  const beat = projects.querySelector('.beat');
  let frame = 0;

  function updateProjectFade() {
    frame = 0;
    const bounds = beat.getBoundingClientRect();
    const distance = Math.min(bounds.height * 0.65, innerHeight * 0.55);
    const progress = (innerHeight * 0.85 - bounds.top) / distance;
    images.forEach((image, index) => {
      image.classList.toggle('waiting', progress < index / images.length);
    });
  }

  function scheduleProjectFade() {
    if (!frame) frame = requestAnimationFrame(updateProjectFade);
  }

  updateProjectFade();
  grid.classList.add('fading');
  addEventListener('scroll', scheduleProjectFade, { passive: true });
  addEventListener('resize', scheduleProjectFade);
}
