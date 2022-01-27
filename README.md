# Capacitor Jailbreak Root Detection

Jailbreak Root detection plugin for capacitor.

## Install

Install the package.
```bash
npm install jailbreak-root-detection
npx cap sync
```

### iOS installation
Add 'cydia' to the query schema of your app, otherwise the jailbreak detection will not work.
```bash
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>cydia</string>
</array>
```

## API

<docgen-index>

* [`isJailbrokenOrRooted()`](#isjailbrokenorrooted)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isJailbrokenOrRooted()

```typescript
isJailbrokenOrRooted() => any
```

**Returns:** <code>any</code>

--------------------


### Interfaces


#### JailbreakRootResult

| Prop         | Type                 |
| ------------ | -------------------- |
| **`result`** | <code>boolean</code> |

</docgen-api>
