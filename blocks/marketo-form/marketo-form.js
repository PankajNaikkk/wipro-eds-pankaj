const MARKETO_URL = '//app-ab39.marketo.com';
const MUNCHKIN_ID = '823-VDB-175';

function loadMarketoScript() {
  return new Promise((resolve, reject) => {
    if (window.MktoForms2) {
      resolve();
      return;
    }

    const script = document.createElement('script');

    script.src = `${MARKETO_URL}/js/forms2/js/forms2.min.js`;
    script.async = true;

    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}

export default async function decorate(block) {
  const formId = block.textContent.trim();

  if (!formId) {
    block.textContent = 'Form ID is missing.';
    return;
  }

  const loader = document.createElement('div');
  loader.className = 'marketo-form-loader';
  loader.setAttribute('aria-live', 'polite');
  loader.textContent = 'Loading form…';
  block.replaceChildren(loader);

  try {
    await loadMarketoScript();
  } catch {
    loader.textContent = 'Failed to load form. Please try again later.';
    loader.classList.add('marketo-form-error');
    return;
  }

  const form = document.createElement('form');
  form.id = `mktoForm_${formId}`;
  block.replaceChildren(form);

  window.MktoForms2.loadForm(
    MARKETO_URL,
    MUNCHKIN_ID,
    Number(formId),
  );
}
