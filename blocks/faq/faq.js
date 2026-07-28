export default function decorate(block) {
  const rows = [...block.children];

  block.textContent = '';

  rows.forEach((row, index) => {
    const cols = [...row.children];

    if (cols.length < 2) return;

    const question = cols[0];
    const answer = cols[1];

    const item = document.createElement('div');
    item.className = 'faq-item';

    const button = document.createElement('button');
    button.className = 'faq-question';
    button.type = 'button';
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', `faq-${index}`);
    button.innerHTML = question.innerHTML;

    const panel = document.createElement('div');
    panel.className = 'faq-answer';
    panel.id = `faq-${index}`;
    panel.hidden = true;
    panel.innerHTML = answer.innerHTML;

    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';

      button.setAttribute('aria-expanded', !expanded);
      panel.hidden = expanded;
      item.classList.toggle('open', !expanded);
    });

    item.append(button, panel);
    block.append(item);
  });
}
