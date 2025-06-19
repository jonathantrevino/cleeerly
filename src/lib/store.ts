import { Store } from '@tauri-apps/plugin-store';

let storePromise = Store.load('settings.dat');

export async function hasSeenOnboarding() {
  const store = await storePromise;
  return (await store.get('hasOnboarded')) || false;
}

export async function setOnboarded() {
  const store = await storePromise;
  await store.set('hasOnboarded', true);
  await store.save();
}

