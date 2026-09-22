export const users = {
  standard: {
    username: process.env.STANDARD_USER ?? 'standard_user',
    password: process.env.STANDARD_PASSWORD ?? 'secret_sauce',
  },
} as const;
