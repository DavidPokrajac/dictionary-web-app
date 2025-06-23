export function changeFontFamily(body: HTMLBodyElement, font: string) {
  switch (font) {
    case 'sans-serif':
      body.style.fontFamily = 'var(--font-sans)';
      break;
    case 'mono':
      body.style.fontFamily = 'var(--font-mono)';
      break;
    case 'serif':
      body.style.fontFamily = 'var(--font-serif)';
      break;
  }
}
