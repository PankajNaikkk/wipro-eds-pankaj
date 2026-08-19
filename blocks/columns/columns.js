export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  const blockText = block.textContent.toLowerCase();
  if (blockText.includes('innovation network')) {
    block.classList.add('columns-innovation-network');
  } else if (blockText.includes('wipro intelligence')) {
    block.classList.add('columns-wipro-intelligence');
  }

  [...block.children].forEach((row) => {
    row.classList.add('columns-row');

    [...row.children].forEach((col) => {
      col.classList.add('columns-column');

      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.parentElement;
        picWrapper.classList.add('columns-image-wrapper');
        pic.classList.add('columns-picture');
        pic.querySelector('img').classList.add('columns-image');
        col.classList.add('columns-img-col');
      }

      const text = col.querySelector('[data-aue-prop="text"]');
      if (text) text.classList.add('columns-text');
    });
  });
}
