import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { HtmlProps, KebabCase } from '@marigold/types';
import { StringToBoolean, ClassProp } from 'class-variance-authority/dist/types';
export { VariantProps } from 'class-variance-authority';

interface SVGProps extends Omit<HtmlProps<'svg'>, 'fill'> {
    size?: number | string | number[] | string[];
    className?: string;
}
declare const SVG: React__default.ForwardRefExoticComponent<SVGProps & React__default.RefAttributes<SVGSVGElement>>;

type ConfigSchema = Record<string, Record<string, ClassValue>>;
type ConfigVariants<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | null | undefined;
};
type ConfigVariantsMulti<T extends ConfigSchema> = {
    [Variant in keyof T]?: StringToBoolean<keyof T[Variant]> | StringToBoolean<keyof T[Variant]>[] | undefined;
};
type Config<T> = T extends ConfigSchema ? {
    variants?: T;
    defaultVariants?: ConfigVariants<T>;
    compoundVariants?: (T extends ConfigSchema ? (ConfigVariants<T> | ConfigVariantsMulti<T>) & ClassProp : ClassProp)[];
} : never;
type Props<T> = T extends ConfigSchema ? ConfigVariants<T> & ClassProp : ClassProp;
declare const cva: <T>(base?: ClassValue, config?: Config<T> | undefined) => {
    (props?: Props<T> | undefined): string;
    variants: T | undefined;
};
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
declare const cn: (...inputs: ClassValue[]) => string;
declare const createVar: (o: {
    [key: string]: string | number | undefined;
}) => React.CSSProperties;
/**
 * Safely get a dot-notated path within a nested object, with ability
 * to return a default if the full key path does not exist or
 * the value is undefined
 *
 * Based on: https://github.com/developit/dlv
 */
declare const get: (obj: object, path: string, fallback?: any) => any;

interface NestedStringObject {
    [key: string]: NestedStringObject | string;
}
interface ComponentStyleFunction<Variants extends string = never, Sizes extends string = never, Additional extends {
    [name: string]: any;
} = {}> {
    (props?: {
        variant?: Variants | null;
        size?: Sizes | null;
        className?: ClassValue;
    } & Partial<Additional>): string;
    variants: ConfigSchema | undefined;
}
type Theme = {
    name: string;
    screens?: {
        [key: string]: string;
    };
    colors?: NestedStringObject;
    root?: ComponentStyleFunction;
    components: {
        Accordion?: Record<'button' | 'item', ComponentStyleFunction<string, string>>;
        Badge?: ComponentStyleFunction<string, string>;
        Body?: ComponentStyleFunction<string, string>;
        Button?: ComponentStyleFunction<string, string>;
        Card?: ComponentStyleFunction<string, string>;
        DateField?: Record<'segment' | 'field' | 'action', ComponentStyleFunction<string, string>>;
        Dialog?: Record<'closeButton' | 'container', ComponentStyleFunction<string, string>>;
        Divider?: ComponentStyleFunction<string, string>;
        Field?: ComponentStyleFunction<string, string>;
        Footer?: ComponentStyleFunction<string, string>;
        Header?: ComponentStyleFunction<string, string>;
        Headline?: ComponentStyleFunction<string, string>;
        Popover?: ComponentStyleFunction<string, string>;
        HelpText?: Record<'container' | 'icon', ComponentStyleFunction<string, string>>;
        Image?: ComponentStyleFunction<string, string>;
        Checkbox?: Record<'container' | 'label' | 'checkbox', ComponentStyleFunction<string, string>>;
        Switch?: Record<'container' | 'track' | 'thumb', ComponentStyleFunction<string, string>>;
        Input?: Record<'input' | 'icon' | 'action', ComponentStyleFunction<string, string>>;
        Label?: Record<'container' | 'indicator', ComponentStyleFunction<string, string>>;
        List?: Record<'ol' | 'ul' | 'item', ComponentStyleFunction<string, string>>;
        Link?: ComponentStyleFunction<string, string>;
        ListBox?: Record<'container' | 'list' | 'option' | 'section' | 'sectionTitle', ComponentStyleFunction<string, string>>;
        Menu?: Record<'container' | 'section' | 'item', ComponentStyleFunction<string, string>>;
        Radio?: Record<'container' | 'label' | 'radio', ComponentStyleFunction<string, string>>;
        Slider?: Record<'track' | 'thumb' | 'label' | 'output', ComponentStyleFunction<string, string>>;
        Select?: Record<'select' | 'icon', ComponentStyleFunction<string, string>>;
        NumberField?: Record<'group' | 'stepper', ComponentStyleFunction<string, string>>;
        Message?: Record<'container' | 'icon' | 'title' | 'content', ComponentStyleFunction<string, string>>;
        Table?: Record<'table' | 'header' | 'row' | 'cell', ComponentStyleFunction<string, string>>;
        Tag?: Record<'tag' | 'gridCell' | 'closeButton', ComponentStyleFunction<string, string>>;
        Text?: ComponentStyleFunction<string, string>;
        TextArea?: ComponentStyleFunction<string, string>;
        Tooltip?: Record<'container' | 'arrow', ComponentStyleFunction<string, string>>;
        Tabs?: Record<'tabs' | 'container' | 'tabpanel' | 'tab', ComponentStyleFunction<string, string>>;
        Underlay?: ComponentStyleFunction<string, string>;
        Calendar?: Record<'calendar' | 'calendarCell' | 'calendarControllers', ComponentStyleFunction<string, string>>;
        DatePicker?: Record<'container' | 'button', ComponentStyleFunction<string, string>>;
    };
};
type ComponentNames = keyof Theme['components'];
type ThemeComponent<C extends ComponentNames> = NonNullable<Theme['components'][C]>;

interface UseClassNamesProps<C extends ComponentNames> {
    component: C;
    variant?: string;
    size?: string;
    className?: ThemeComponent<C> extends (...args: any) => any ? string : {
        [slot in keyof ThemeComponent<C>]?: string;
    };
}
type ComponentClassNames<C extends ComponentNames> = ThemeComponent<C> extends (...args: any) => any ? string : {
    [slot in keyof ThemeComponent<C>]: string;
};
declare const useClassNames: <C extends "Accordion" | "Badge" | "Body" | "Button" | "Card" | "DateField" | "Dialog" | "Divider" | "Field" | "Footer" | "Header" | "Headline" | "Popover" | "HelpText" | "Image" | "Checkbox" | "Switch" | "Input" | "Label" | "List" | "Link" | "ListBox" | "Menu" | "Radio" | "Slider" | "Select" | "NumberField" | "Message" | "Table" | "Tag" | "Text" | "TextArea" | "Tooltip" | "Tabs" | "Underlay" | "Calendar" | "DatePicker">({ component, className, variant, size, }: UseClassNamesProps<C>) => ComponentClassNames<C>;

/**
 * Hook that can be used to return values based on the current screen size,
 * using breakpoints from the theme (`theme.breakpoints`). Note that this
 * hook is client.side only.
 */
declare const useResponsiveValue: <T>(values: T[], defaultIndex?: number) => T;

type ComponentState = 'active' | 'checked' | 'disabled' | 'error' | 'expanded' | 'focus' | 'focusVisible' | 'hasIcon' | 'hover' | 'indeterminate' | 'readOnly' | 'required' | 'selected' | 'visited';
type StateAttrKeyProps = `data-${KebabCase<ComponentState>}`;
type StateAttrProps = {
    [key in StateAttrKeyProps]?: '';
};
type UseStateProps = {
    [key in ComponentState]?: boolean;
};
/**
 * Given a map of states (e.g. `{ hover: true, focus: false }`) returns an
 * object that can be used to set state props on a component
 * (e.g. `[data-hover]` and `[data-focus]`).
 */
declare const useStateProps: (states: UseStateProps) => StateAttrProps;

declare const useTheme: () => Theme;
interface ThemeProviderProps<T extends Theme> {
    theme: T;
    children: ReactNode;
}
declare function ThemeProvider<T extends Theme>({ theme, children, }: ThemeProviderProps<T>): React__default.JSX.Element;

declare const useSmallScreen: () => boolean;

declare const defaultTheme: {
    name: string;
    screens: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    components: {};
};

declare const width: {
    full: string;
    auto: string;
    px: string;
    0: string;
    '0.5': string;
    1: string;
    '1.5': string;
    2: string;
    '2.5': string;
    3: string;
    '3.5': string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
    '1/2': string;
    '1/3': string;
    '2/3': string;
    '1/4': string;
    '2/4': string;
    '3/4': string;
    '1/5': string;
    '2/5': string;
    '3/5': string;
    '1/6': string;
    '2/6': string;
    '3/6': string;
    '4/6': string;
    '5/6': string;
    '1/12': string;
    '2/12': string;
    '3/12': string;
    '4/12': string;
    '5/12': string;
    '6/12': string;
    '7/12': string;
    '8/12': string;
    '9/12': string;
    '10/12': string;
    '11/12': string;
};
declare const fontWeight: {
    thin: string;
    extralight: string;
    light: string;
    regular: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
};
declare const textSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
};
declare const textStyle: {
    italic: string;
    normal: string;
};
declare const gapSpace: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingSpace: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingSpaceX: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingSpaceY: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingRight: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingLeft: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingTop: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const paddingBottom: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
    10: string;
    11: string;
    12: string;
    14: string;
    16: string;
    20: string;
    24: string;
    28: string;
    32: string;
    36: string;
    40: string;
    44: string;
    48: string;
    52: string;
    56: string;
    60: string;
    64: string;
    72: string;
    80: string;
    96: string;
};
declare const alignment: {
    vertical: {
        alignmentX: {
            none: undefined;
            left: string;
            center: string;
            right: string;
        };
        alignmentY: {
            none: undefined;
            top: string;
            center: string;
            bottom: string;
        };
    };
    horizontal: {
        alignmentY: {
            none: undefined;
            top: string;
            center: string;
            bottom: string;
        };
        alignmentX: {
            none: undefined;
            left: string;
            center: string;
            right: string;
        };
    };
};
declare const placeItems: {
    none: undefined;
    left: string;
    center: string;
    right: string;
};
declare const textAlign: {
    none: undefined;
    left: string;
    center: string;
    right: string;
};
declare const gridColsAlign: {
    left: string;
    center: string;
    right: string;
};
declare const gridColumn: {
    left: string;
    center: string;
    right: string;
};
declare const aspect: {
    square: string;
    landscape: string;
    portrait: string;
    widescreen: string;
    ultrawide: string;
    golden: string;
};
declare const objectFit: {
    contain: string;
    cover: string;
    fill: string;
    none: string;
    scaleDown: string;
};
declare const objectPosition: {
    none: undefined;
    bottom: string;
    center: string;
    left: string;
    leftBottom: string;
    leftTop: string;
    right: string;
    rightBottom: string;
    rightTop: string;
    top: string;
};
declare const cursorStyle: {
    auto: string;
    default: string;
    pointer: string;
    wait: string;
    text: string;
    move: string;
    help: string;
    notAllowed: string;
    none: string;
    progress: string;
    cell: string;
    crosshair: string;
    vertical: string;
    alias: string;
    copy: string;
    noDrop: string;
    grap: string;
    grapping: string;
    scroll: string;
    colResize: string;
    rowResize: string;
    ewResize: string;
    nsResize: string;
    zoomIn: string;
    zoomOut: string;
};
type AspectProp = {
    ratio?: keyof typeof aspect;
};
type AlignmentProp = {
    orientation?: {
        vertical?: {
            alignY?: keyof typeof alignment.vertical.alignmentY;
            alignX?: keyof typeof alignment.vertical.alignmentX;
        };
        horizontal?: {
            alignX?: keyof typeof alignment.horizontal.alignmentX;
            alignY?: keyof typeof alignment.horizontal.alignmentY;
        };
    };
};
type CursorProp = {
    cursor?: keyof typeof cursorStyle;
};
type FontStyleProp = {
    fontStyle?: keyof typeof textStyle;
};
type FontWeightProp = {
    weight?: keyof typeof fontWeight;
};
type FontSizeProp = {
    fontSize?: keyof typeof textSize;
};
type GridColsAlignProp = {
    align?: keyof typeof gridColsAlign;
};
type GridColumn = {
    align?: keyof typeof gridColumn;
};
type GapSpaceProp = {
    space?: keyof typeof gapSpace;
};
type ObjectFitProp = {
    fit?: keyof typeof objectFit;
};
type ObjectPositionProp = {
    position?: keyof typeof objectPosition;
};
type PaddingSpaceProp = {
    space?: keyof typeof paddingSpace;
};
type PaddingSpacePropX = {
    spaceX?: keyof typeof paddingSpaceX;
};
type PaddingSpacePropY = {
    spaceY?: keyof typeof paddingSpaceY;
};
type PaddingRightProp = {
    pr?: keyof typeof paddingRight;
};
type PaddingLeftProp = {
    pl?: keyof typeof paddingLeft;
};
type PaddingTopProp = {
    pt?: keyof typeof paddingTop;
};
type PaddingBottomProp = {
    pb?: keyof typeof paddingBottom;
};
type PlaceItemsProp = {
    align?: keyof typeof placeItems;
};
type TextAlignProp = {
    align?: keyof typeof textAlign;
};
type WidthProp = {
    width?: keyof typeof width;
};

export { AlignmentProp, AspectProp, ClassArray, ClassDictionary, ClassValue, ComponentClassNames, ComponentNames, ComponentState, ComponentStyleFunction, Config, ConfigSchema, ConfigVariants, ConfigVariantsMulti, CursorProp, FontSizeProp, FontStyleProp, FontWeightProp, GapSpaceProp, GridColsAlignProp, GridColumn, NestedStringObject, ObjectFitProp, ObjectPositionProp, PaddingBottomProp, PaddingLeftProp, PaddingRightProp, PaddingSpaceProp, PaddingSpacePropX, PaddingSpacePropY, PaddingTopProp, PlaceItemsProp, Props, SVG, SVGProps, StateAttrKeyProps, StateAttrProps, TextAlignProp, Theme, ThemeComponent, ThemeProvider, ThemeProviderProps, UseClassNamesProps, UseStateProps, WidthProp, alignment, aspect, cn, createVar, cursorStyle, cva, defaultTheme, fontWeight, gapSpace, get, gridColsAlign, gridColumn, objectFit, objectPosition, paddingBottom, paddingLeft, paddingRight, paddingSpace, paddingSpaceX, paddingSpaceY, paddingTop, placeItems, textAlign, textSize, textStyle, useClassNames, useResponsiveValue, useSmallScreen, useStateProps, useTheme, width };
