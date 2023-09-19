export { useAsyncList, useListData } from '@react-stately/data';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactElement, ReactNode, Key, HTMLAttributes, LabelHTMLAttributes, ComponentPropsWithRef, RefObject, ForwardRefExoticComponent, RefAttributes } from 'react';
import { AriaAccordionProps } from '@react-aria/accordion';
import * as _react_types_shared from '@react-types/shared';
import { ItemElement, ItemProps, Node, PressEvents, FocusableDOMProps, CollectionElement, StyleProps, LabelableProps, HelpTextProps } from '@react-types/shared';
import { TreeState } from '@react-stately/tree';
import { GapSpaceProp, AspectProp, WidthProp, AlignmentProp, alignment, PaddingSpaceProp, PaddingSpacePropX, PaddingSpacePropY, PaddingRightProp, PaddingLeftProp, PaddingBottomProp, PaddingTopProp, PlaceItemsProp, GridColumn, GridColsAlignProp, StateAttrProps, TextAlignProp, ObjectFitProp, ObjectPositionProp, Theme, ThemeProviderProps, FontSizeProp, FontWeightProp, FontStyleProp, CursorProp, SVGProps } from '@marigold/system';
export { ThemeProvider, useTheme } from '@marigold/system';
import { NonZeroPercentage, HtmlProps, PropsOf, PolymorphicComponent } from '@marigold/types';
import { SearchAutocompleteProps } from '@react-types/autocomplete';
import { ComboBoxProps as ComboBoxProps$1 } from '@react-types/combobox';
import { AriaCheckboxProps, AriaCheckboxGroupProps } from '@react-types/checkbox';
import { CheckboxGroupState } from '@react-stately/checkbox';
import { AriaDialogProps } from '@react-types/dialog';
import { SeparatorProps } from '@react-aria/separator';
import { DateValue, CalendarDate } from '@internationalized/date';
import { AriaDateFieldProps, AriaDatePickerProps } from '@react-aria/datepicker';
import { AriaCalendarProps, DateValue as DateValue$1, AriaCalendarCellProps, AriaCalendarGridProps } from '@react-aria/calendar';
import { CalendarState } from '@react-stately/calendar';
import { AriaNumberFieldProps } from '@react-types/numberfield';
import { OverlayProps as OverlayProps$1, AriaPopoverProps, AriaModalOverlayProps } from '@react-aria/overlays';
import { OverlayTriggerState } from '@react-stately/overlays';
import { AriaRadioGroupProps, AriaRadioProps } from '@react-types/radio';
import { Item, Section } from '@react-stately/collections';
import { AriaSelectProps } from '@react-types/select';
import { AriaSliderProps } from '@react-types/slider';
import { AriaSwitchProps } from '@react-types/switch';
import { AriaTableProps } from '@react-aria/table';
import { TableStateProps, RowProps as RowProps$1, TableBody, Cell, TableHeader, ColumnProps as ColumnProps$1 } from '@react-stately/table';
import { AriaTextFieldProps } from '@react-types/textfield';
import { PositionProps } from '@react-types/overlays';
import { TooltipTriggerProps as TooltipTriggerProps$1 } from '@react-types/tooltip';
import { AriaTagGroupProps } from '@react-aria/tag';
export { VisuallyHidden } from '@react-aria/visually-hidden';
import { AriaTabListProps } from '@react-types/tabs';

interface AccordionProps extends Omit<AriaAccordionProps<object>, 'children' | 'expandedKeys' | 'disabledKeys' | 'onExpandedChange'> {
    children: ItemElement<object>[] | ItemElement<object>;
    selectionMode?: string;
}
declare const Accordion: {
    ({ children, ...props }: AccordionProps): react_jsx_runtime.JSX.Element;
    Item: <T>(props: AccordionOwnItemProps<T>) => JSX.Element;
};
interface AccordionOwnItemProps<T> extends ItemProps<T> {
    variant?: string;
    size?: string;
    title: string | ReactElement;
}

interface AccordionItemProps {
    item: Node<object>;
    state: TreeState<object>;
    title: string | ReactNode;
    variant?: string;
    size?: string;
}
declare const AccordionItem: ({ item, state, title, variant, size, ...props }: AccordionItemProps) => react_jsx_runtime.JSX.Element;

interface AsideProps extends GapSpaceProp {
    children: [ReactElement, ReactElement];
    side?: 'left' | 'right';
    sideWidth?: string;
    stretch?: boolean;
    wrap?: NonZeroPercentage;
}
declare const Aside: ({ children, sideWidth, space, side, stretch, wrap, }: AsideProps) => react_jsx_runtime.JSX.Element;

interface AspectProps extends HtmlProps<'div'>, AspectProp {
    children?: ReactNode;
    maxWidth?: string;
}
declare const Aspect: ({ ratio, maxWidth, children, }: AspectProps) => react_jsx_runtime.JSX.Element;

interface AutocompleteProps extends Omit<SearchAutocompleteProps<object>, 'isDisabled' | 'isRequired' | 'isReadonly' | 'validationState' | 'icon' | 'onInputChange' | 'inputValue' | 'defaultInputValue'> {
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    error?: boolean;
    defaultValue?: SearchAutocompleteProps<object>['defaultInputValue'];
    value?: SearchAutocompleteProps<object>['inputValue'];
    /**
     * Handler that is called when the input value changes.
     */
    onChange?: SearchAutocompleteProps<object>['onInputChange'];
    /**
     * Handler that is called when the SearchAutocomplete is submitted.
     *
     * A `key` will be passed if the submission is a selected item (e.g. a user
     * clicks or presses enter on an option). If the input is a custom `value`, `key` will be `null`.
     *
     * A `value` will be passed if the submission is a custom value (e.g. a user
     * types then presses enter). If the input is a selected item, `value` will be `null`.
     */
    onSubmit?: (key: Key | null, value: string | null) => void;
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
}
declare const Autocomplete: {
    ({ disabled, required, readOnly, error, onChange, value, defaultValue, variant, size, width, ...rest }: AutocompleteProps): react_jsx_runtime.JSX.Element;
    Item: <T>(props: _react_types_shared.ItemProps<T>) => JSX.Element;
};

interface ComboBoxProps extends Omit<ComboBoxProps$1<object>, 'isDisabled' | 'isRequired' | 'isReadOnly' | 'defaultInputValue' | 'inputValue' | 'onInputChange'> {
    variant?: string;
    size?: string;
    error?: boolean;
    width?: WidthProp['width'];
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    defaultValue?: ComboBoxProps$1<object>['defaultInputValue'];
    value?: ComboBoxProps$1<object>['inputValue'];
    onChange?: ComboBoxProps$1<object>['onInputChange'];
}
declare const ComboBox: {
    ({ error, width, disabled, required, readOnly, defaultValue, value, onChange, variant, size, ...rest }: ComboBoxProps): react_jsx_runtime.JSX.Element;
    Item: <T>(props: _react_types_shared.ItemProps<T>) => JSX.Element;
};

interface BadgeProps extends HtmlProps<'div'> {
    children?: React.ReactNode;
    variant?: string;
    size?: string;
}
declare const Badge: ({ variant, size, children, ...props }: BadgeProps) => react_jsx_runtime.JSX.Element;

interface BreakoutProps extends HtmlProps<'div'>, AlignmentProp {
    children?: ReactNode;
    height?: string;
    alignX?: keyof typeof alignment.horizontal.alignmentX;
    alignY?: keyof typeof alignment.horizontal.alignmentY;
}
declare const Breakout: ({ height, children, orientation, alignX, alignY, ...props }: BreakoutProps) => react_jsx_runtime.JSX.Element;

interface BodyProps extends HtmlProps<'section'> {
    children?: ReactNode;
    variant?: string;
    size?: string;
}
declare const Body: ({ children, variant, size, ...props }: BodyProps) => react_jsx_runtime.JSX.Element;

interface ButtonOwnProps extends PressEvents, FocusableDOMProps, HtmlProps<'button'> {
    children?: ReactNode;
    variant?: string;
    size?: string;
    fullWidth?: boolean;
}
interface ButtonProps extends PropsOf<typeof Button> {
}
declare const Button: PolymorphicComponent<"button", ButtonOwnProps>;

interface CardProps extends HtmlProps<'div'>, GapSpaceProp, PaddingSpaceProp, PaddingSpacePropX, PaddingSpacePropY, PaddingRightProp, PaddingLeftProp, PaddingBottomProp, PaddingTopProp {
    children?: ReactNode;
    variant?: string;
    size?: string;
    p?: PaddingSpaceProp['space'];
    px?: PaddingSpacePropX['spaceX'];
    py?: PaddingSpacePropY['spaceY'];
}
declare const Card: ({ children, variant, size, space, p, px, py, pt, pb, pl, pr, ...props }: CardProps) => react_jsx_runtime.JSX.Element;

interface CenterProps extends HtmlProps<'div'>, GapSpaceProp {
    children?: ReactNode;
    maxWidth?: string;
}
declare const Center: ({ maxWidth, space, children, ...props }: CenterProps) => react_jsx_runtime.JSX.Element;

/**
 * `react-aria` has a slightly different API for the above events.
 * Thus, we adjust our regular props to match them.
 */
type CustomCheckboxProps = 'value' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp';
interface CheckboxProps extends Omit<HtmlProps<'input'>, 'size' | 'type' | 'defaultValue' | CustomCheckboxProps>, Pick<AriaCheckboxProps, CustomCheckboxProps> {
    children?: ReactNode;
    indeterminate?: boolean;
    error?: boolean;
    variant?: string;
    size?: string;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLInputElement>>;

interface CheckboxGroupContextProps extends CheckboxGroupState {
    error?: boolean;
}
/**
 * Needs to be falsy so we can check if a checkbox is used as standalone
 * or in a group.
 */
declare const CheckboxGroupContext: react.Context<CheckboxGroupContextProps>;
declare const useCheckboxGroupContext: () => CheckboxGroupContextProps;
interface CheckboxGroupProps extends Omit<HtmlProps<'div'>, 'onChange'>, AriaCheckboxGroupProps {
    children: ReactNode;
    variant?: string;
    size?: string;
    label?: ReactNode;
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
    value?: string[];
    defaultValue?: string[];
    onChange?: (value: string[]) => void;
    width?: WidthProp['width'];
}
declare const CheckboxGroup: ({ children, required, disabled, readOnly, error, width, ...rest }: CheckboxGroupProps) => react_jsx_runtime.JSX.Element;

interface ColumnsProps extends GapSpaceProp {
    children?: ReactNode;
    columns: Array<number>;
    collapseAt?: string | 0;
    stretch?: boolean;
}
declare const Columns: ({ space, columns, collapseAt, stretch, children, ...props }: ColumnsProps) => react_jsx_runtime.JSX.Element;

interface ContainerProps extends HtmlProps<'div'>, PlaceItemsProp, GridColumn, GridColsAlignProp {
    children?: ReactNode;
    contentType?: 'content' | 'header';
    size?: keyof typeof content | keyof typeof header;
    align?: 'left' | 'right' | 'center';
    alignItems?: PlaceItemsProp['align'];
}
declare const content: {
    small: string;
    medium: string;
    large: string;
};
declare const header: {
    small: string;
    medium: string;
    large: string;
};
declare const Container: ({ contentType, size, align, alignItems, children, ...props }: ContainerProps) => react_jsx_runtime.JSX.Element;

interface DialogControllerProps {
    children: ReactNode;
    dismissable?: boolean;
    keyboardDismissable?: boolean;
    open?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

interface DialogTriggerProps {
    children: [trigger: ReactNode, menu: ReactNode];
    dismissable?: boolean;
    keyboardDismissable?: boolean;
}

interface DialogContextProps {
    open?: boolean;
    close?: () => void;
}

interface DialogChildProps {
    close: DialogContextProps['close'];
    titleProps: HTMLAttributes<HTMLElement>;
}
interface DialogProps extends AriaDialogProps {
    children?: ReactNode | ((props: DialogChildProps) => ReactNode);
    variant?: string;
    size?: string;
    closeButton?: boolean;
}
declare const Dialog: {
    ({ children, variant, size, closeButton, ...props }: DialogProps): react_jsx_runtime.JSX.Element;
    Trigger: ({ children, dismissable, keyboardDismissable, }: DialogTriggerProps) => react_jsx_runtime.JSX.Element;
    Controller: ({ children, dismissable, keyboardDismissable, open, onOpenChange, }: DialogControllerProps) => react_jsx_runtime.JSX.Element;
};

interface DividerProps extends SeparatorProps {
    variant?: string;
}
declare const Divider: ({ variant, ...props }: DividerProps) => react_jsx_runtime.JSX.Element;

interface LabelProps extends HtmlProps<'label'> {
    as?: 'label' | 'span';
    variant?: string;
    size?: string;
    labelWidth?: string;
}
declare const Label: ({ as, children, variant, size, labelWidth, ...props }: LabelProps) => react_jsx_runtime.JSX.Element;

interface FieldBaseProps extends WidthProp {
    children?: ReactNode;
    variant?: string;
    size?: string;
    disabled?: boolean;
    label?: ReactNode;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement> & Pick<LabelProps, 'as'>;
    description?: ReactNode;
    descriptionProps?: HTMLAttributes<HTMLElement>;
    error?: boolean;
    errorMessage?: ReactNode;
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    stateProps?: StateAttrProps;
}
declare const FieldBase: ({ children, variant, size, width, disabled, label, labelProps, description, descriptionProps, error, errorMessage, errorMessageProps, stateProps, ...props }: FieldBaseProps) => react_jsx_runtime.JSX.Element;

interface FieldGroupContextProps {
    labelWidth?: string;
}
declare const FieldGroupContext: react.Context<FieldGroupContextProps>;
declare const useFieldGroupContext: () => FieldGroupContextProps;
interface FieldGroupProps {
    labelWidth?: string;
    children: ReactNode;
}
declare const FieldGroup: ({ labelWidth, children }: FieldGroupProps) => react_jsx_runtime.JSX.Element;

interface FooterProps extends HtmlProps<'footer'> {
    children?: ReactNode;
    variant?: string;
    size?: string;
}
declare const Footer: ({ children, variant, size, ...props }: FooterProps) => react_jsx_runtime.JSX.Element;

interface HeaderProps extends HtmlProps<'header'> {
    children?: ReactNode;
    variant?: string;
    size?: string;
}
declare const Header: ({ children, variant, size, className, ...props }: HeaderProps) => react_jsx_runtime.JSX.Element;

interface HeadlineProps extends HtmlProps<'h1'>, TextAlignProp {
    children?: ReactNode;
    level?: '1' | '2' | '3' | '4' | '5' | '6';
    color?: string;
    variant?: string;
    size?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
declare const Headline: ({ children, variant, size, align, color, level, as, ...props }: HeadlineProps) => react_jsx_runtime.JSX.Element;

interface ImageProps extends HtmlProps<'img'>, ObjectFitProp, ObjectPositionProp {
    variant?: string;
    size?: string;
    children?: never;
    alt: string;
}
declare const Image: ({ variant, size, fit, position, ...props }: ImageProps) => react_jsx_runtime.JSX.Element;

interface InlineProps extends AlignmentProp, GapSpaceProp {
    children?: ReactNode;
    alignX?: keyof typeof alignment.horizontal.alignmentX;
    alignY?: keyof typeof alignment.horizontal.alignmentY;
}
declare const Inline: ({ space, orientation, alignX, alignY, children, ...props }: InlineProps) => react_jsx_runtime.JSX.Element;

interface InputOwnProps extends Omit<HtmlProps<'input'>, 'size' | 'className'> {
    icon?: ReactElement;
    action?: ReactElement;
    variant?: string;
    size?: string;
    className?: {
        container?: string;
        input?: string;
        icon?: string;
    };
}
interface InputProps extends Omit<ComponentPropsWithRef<'input'>, 'size' | 'className'>, InputOwnProps {
}
declare const Input: react.ForwardRefExoticComponent<InputOwnProps & react.RefAttributes<HTMLInputElement>>;

interface DateFieldProps extends Omit<AriaDateFieldProps<DateValue>, 'isDisabled' | 'isReadOnly' | 'isRequired'> {
    onChange?: (value: DateValue) => void;
    value?: DateValue | null;
    defaultValue?: DateValue | null;
    ref?: RefObject<unknown> | undefined;
    triggerRef?: RefObject<HTMLDivElement> | undefined;
    action?: ReactElement;
    isPressed?: boolean;
    error?: boolean;
    errorMessageProps?: HTMLAttributes<HTMLElement>;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
}
declare const DateField: ({ disabled, readOnly, required, error, errorMessage, errorMessageProps, variant, size, action, isPressed, triggerRef, width, ...res }: DateFieldProps) => react_jsx_runtime.JSX.Element;

interface CalendarProps extends Omit<AriaCalendarProps<DateValue$1>, 'isDisabled' | 'isReadOnly'> {
    disabled?: boolean;
    readOnly?: boolean;
    variant?: string;
    size?: string;
}
declare const Calendar: ({ disabled, readOnly, size, variant, ...rest }: CalendarProps) => react_jsx_runtime.JSX.Element;

interface CalendarCellProps extends AriaCalendarCellProps {
    state: CalendarState;
}
declare const CalendarCell: (props: CalendarCellProps) => react_jsx_runtime.JSX.Element;

interface CalendarGridProps extends AriaCalendarGridProps {
    state: CalendarState;
}
declare const CalendarGrid: ({ state, ...props }: CalendarGridProps) => react_jsx_runtime.JSX.Element;

interface DatePickerProps extends Omit<AriaDatePickerProps<CalendarDate>, 'isDisabled' | 'isRequired' | 'isReadOnly' | 'isOpen'> {
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    open?: boolean;
    error?: boolean;
    shouldCloseOnSelect?: boolean;
    variant?: string;
    size?: string;
}
declare const DatePicker: ({ disabled, required, readonly, open, error, shouldCloseOnSelect, variant, size, ...rest }: DatePickerProps) => react_jsx_runtime.JSX.Element;

type InsetProps = {
    children: ReactNode;
    space?: never;
    spaceX?: PaddingSpacePropX['spaceX'];
    spaceY?: PaddingSpacePropY['spaceY'];
} | {
    children: ReactNode;
    space?: PaddingSpaceProp['space'];
    spaceX?: never;
    spaceY?: never;
};
declare const Inset: ({ space, spaceX, spaceY, children }: InsetProps) => react_jsx_runtime.JSX.Element;

interface LinkOwnProps extends PressEvents {
    disabled?: boolean;
    variant?: string;
    size?: string;
    children?: ReactNode;
}
interface LinkProps extends PropsOf<typeof Link> {
}
declare const Link: PolymorphicComponent<"a", LinkOwnProps>;

interface ListItemProps extends HtmlProps<'li'> {
    children?: ReactNode;
}

interface ListProps extends HtmlProps<'ul'> {
    variant?: string;
    size?: string;
    as?: 'ul' | 'ol';
    children?: ReactNode;
}
declare const List: {
    ({ as, children, variant, size, ...props }: ListProps): react_jsx_runtime.JSX.Element;
    Item: ({ children, ...props }: ListItemProps) => react_jsx_runtime.JSX.Element;
};

interface MenuTriggerProps {
    children: [trigger: ReactNode, menu: ReactNode];
    disabled?: boolean;
    open?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
}

interface MenuProps extends Omit<HtmlProps<'ul'>, 'onSelect' | 'size'> {
    children: CollectionElement<object> | CollectionElement<object>[];
    variant?: string;
    size?: string;
    onAction?: (key: Key) => void;
}
declare const Menu: {
    ({ variant, size, ...props }: MenuProps): react_jsx_runtime.JSX.Element;
    Trigger: ({ disabled, open, onOpenChange, children, }: MenuTriggerProps) => react_jsx_runtime.JSX.Element;
    Item: <T>(props: _react_types_shared.ItemProps<T>) => JSX.Element;
    Section: <T_1>(props: _react_types_shared.SectionProps<T_1>) => JSX.Element;
};

interface ActionMenuProps extends MenuProps {
}
declare const ActionMenu: (props: ActionMenuProps) => react_jsx_runtime.JSX.Element;

declare const icons: {
    info: () => react_jsx_runtime.JSX.Element;
    warning: () => react_jsx_runtime.JSX.Element;
    error: () => react_jsx_runtime.JSX.Element;
};
interface MessageProps extends HtmlProps<'div'> {
    messageTitle: ReactNode;
    variant?: keyof typeof icons;
    size?: string;
}
declare const Message: ({ messageTitle, variant, size, children, ...props }: MessageProps) => react_jsx_runtime.JSX.Element;

/**
 * `react-aria` has a slightly different API for some DOM props.
 * Thus, we adjust our regular props to match them.
 */
type CustomProps = 'size' | 'width' | 'type' | 'value' | 'defaultValue' | 'step' | 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp' | 'min' | 'max';
interface NumberFieldProps extends Omit<HtmlProps<'input'>, CustomProps>, Omit<AriaNumberFieldProps, 'isDisabled' | 'isRequired' | 'isReadOnly'>, Pick<FieldBaseProps, 'label' | 'description' | 'error' | 'errorMessage'> {
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
    hideStepper?: boolean;
}
declare const NumberField: react.ForwardRefExoticComponent<NumberFieldProps & react.RefAttributes<HTMLInputElement>>;

interface ModalProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
    open?: boolean;
    onClose?: () => void;
    dismissable?: boolean;
    keyboardDismissable?: boolean;
}
declare const Modal: react.ForwardRefExoticComponent<ModalProps & react.RefAttributes<HTMLDivElement>>;

interface OverlayProps {
    open: boolean;
    children: OverlayProps$1['children'];
    container?: OverlayProps$1['portalContainer'];
}
declare const Overlay: ({ children, container, open }: OverlayProps) => react_jsx_runtime.JSX.Element | null;

interface PopoverProps extends Pick<AriaPopoverProps, 'triggerRef' | 'scrollRef' | 'isNonModal'> {
    keyboardDismissDisabled?: AriaPopoverProps['isKeyboardDismissDisabled'];
    state: OverlayTriggerState;
    children: ReactNode;
}
declare const Popover: react.ForwardRefExoticComponent<PopoverProps & react.RefAttributes<HTMLDivElement>>;

interface TrayProps extends AriaModalOverlayProps, StyleProps, OverlayProps$1 {
    children: ReactNode;
    state: OverlayTriggerState;
}
interface TrayWrapperProps extends TrayProps {
}
declare const Tray: react.ForwardRefExoticComponent<TrayProps & react.RefAttributes<HTMLDivElement>>;
declare const TrayWrapper: react.ForwardRefExoticComponent<TrayWrapperProps & react.RefAttributes<HTMLDivElement>>;

interface UnderlayProps extends HTMLAttributes<HTMLElement> {
    variant?: string;
    size?: string;
}
declare const Underlay: ({ size, variant, ...props }: UnderlayProps) => react_jsx_runtime.JSX.Element;

interface MarigoldProviderProps<T extends Theme> extends ThemeProviderProps<T> {
}
declare function MarigoldProvider<T extends Theme>({ children, theme, }: MarigoldProviderProps<T>): react_jsx_runtime.JSX.Element;

interface RadioGroupProps extends Omit<AriaRadioGroupProps, 'isDisabled' | 'isRquired' | 'isReadOnly ' | 'validationState'> {
    children: ReactNode[];
    width?: WidthProp['width'];
    required?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
    error?: boolean;
}
declare const RadioGroup: ({ children, orientation, width, required, disabled, readOnly, error, ...rest }: RadioGroupProps) => react_jsx_runtime.JSX.Element;

type CustomRadioProps = 'size' | 'width' | 'type' | 'defaultChecked' | 'value' | 'onFocus' | 'onBlur' | 'onKeyUp' | 'onKeyDown';
interface RadioProps extends Omit<HtmlProps<'input'>, CustomRadioProps>, AriaRadioProps {
    width?: string;
    variant?: string;
    size?: string;
    disabled?: boolean;
}
declare const Radio: RadioComponent;
/**
 * We need this so that TypeScripts allows us to add
 * additional properties to the component (function).
 */
interface RadioComponent extends ForwardRefExoticComponent<RadioProps & RefAttributes<HTMLInputElement>> {
    Group: typeof RadioGroup;
}

interface SelectProps extends Omit<AriaSelectProps<object>, 'autoComplete' | 'isOpen' | 'isLoading' | 'onLoadMore' | 'isDisabled' | 'isRequired' | 'validationState' | 'onSelectionChange'>, Omit<HtmlProps<'select'>, 'onKeyUp' | 'onKeyDown' | 'onFocus' | 'onBlur' | 'children' | 'size' | 'onChange'> {
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
    open?: boolean;
    disabled?: boolean;
    required?: boolean;
    error?: boolean;
    onChange?: AriaSelectProps<object>['onSelectionChange'];
}
declare const Select: SelectComponent;
/**
 * We need this so that TypeScripts allows us to add
 * additional properties to the component (function).
 */
interface SelectComponent extends ForwardRefExoticComponent<SelectProps & RefAttributes<HTMLButtonElement>> {
    Option: typeof Item;
    Section: typeof Section;
}

interface SliderProps extends Omit<HtmlProps<'input'>, 'step' | 'value' | 'defaultValue' | 'onChange' | 'onFocus' | 'onBlur' | 'size' | 'width'>, 
/**
 * `react-aria` has a slightly different API for some events e.g `onChange`, `onFocus`
 * `onBlur`. Thus, we adjust our regular props to match them.
 */
Pick<AriaSliderProps, 'maxValue' | 'step' | 'value' | 'defaultValue' | 'onChange'> {
    variant?: string;
    size?: string;
    width?: string;
    formatOptions?: Intl.NumberFormatOptions;
    children?: ReactNode;
}
/**
 * The slider consists of two parts.
 * A label + the output value and the slider functionality itself.
 * The slider itself consists of a track line and a thumb.
 */
declare const Slider: react.ForwardRefExoticComponent<SliderProps & react.RefAttributes<HTMLDivElement>>;

interface SplitProps extends HtmlProps<'div'> {
}
declare const Split: (props: SplitProps) => react_jsx_runtime.JSX.Element;

interface StackProps extends AlignmentProp, GapSpaceProp {
    children?: ReactNode;
    stretch?: boolean;
    alignX?: keyof typeof alignment.vertical.alignmentX;
    alignY?: keyof typeof alignment.vertical.alignmentY;
}
declare const Stack: ({ children, space, stretch, orientation, alignX, alignY, ...props }: StackProps) => react_jsx_runtime.JSX.Element;

type CustomSwitchProps = 'size' | 'value' | 'onBlur' | 'onChange' | 'onFocus' | 'onKeyDown' | 'onKeyUp';
interface SwitchProps extends Omit<AriaSwitchProps, 'isSelected'>, Omit<HtmlProps<'input'>, CustomSwitchProps> {
    selected?: boolean;
    variant?: string;
    size?: string;
    width?: string;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLInputElement>>;

interface TableProps extends Pick<AriaTableProps<object>, 'focusMode' | 'onRowAction' | 'onCellAction'>, Omit<TableStateProps<object>, 'showSelectionCheckboxes'> {
    variant?: string;
    size?: string;
    stretch?: boolean;
}
interface RowProps extends RowProps$1<any> {
    variant?: string;
    size?: string;
}
interface ColumnProps extends Omit<ColumnProps$1<any>, 'width'>, WidthProp {
}
declare const Table: Table;
/**
 * Necessary since TypeScript can not infer the
 * types of the @react-stately components.
 */
interface Table {
    (props: TableProps): JSX.Element;
    Body: typeof TableBody;
    Cell: typeof Cell;
    Header: typeof TableHeader;
    Column: (props: ColumnProps) => JSX.Element;
    Row: (props: RowProps) => JSX.Element;
}

interface TextProps extends HtmlProps<'p'>, TextAlignProp, FontSizeProp, FontWeightProp, FontStyleProp, CursorProp {
    children?: React.ReactNode;
    variant?: string;
    color?: string;
    size?: string;
}
declare const Text: ({ variant, size, color, align, cursor, weight, fontSize, fontStyle, children, ...props }: TextProps) => react_jsx_runtime.JSX.Element;

/**
 * `react-aria` has a slightly different API for the above events.
 * Thus, we adjust our regular props to match them.
 */
type CustomTextAreaEvents = 'onChange' | 'onFocus' | 'onBlur' | 'onCopy' | 'onSelect' | 'onPaste' | 'onCut' | 'onCompositionStart' | 'onCompositionUpdate' | 'onCompositionEnd' | 'onBeforeInput' | 'onInput' | 'onKeyDown' | 'onKeyUp';
interface TextAreaProps extends Omit<HtmlProps<'textarea'>, 'value' | 'defaultValue' | 'size' | CustomTextAreaEvents>, Pick<AriaTextFieldProps, CustomTextAreaEvents>, Pick<FieldBaseProps, 'label' | 'description' | 'error' | 'errorMessage'> {
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
    value?: string;
    defaultValue?: string;
}
declare const TextArea: react.ForwardRefExoticComponent<TextAreaProps & react.RefAttributes<HTMLTextAreaElement>>;

/**
 * `react-aria` has a slightly different API for the above events.
 * Thus, we adjust our regular props to match them.
 */
type CustomTextFieldEvents = 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown' | 'onKeyUp';
interface TextFieldProps extends Omit<HtmlProps<'input'>, 'value' | 'defaultValue' | 'size' | 'width' | CustomTextFieldEvents>, 
/**
 * `react-aria` has a slightly different API for `onChange`, `onFocus`
 * and `onBlur` events. Thus, we adjust our regular props to match them.
 */
Pick<AriaTextFieldProps, CustomTextFieldEvents>, Pick<FieldBaseProps, 'label' | 'description' | 'error' | 'errorMessage'> {
    variant?: string;
    size?: string;
    width?: WidthProp['width'];
    value?: string;
    defaultValue?: string;
}
declare const TextField: react.ForwardRefExoticComponent<TextFieldProps & react.RefAttributes<HTMLInputElement>>;

interface TilesProps extends GapSpaceProp {
    children: ReactNode;
    tilesWidth: string;
    stretch?: boolean;
    equalHeight?: boolean;
}
declare const Tiles: ({ space, stretch, equalHeight, tilesWidth, children, ...props }: TilesProps) => react_jsx_runtime.JSX.Element;

interface TooltipTriggerProps extends Omit<TooltipTriggerProps$1, 'isDisabled' | 'isOpen'>, Omit<PositionProps, 'isOpen'> {
    children: [trigger: ReactElement, menu: ReactElement];
    disabled?: boolean;
    open?: boolean;
}

interface TooltipProps extends HtmlProps<'div'> {
    children?: ReactNode;
    variant?: string;
    size?: string;
}
declare const Tooltip: {
    ({ children, variant, size }: TooltipProps): react_jsx_runtime.JSX.Element;
    Trigger: ({ disabled, open, delay, placement, children, ...rest }: TooltipTriggerProps) => react_jsx_runtime.JSX.Element;
};

interface TagGroupProps extends Omit<AriaTagGroupProps<object>, 'isRequired' | 'validationState'>, LabelableProps, HelpTextProps {
    width?: WidthProp['width'];
    required?: boolean;
    error?: boolean;
    allowsRemoving?: boolean;
}
declare const TagGroup: ({ width, required, error, allowsRemoving, ...rest }: TagGroupProps) => react_jsx_runtime.JSX.Element;

declare const Tag: TagComponent;
/**
 * We need this so that TypeScripts allows us to add
 * additional properties to the component (function).
 */
type ItemComponent = typeof Item;
interface TagComponent extends ItemComponent {
    Group: typeof TagGroup;
}

declare const XLoader: react.ForwardRefExoticComponent<SVGProps & react.RefAttributes<SVGElement>>;

interface TabsProps extends Omit<AriaTabListProps<object>, 'orientation' | 'isDisabled'>, GapSpaceProp {
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    variant?: string;
}
declare const Tabs: {
    ({ space, size, disabled, variant, ...rest }: TabsProps): react_jsx_runtime.JSX.Element;
    Item: <T>(props: _react_types_shared.ItemProps<T>) => JSX.Element;
};

export { Accordion, AccordionItem, AccordionItemProps, AccordionOwnItemProps, AccordionProps, ActionMenu, Aside, AsideProps, Aspect, AspectProps, Autocomplete, AutocompleteProps, Badge, BadgeProps, Body, BodyProps, Breakout, BreakoutProps, Button, ButtonOwnProps, ButtonProps, Calendar, CalendarCell, CalendarCellProps, CalendarGrid, CalendarGridProps, CalendarProps, Card, CardProps, Center, CenterProps, Checkbox, CheckboxGroup, CheckboxGroupContext, CheckboxGroupContextProps, CheckboxGroupProps, CheckboxProps, Columns, ColumnsProps, ComboBox, ComboBoxProps, Container, ContainerProps, CustomCheckboxProps, CustomRadioProps, CustomSwitchProps, CustomTextAreaEvents, CustomTextFieldEvents, DateField, DateFieldProps, DatePicker, DatePickerProps, Dialog, DialogChildProps, DialogProps, Divider, DividerProps, FieldBase, FieldBaseProps, FieldGroup, FieldGroupContext, FieldGroupContextProps, FieldGroupProps, Footer, FooterProps, Header, HeaderProps, Headline, HeadlineProps, Image, ImageProps, Inline, InlineProps, Input, InputOwnProps, InputProps, Inset, InsetProps, Label, LabelProps, Link, LinkOwnProps, LinkProps, List, ListProps, MarigoldProvider, MarigoldProviderProps, Menu, MenuProps, Message, MessageProps, Modal, ModalProps, NumberField, NumberFieldProps, Overlay, OverlayProps, Popover, PopoverProps, Radio, RadioComponent, RadioGroup, RadioGroupProps, RadioProps, RowProps, Select, SelectComponent, SelectProps, Slider, SliderProps, Split, SplitProps, Stack, StackProps, Switch, SwitchProps, Table, TableProps, Tabs, Tag, TagComponent, Text, TextArea, TextAreaProps, TextField, TextFieldProps, TextProps, Tiles, TilesProps, Tooltip, TooltipProps, Tray, TrayProps, TrayWrapper, Underlay, UnderlayProps, XLoader, useCheckboxGroupContext, useFieldGroupContext };
