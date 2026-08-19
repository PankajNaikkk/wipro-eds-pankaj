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
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });

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
}
