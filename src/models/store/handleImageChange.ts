import { handleImageUpload } from '@/models/store/handleImageUpload';

export const handleImageChange = async (
  file: File,
  mutatePresignedUrl: any,
  mutateImage: any,
  setStoreImage: any,
) => {
  const imageurl = await handleImageUpload(
    file,
    mutatePresignedUrl,
    mutateImage,
  );
  setStoreImage(imageurl);
};
