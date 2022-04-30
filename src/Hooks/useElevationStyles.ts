import { useMemo } from "react";
import { Appearance, ColorValue } from "react-native";

function useElevationStyles(
  elevation: number = 0,
  shadowColor: ColorValue | undefined = "black"
) {
  const shadowElevation = useMemo(
    () =>
      elevation === 0
        ? {}
        : {
            shadowOpacity: 0.0015 * elevation + 0.18,
            shadowRadius: 0.54 * elevation,
            shadowOffset: {
              height: 0.6 * elevation,
              width: 0,
            },
            shadowColor,
            elevation,
          },
    [elevation, shadowColor]
  );

  return shadowElevation;
}

export default useElevationStyles;
