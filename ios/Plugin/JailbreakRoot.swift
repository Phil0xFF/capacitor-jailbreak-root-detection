import Foundation

@objc public class JailbreakRoot: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
