declare type BREAK_POINTS = {
    base: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
};
declare type BREAK_POINTS_LOGIC = {
    base: any;
    sm: any;
    md: any;
    lg: any;
    xl: any;
};
declare function useMediaQuery(): {
    mediaQuery: (dimensions: Array<number> | (Partial<BREAK_POINTS> & {
        base: number;
    })) => number;
    mediaQueryLogic: (dimensions: Array<any> | (Partial<BREAK_POINTS_LOGIC> & {
        base: any;
    })) => any;
};
export default useMediaQuery;
