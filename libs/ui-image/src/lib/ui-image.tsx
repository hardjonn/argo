import React, { FC, ImgHTMLAttributes } from 'react';

import './ui-image.scss';

export interface SrcListItem {
  width: number;
  src: string;
}

export const UiImage: FC<
  ImgHTMLAttributes<HTMLImageElement> & { srcList: SrcListItem[] }
> = ({ srcList, ...props }) => {
  // generate srcSet
  const srcSet = srcList
    .map(srcItem => `${srcItem.src} ${srcItem.width}w`)
    .join(', ');

  return <img {...props} srcSet={srcSet} sizes="100vw" />;
};

export default UiImage;
