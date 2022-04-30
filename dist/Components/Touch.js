import React, { forwardRef } from "react";
import { Platform, Pressable, } from "react-native";
import useElevationStyles from "../Hooks/useElevationStyles";
function Touch(props, ref) {
    const { onPress, children, android_disableSound, android_ripple = { borderless: false }, delayLongPress, disabled, hitSlop, onLongPress, onPressIn, onPressOut, pressRetentionOffset, testID, style, borderRadius, elevation = 0, shadowColor, ...styleProps } = props;
    const elevationStyles = useElevationStyles(elevation, shadowColor);
    return (<Pressable ref={ref} testID={testID} android_disableSound={android_disableSound} android_ripple={android_ripple} delayLongPress={delayLongPress} disabled={disabled} hitSlop={hitSlop} onPress={onPress} onLongPress={onLongPress} onPressIn={onPressIn} onPressOut={onPressOut} pressRetentionOffset={pressRetentionOffset} style={({ pressed }) => [
            { opacity: Platform.OS === "ios" ? (pressed ? 0.5 : 1.0) : 1.0 },
            styleProps,
            {
                borderRadius,
                ...elevationStyles,
            },
            style,
        ]}>
      {children}
    </Pressable>);
}
export default forwardRef(Touch);
