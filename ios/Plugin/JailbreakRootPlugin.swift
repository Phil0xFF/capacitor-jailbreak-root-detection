import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(JailbreakRootPlugin)
public class JailbreakRootPlugin: CAPPlugin {
    private let implementation = JailbreakRoot()

    @objc func isJailbrokenOrRooted(_ call: CAPPluginCall) {
        if(UIDevice.current.isSimulator) {
            call.resolve([
                "result": false
            ])
        }
        
        call.resolve([
            "result": UIDevice.current.isJailBroken
        ])
    }
    
}
