import React, { forwardRef, memo, ReactNode, useMemo } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import useElevationStyles from "../Hooks/useElevationStyles";

export type BlockProps = {
  children?: ReactNode;
} & ViewProps &
  ViewStyle;

function Block(props: BlockProps, ref: React.LegacyRef<View> | undefined) {
  const {
    children,
    elevation = 0,
    style,
    onLayout,
    pointerEvents,
    testID,
    shadowColor,
    ...styleProps
  } = props;
  const elevationStyles = useElevationStyles(elevation, shadowColor);

  return (
    <View
      ref={ref}
      testID={testID}
      onLayout={onLayout}
      pointerEvents={pointerEvents}
      style={[elevationStyles, styleProps, style]}
    >
      {children}
    </View>
  );
}

export default memo(forwardRef(Block));
