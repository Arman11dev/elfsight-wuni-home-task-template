export const getSizeInPX = (size: string) => {
  switch (size) {
    case 'small':
      return '200px';
    case 'large':
      return '100%';
    default:
      return '600px';
  }
};
