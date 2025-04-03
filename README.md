# Capacitor Jailbreak Root Detection

A Capacitor plugin for detecting jailbroken iOS devices and rooted Android devices in your mobile applications.

## Installation

Install the package using npm:

```bash
npm install @basecom-gmbh/capacitor-jailbreak-root-detection
npx cap sync
```

**Version Compatibility:**

- Use `jailbreak-root-detection@6.0.0` with Capacitor 6.x
- Use `jailbreak-root-detection@7.0.0` with Capacitor 7.x

### iOS Configuration

For iOS jailbreak detection to function properly, you must add 'cydia' to your app's query schemes. Open your `Info.plist` file and add:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>cydia</string>
</array>
```

## API Reference

<docgen-index>

- [`isJailbrokenOrRooted()`](#isjailbrokenorrooted)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isJailbrokenOrRooted()

```typescript
isJailbrokenOrRooted() => Promise<JailbreakRootResult>
```

Checks if the device is jailbroken (iOS) or rooted (Android).

**Returns:** <code>Promise&lt;<a href="#jailbreakrootresult">JailbreakRootResult</a>&gt;</code>

---

### Interfaces

#### JailbreakRootResult

| Property     | Type                 | Description                                         |
| ------------ | -------------------- | --------------------------------------------------- |
| **`result`** | <code>boolean</code> | `true` if device is jailbroken/rooted, else `false` |

</docgen-api>
