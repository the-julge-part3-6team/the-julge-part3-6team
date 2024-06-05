import { apiInstance } from '@/shared/utils/axios';

export const putImageByS3 = async ({
  file,
  url,
}: {
  file: File;
  url: string;
}) => {
  const formData = new FormData();
  formData.append('file', file);
  localStorage.setItem('hasImage', 'true');
  return await apiInstance.put(url, file, {
    headers: { 'Content-Type': 'application/octet-stream' },
  });
};
