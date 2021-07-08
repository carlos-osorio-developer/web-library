const propSections = {
  sections: document.getElementsByClassName('sections'),
  navigators: document.getElementsByClassName('navigators'),
};

const metSections = {
  init() {
    for (let i = 0; i < propSections.sections.length; i += 1) {
      propSections.sections[i].classList.add('hidden');
      propSections.navigators[i].addEventListener('click', () => {
        metSections.showElement(i);
      });
    }
    propSections.sections[0].classList.remove('hidden');
  },

  showElement(i) {
    for (let j = 0; j < propSections.sections.length; j += 1) {
      propSections.sections[j].classList.add('hidden');
    }
    propSections.sections[i].classList.remove('hidden');
  },
};

metSections.init();