import { ColorValue } from "react-native";
declare function useElevationStyles(elevation?: number, shadowColor?: ColorValue | undefined): {
    shadowOpacity?: undefined;
    shadowRadius?: undefined;
    shadowOffset?: undefined;
    shadowColor?: undefined;
    elevation?: undefined;
} | {
    shadowOpacity: number;
    shadowRadius: number;
    shadowOffset: {
        height: number;
        width: number;
    };
    shadowColor: ColorValue;
    elevation: number;
};
export default useElevationStyles;
