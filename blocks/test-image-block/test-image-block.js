/**
 * Decorates the authored background and overlay images as a title banner.
 * @param {Element} block The test image block element
 */
export default function decorate(block) {
  const backgroundImage = block.querySelector('img[data-aue-prop="desktop-image"]');
  const overlayImage = block.querySelector('img[data-aue-prop="desktop-overlay-image"]');

  if (!backgroundImage || !overlayImage) return;

  block.classList.add('test-image-banner');
  const [backgroundRow, overlayRow] = block.children;
  backgroundRow.classList.add('test-image-banner-row', 'test-image-banner-background-row');
  overlayRow.classList.add('test-image-banner-row', 'test-image-banner-overlay-row');
  backgroundImage.classList.add('test-image-banner-background');
  overlayImage.classList.add('test-image-banner-overlay');
}
