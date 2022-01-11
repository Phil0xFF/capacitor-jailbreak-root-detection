export interface JailbreakRootPlugin {
  isJailbrokenOrRooted(): Promise<JailbreakRootResult>;
}

export interface JailbreakRootResult {
  result: boolean;
}
