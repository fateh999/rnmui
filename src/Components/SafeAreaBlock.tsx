import React, { forwardRef, memo, ReactNode, useMemo } from "react";
import { SafeAreaView, View, ViewProps, ViewStyle } from "react-native";
import useElevationStyles from "../Hooks/useElevationStyles";

type SafeAreaBlockProps = {
  children?: ReactNode;
};

function SafeAreaBlock(
  props: SafeAreaBlockProps & ViewProps & ViewStyle,
  ref: React.LegacyRef<View> | undefined
) {
  const {
    children,
    elevation = 0,
    style,
    onLayout,
    pointerEvents,
    testID,
    backgroundColor,
    shadowColor,
    ...styleProps
  } = props;
  const elevationStyles = useElevationStyles(elevation, shadowColor);

  return (
    <SafeAreaView
      ref={ref}
      testID={testID}
      onLayout={onLayout}
      pointerEvents={pointerEvents}
      style={[
        elevationStyles,
        styleProps,
        {
          backgroundColor: backgroundColor,
        },
        style,
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

export default memo(forwardRef(SafeAreaBlock));
