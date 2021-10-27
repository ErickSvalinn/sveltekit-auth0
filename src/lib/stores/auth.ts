// src/lib/stores/auth.ts
import { writable } from 'svelte/store';

const isAuthenticated = writable(false);
const user = writable({});
const popupOpen = writable(false);
const error = writable();

export { isAuthenticated, user, popupOpen, error };
