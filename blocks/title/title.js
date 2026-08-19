/**
 * Decorates a title banner with a full-bleed background and centered overlay image.
 * @param {Element} block The title block element
 */
export default function decorate(block) {
  const [backgroundImage, overlayImage] = [...block.querySelectorAll('img')];

  if (!backgroundImage || !overlayImage) return;

  backgroundImage.classList.add('title-background');
  overlayImage.classList.add('title-overlay');
  block.replaceChildren(backgroundImage, overlayImage);
}
