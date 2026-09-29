export const users = {
  standard: {
    username: process.env.STANDARD_USER ?? 'vaishnav@gmail.com',
    password: process.env.STANDARD_PASSWORD ?? 'India@11',
  },
} as const;
