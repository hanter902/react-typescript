export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const URL_API = IS_DEV? 'http://127.0.0.1:4300/graphql' : 'http://54.169.200.189/api/graphql';