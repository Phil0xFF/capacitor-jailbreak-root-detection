package de.basecom.plugins.jailbreakroot;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "JailbreakRoot")
public class JailbreakRootPlugin extends Plugin {

    private JailbreakRoot implementation = new JailbreakRoot();

    @PluginMethod
    public void isJailbrokenOrRooted(PluginCall call) {
        boolean isDeviceRooted = RootUtil.isDeviceRooted();

        JSObject ret = new JSObject();
        ret.put("result", implementation.isJailbrokenOrRooted(isDeviceRooted));
        call.resolve(ret);
    }
}
