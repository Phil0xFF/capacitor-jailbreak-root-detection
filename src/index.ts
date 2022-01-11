import { registerPlugin } from '@capacitor/core';

import type { JailbreakRootPlugin } from './definitions';

const JailbreakRoot = registerPlugin<JailbreakRootPlugin>('JailbreakRoot', {
  web: () => import('./web').then(m => new m.JailbreakRootWeb()),
  electron: () => import('./web').then(m => new m.JailbreakRootWeb()),
});

export * from './definitions';
export { JailbreakRoot };
