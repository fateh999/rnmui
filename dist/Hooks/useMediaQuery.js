import { useCallback } from "react";
import { useWindowDimensions } from "react-native";
function useMediaQuery() {
    const { width } = useWindowDimensions();
    const breakPoints = {
        base: 0,
        sm: 480,
        md: 768,
        lg: 992,
        xl: 1280,
    };
    const resultantDimension = useCallback((base, sm, md, lg, xl) => {
        if (width > breakPoints.base && width <= breakPoints.sm) {
            return base;
        }
        else if (width > breakPoints.sm && width <= breakPoints.md) {
            return sm ?? base;
        }
        else if (width > breakPoints.md && width <= breakPoints.lg) {
            return md ?? sm ?? base;
        }
        else if (width > breakPoints.lg && width <= breakPoints.xl) {
            return lg ?? md ?? sm ?? base;
        }
        else {
            return xl ?? lg ?? md ?? sm ?? base;
        }
    }, [width]);
    const resultantValue = useCallback((base, sm, md, lg, xl) => {
        if (width > breakPoints.base && width <= breakPoints.sm) {
            return base;
        }
        else if (width > breakPoints.sm && width <= breakPoints.md) {
            return sm ?? base;
        }
        else if (width > breakPoints.md && width <= breakPoints.lg) {
            return md ?? sm ?? base;
        }
        else if (width > breakPoints.lg && width <= breakPoints.xl) {
            return lg ?? md ?? sm ?? base;
        }
        else {
            return xl ?? lg ?? md ?? sm ?? base;
        }
    }, [width]);
    const mediaQuery = useCallback((dimensions) => {
        if (Array.isArray(dimensions)) {
            const [base, sm, md, lg, xl] = dimensions;
            return resultantDimension(base, sm, md, lg, xl);
        }
        else {
            const { base, sm, md, lg, xl } = dimensions;
            return resultantDimension(base, sm, md, lg, xl);
        }
    }, [width, resultantDimension]);
    const mediaQueryLogic = useCallback((dimensions) => {
        if (Array.isArray(dimensions)) {
            const [base, sm, md, lg, xl] = dimensions;
            return resultantValue(base, sm, md, lg, xl);
        }
        else {
            const { base, sm, md, lg, xl } = dimensions;
            return resultantValue(base, sm, md, lg, xl);
        }
    }, [width, resultantValue]);
    return {
        mediaQuery,
        mediaQueryLogic,
    };
}
export default useMediaQuery;
