import { z } from 'zod';

export const urlSchema = z
  .string()
  .url({
    message: '유효한 URL이 아닙니다. (https://로 시작)',
  })
  .nonempty()
  .startsWith('http://', {
    message: 'http://로 시작해야 합니다.',
  })
  .or(
    z.string().url().nonempty().startsWith('https://', {
      message: 'https://로 시작해야 합니다.',
    }),
  );
