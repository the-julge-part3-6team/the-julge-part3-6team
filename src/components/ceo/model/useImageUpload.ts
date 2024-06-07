import { useEffect, useState } from 'react';

export const handleImageUpload = async (
  file: File | undefined,
  mutatePresignedUrl: Function,
  mutateSaveImage: Function,
) => {
  if (file) {
    console.log(file);
    const presignedUrlResult = await mutatePresignedUrl('.png');
    const presignedUrl = presignedUrlResult.data.item.url;

    await mutateSaveImage({
      file,
      url: presignedUrl,
    });
    const [imageUrl, _] = presignedUrl.split('?');
    return imageUrl;
  }
};
