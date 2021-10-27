// src/lib/services/auth.ts
import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
import { user, isAuthenticated, popupOpen } from '$lib/stores/auth';
import { auth0Config } from '$lib/config/auth_config';

// Create Auth0 Client
async function createClient(): Promise<Auth0Client> {
  const client = await createAuth0Client({
    domain: auth0Config.domain,
    client_id: auth0Config.client_id,
    redirect_uri: auth0Config.redirect_uri
  });

  return client;
}

// Call Auth0 Popup
async function loginWithPopup(client, options): Promise<void> {
  popupOpen.set(true);
  try {
    console.log(client);
    console.log(options);
    await client.loginWithPopup(options);

    user.set(await client.getUser());

    isAuthenticated.set(true);
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
  } finally {
    popupOpen.set(false);
  }
}

// logout function
function logout(client) {
  return client.logout();
}

const auth = {
  createClient,
  loginWithPopup,
  logout
};

export default auth;
