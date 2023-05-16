import React, { useState, useRef, useEffect, Key } from 'react';
import { useComboBoxState } from '@react-stately/combobox';
import { useComboBox } from '@react-aria/combobox';
import { ComboBoxProps as ComboBoxPropsI } from '@react-types/combobox';
import { useFilter } from '@react-aria/i18n';
import { ChevronDown } from '@marigold/icons';
import { useButton } from '@react-aria/button';

import { ListBox } from '../ListBox';
import { Popover } from '../Overlay';
import { FieldBase } from '../FieldBase';
import { Input } from '../Input';
import { Button } from '../Button';

import { Item } from '@react-stately/collections';
import { Tag } from '../TagGroup';

export interface ComboBoxProps
  extends Omit<
    ComboBoxPropsI<object>,
    | 'isDisabled'
    | 'isRequired'
    | 'isReadOnly'
    | 'defaultInputValue'
    | 'inputValue'
    | 'onInputChange'
  > {
  variant?: string;
  size?: string;
  error?: boolean;
  width?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  defaultValue?: ComboBoxPropsI<object>['defaultInputValue'];
  value?: ComboBoxPropsI<object>['inputValue'];
  options: any[];
  setOptions?: any;
  mappedOptions: any[];
  selectedItemsList?: any[];
  onChange?: ComboBoxPropsI<object>['onInputChange'];
}

export const ComboBox = ({
  error,
  width,
  disabled,
  required,
  readOnly,
  defaultValue,
  value,
  setOptions,
  options,
  mappedOptions,
  selectedItemsList = [],
  onChange,
  ...rest
}: ComboBoxProps) => {
  const [selectedItems, setSelectedItems] = useState(selectedItemsList);
  const props: ComboBoxPropsI<object> = {
    isDisabled: disabled,
    isRequired: required,
    isReadOnly: readOnly,
    defaultInputValue: defaultValue,
    inputValue: value,
    onInputChange: onChange,
    ...rest,
  };
  useEffect(() => {}, [selectedItems]);
  const { contains } = useFilter({ sensitivity: 'base' });
  const state = useComboBoxState({
    ...props,
    onSelectionChange: value => {
      setSelectedItems(prevItems => [
        ...prevItems,
        { id: value, label: mappedOptions[value as any] },
      ]);
    },
    defaultFilter: contains,
  });
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

  const {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    { ...props, inputRef, buttonRef, listBoxRef, popoverRef },
    state
  );

  // TODO: until `react-aria` gives us error and description props.
  const errorMessageProps = { 'aria-invalid': error };
  const { buttonProps } = useButton(triggerProps, buttonRef);
  const { label, description, errorMessage } = props;
  let removeItem = (key: number) => {
    setSelectedItems(prevItems =>
      prevItems?.filter(item => key !== item.value)
    );
  };
  useEffect(() => {
    const currentOptions = options.filter(function (option) {
      // return selectedItems.some(function (selectedItem) {
      //   return String(option.id) != String(selectedItem.id);
      // });
    });
    if (selectedItems?.length > 0) {
      setOptions(currentOptions);
    }
  }, [selectedItems]);

  return (
    <>
      {selectedItems.length > 0 && (
        <Tag.Group
          items={selectedItems}
          aria-label="TagGrooup removing example"
          allowsRemoving
          onRemove={removeItem}
        >
          {(item: { id: number; label: string }) => <Tag>{item.label}</Tag>}
        </Tag.Group>
      )}
      <FieldBase
        label={label}
        labelProps={labelProps}
        description={description}
        error={error}
        errorMessage={errorMessage}
        errorMessageProps={errorMessageProps}
        width={width}
      >
        <Input
          {...(inputProps as any)}
          ref={inputRef}
          action={
            <Button style={{ padding: '0' }} ref={buttonRef} {...buttonProps}>
              <ChevronDown fontSize={'small'} />
            </Button>
          }
        />
      </FieldBase>
      <Popover
        state={{
          ...state,
          // isOpen: true
        }}
        ref={popoverRef}
        triggerRef={inputRef}
        scrollRef={listBoxRef}
        isNonModal
      >
        <ListBox ref={listBoxRef} state={state} {...listBoxProps} />
      </Popover>
    </>
  );
};

export const XComponent = ({ options, ...props }: ComboBoxProps) => {
  const [optionsList, setOptionsList] = useState(options);
  const mappedOptions = options?.reduce((acc, option) => {
    acc[option.id] = option.label;
    return acc;
  }, {});
  return (
    <>
      <ComboBox
        options={optionsList}
        setOptions={setOptionsList}
        defaultItems={optionsList}
        mappedOptions={mappedOptions}
        {...props}
      >
        {(item: { value: any; label: any }) => (
          <Item key={item.value}>{item.label}</Item>
        )}
      </ComboBox>
    </>
  );
};

ComboBox.Item = Item;
