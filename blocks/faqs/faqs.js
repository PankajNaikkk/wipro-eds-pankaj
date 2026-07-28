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
    panel.hidden = true;
    panel.innerHTML = answerWrapper.innerHTML;

    questionWrapper.replaceWith(button);
    answerWrapper.replaceWith(panel);

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
      item.classList.toggle('open', !expanded);
    });

    item.classList.add('faq-item');
  });
}
