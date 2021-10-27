// src/lib/config/auth_config.ts
export const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_BASE_URL,
  client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
};
