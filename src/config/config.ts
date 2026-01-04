import 'dotenv/config';

export const Config = {
  USER_EMAIL: process.env.USER_EMAIL ?? '',
  USER_PASSWORD: process.env.USER_PASSWORD ?? '',
};
