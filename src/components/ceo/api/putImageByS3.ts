import { awsApiInstance } from '@/shared/utils/axios';

export const putImageByS3 = async ({
  file,
  url,
}: {
  file: File;
  url: string;
}) => {
  const formData = new FormData();
  formData.append('file', file);
  return await awsApiInstance.put(url, file, {
    headers: { 'Content-Type': 'application/octet-stream' },
  });
};
