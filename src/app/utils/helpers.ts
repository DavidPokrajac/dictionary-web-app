export function changeFontFamily(body: HTMLBodyElement, font: string) {
  switch (font) {
    case 'Sans-serif':
      body.style.fontFamily = 'var(--font-sans)';
      break;
    case 'Mono':
      body.style.fontFamily = 'var(--font-mono)';
      break;
    case 'Serif':
      body.style.fontFamily = 'var(--font-serif)';
      break;
  }
}

export function changeStyles(font: string) {
  switch (font) {
    case 'Sans-serif':
      return 'italic' as string;
      break;
    case 'Serif':
      return 'font-thin' as string;
      break;
    case 'Mono':
      return 'not-italic' as string;
  }
}
