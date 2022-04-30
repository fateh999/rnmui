import React from "react";
import { PressableProps, View, ViewStyle } from "react-native";
export declare type TouchProps = PressableProps & ViewStyle & {
    style?: ViewStyle;
};
declare const _default: React.ForwardRefExoticComponent<PressableProps & ViewStyle & {
    style?: ViewStyle | undefined;
} & React.RefAttributes<View>>;
export default _default;
