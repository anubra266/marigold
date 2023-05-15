import React, { useState, useRef, useEffect } from 'react';
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
  options?: any[];
  setOptions?: any;
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
  selectedItemsList = [],
  onChange,
  ...rest
}: ComboBoxProps) => {
  const [selectedItems, setSelectedItems] = useState(selectedItemsList);
  const mappedItems = options?.reduce((acc, obj) => {
    return { [obj.id]: obj.name };
  }, []);
  console.log('mappedItems', mappedItems);
  useEffect(() => {}, [selectedItems]);
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
      setSelectedItems(prevItems => [...prevItems, value]);
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
    const filteredArr = options?.filter(option => {
      return !selectedItems.includes(option.id);
    });
    setOptions([...filteredArr]);
    console.log(options);
  }, [selectedItems]);
  return (
    <>
      <Tag.Group
        items={options}
        aria-label="selected items"
        allowsRemoving
        onRemove={removeItem}
      >
        {item => {
          console.log('item', item);
          return selectedItems.includes(item.id) ? (
            <Tag>{item.label}</Tag>
          ) : (
            <Tag>s</Tag>
          );
        }}
      </Tag.Group>
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

  useEffect(() => {
    // console.log("optionsList", optionsList)
  }, [optionsList]);
  return (
    <>
      <ComboBox
        options={optionsList}
        setOptions={setOptionsList}
        defaultItems={optionsList}
        {...props}
        // label="Animals"
      >
        {item => <Item key={item.value}>{item.label}</Item>}
      </ComboBox>
    </>
  );
};

ComboBox.Item = Item;
