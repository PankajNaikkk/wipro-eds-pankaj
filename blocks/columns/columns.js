export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

  // Intelligence
  const intelligence = block.closest('.intelligence');

  if (intelligence) {
    const columnsWrapper = intelligence.querySelector('.columns-wrapper');
    const columns = intelligence.querySelector('.columns');
    const column = intelligence.querySelector('.columns > div');
    const image = intelligence.querySelector('picture')?.closest('p');
    const text = intelligence.querySelector('[data-richtext-component="text"]')?.parentElement;

    columnsWrapper?.classList.add('intelligence-columns-wrapper');
    columns?.classList.add('intelligence-columns');
    column?.classList.add('intelligence-column');
    image?.classList.add('intelligence-image');
    text?.classList.add('intelligence-text');
  }

  // Innovation
  const innovation = block.closest('.innovation');

  if (innovation) {
    const columnsWrapper = innovation.querySelector('.columns-wrapper');
    const columns = innovation.querySelector('.columns');
    const column = innovation.querySelector('.columns > div');
    const image = innovation.querySelector('picture')?.closest('p');
    const text = innovation.querySelector('[data-richtext-component="text"]')?.parentElement;

    columnsWrapper?.classList.add('innovation-columns-wrapper');
    columns?.classList.add('innovation-columns');
    column?.classList.add('innovation-column');
    image?.classList.add('innovation-image');
    text?.classList.add('innovation-text');
  }
}