export interface JailbreakRootPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
