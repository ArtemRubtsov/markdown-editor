export const insertMarkdown = (value: string) => {
    let toInsert = '';
    switch (value) {
      case 'h1': {
        toInsert = '#';
        return toInsert
      }
      default:
        return;
    }
}