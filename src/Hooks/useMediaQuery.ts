import { useCallback } from "react";
import { useWindowDimensions } from "react-native";

type BREAK_POINTS = {
  base: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type BREAK_POINTS_LOGIC = {
  base: any;
  sm: any;
  md: any;
  lg: any;
  xl: any;
};

function useMediaQuery() {
  const { width } = useWindowDimensions();

  const breakPoints: BREAK_POINTS = {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
  };

  const resultantDimension = useCallback(
    (base: number, sm?: number, md?: number, lg?: number, xl?: number) => {
      if (width > breakPoints.base && width <= breakPoints.sm) {
        return base;
      } else if (width > breakPoints.sm && width <= breakPoints.md) {
        return sm ?? base;
      } else if (width > breakPoints.md && width <= breakPoints.lg) {
        return md ?? sm ?? base;
      } else if (width > breakPoints.lg && width <= breakPoints.xl) {
        return lg ?? md ?? sm ?? base;
      } else {
        return xl ?? lg ?? md ?? sm ?? base;
      }
    },
    [width]
  );

  const resultantValue = useCallback(
    (base: any, sm: any, md: any, lg: any, xl: any) => {
      if (width > breakPoints.base && width <= breakPoints.sm) {
        return base;
      } else if (width > breakPoints.sm && width <= breakPoints.md) {
        return sm ?? base;
      } else if (width > breakPoints.md && width <= breakPoints.lg) {
        return md ?? sm ?? base;
      } else if (width > breakPoints.lg && width <= breakPoints.xl) {
        return lg ?? md ?? sm ?? base;
      } else {
        return xl ?? lg ?? md ?? sm ?? base;
      }
    },
    [width]
  );

  const mediaQuery = useCallback(
    (
      dimensions: Array<number> | (Partial<BREAK_POINTS> & { base: number })
    ) => {
      if (Array.isArray(dimensions)) {
        const [base, sm, md, lg, xl] = dimensions;
        return resultantDimension(base, sm, lg, md, xl);
      } else {
        const { base, sm, md, lg, xl } = dimensions;
        return resultantDimension(base, sm, lg, md, xl);
      }
    },
    [width, resultantDimension]
  );

  const mediaQueryLogic = useCallback(
    (
      dimensions: Array<any> | (Partial<BREAK_POINTS_LOGIC> & { base: any })
    ) => {
      if (Array.isArray(dimensions)) {
        const [base, sm, md, lg, xl] = dimensions;
        return resultantValue(base, sm, lg, md, xl);
      } else {
        const { base, sm, md, lg, xl } = dimensions;
        return resultantValue(base, sm, lg, md, xl);
      }
    },
    [width, resultantValue]
  );

  return {
    mediaQuery,
    mediaQueryLogic,
  };
}

export default useMediaQuery;
