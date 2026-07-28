export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item, index) => {
    const cols = [...item.children];

    if (cols.length < 2) return;

    const questionWrapper = cols[0];
    const answerWrapper = cols[1];

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-${index}`);
    button.innerHTML = questionWrapper.innerHTML;

    const panel = document.createElement('div');
    panel.className = 'faq-answer';
    panel.id = `faq-${index}`;
    panel.hidden = true;
    panel.innerHTML = answerWrapper.innerHTML;

    // Clear existing content
    item.innerHTML = '';
    item.classList.add('faq-item');

    item.append(button, panel);

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
      item.classList.toggle('open', !expanded);
    });
  });
}
