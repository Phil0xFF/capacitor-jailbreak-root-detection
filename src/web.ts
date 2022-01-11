import { WebPlugin } from '@capacitor/core';

import type { JailbreakRootPlugin } from './definitions';

export class JailbreakRootWeb extends WebPlugin implements JailbreakRootPlugin {
  async isJailbrokenOrRooted(): Promise<{ result: boolean }> {
    return {
      result: false,
    };
  }
}
