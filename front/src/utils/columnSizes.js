const columnSizes = {
  xl: {
    desktop: '12',
    tablet: '6',
  },
  l: {
    desktop: '8',
    tablet: '6',
  },
  m: {
    desktop: '6',
    tablet: '6',
  },
  s: {
    desktop: '4',
    tablet: '3',
  },
  xs: {
    desktop: '3',
    tablet: '3',
  },
  xxs: {
    desktop: '1',
    tablet: '2',
  },
};

export const desktopColumns = () => {
  let classes = '';
  for (const key in columnSizes) {
    classes += `&.${key} { grid-column-end: span ${columnSizes[key].desktop}}`;
  }
  return classes;
};

export const tabletColumns = () => {
  let classes = '';
  for (const key in columnSizes) {
    classes += `&.${key} { grid-column-end: span ${columnSizes[key].tablet}}`;
  }
  return classes;
};
