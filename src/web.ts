import { WebPlugin } from '@capacitor/core';

import type { JailbreakRootPlugin } from './definitions';

export class JailbreakRootWeb extends WebPlugin implements JailbreakRootPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
