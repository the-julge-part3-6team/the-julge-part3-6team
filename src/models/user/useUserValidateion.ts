import { z } from 'zod';

export const userDataSchema = z.object({
  name: z.string().min(1, '이름이 비었어요.'),
  phone: z
    .string()
    .min(1, '핸드폰번호가 비었어요.')
    .max(11, '핸드폰 번호를 올바르게 입력해주세요.'),
});
