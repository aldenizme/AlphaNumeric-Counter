const DEFAULT_HEADER_TEXT = 'Type/paste your text below.';

function countAlphanumerics() {
  const text = document.getElementById('textInput').value;
  if (!text.trim()) {
    document.getElementById('header').textContent = DEFAULT_HEADER_TEXT;
    return;
  }

  const matches = text.match(/[a-z0-9]/gi);
  const count = matches ? matches.length : 0;

  document.getElementById('header').textContent =
    `You have typed ${count} Characters`;
}

function resetTextInput() {
  document.getElementById('textInput').value = '';
  document.getElementById('header').textContent = DEFAULT_HEADER_TEXT;
  document.getElementById('textInput').focus();
}









