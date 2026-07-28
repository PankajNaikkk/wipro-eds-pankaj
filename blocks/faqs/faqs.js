export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item, index) => {
    const children = [...item.children];

    if (children.length < 2) return;

    const questionWrapper = children[0];
    const answerWrapper = children[1];

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-${index}`);
    button.innerHTML = questionWrapper.innerHTML;

    const panel = document.createElement('div');
    panel.className = 'faq-answer';
    panel.id = `faq-${index}`;
    panel.innerHTML = answerWrapper.innerHTML;
    panel.style.maxHeight = '0px';

    questionWrapper.replaceWith(button);
    answerWrapper.replaceWith(panel);

    item.classList.add('faq-item');

    button.addEventListener('click', () => {
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      // Close all other accordions
      items.forEach((otherItem) => {
        if (otherItem === item) return;

        const otherButton = otherItem.querySelector('.faq-question');
        const otherPanel = otherItem.querySelector('.faq-answer');

        if (otherButton && otherPanel) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherItem.classList.remove('open');
          otherPanel.style.maxHeight = '0px';
        }
      });

      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        item.classList.remove('open');
        panel.style.maxHeight = '0px';
      } else {
        button.setAttribute('aria-expanded', 'true');
        item.classList.add('open');
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  });
}
