import {
  useAutocomplete,
  AutocompleteGetTagProps,
} from "@mui/base/AutocompleteUnstyled";
import { styled, SxProps, Theme } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import { ControllerFieldState, ControllerRenderProps } from "react-hook-form";
import { useCallback, useRef } from "react";
import { useVirtual } from "@tanstack/react-virtual";

type Option = {
  label: string;
  value: string | number | string[];
};

type LabelProps = {
  readOnly?: boolean;
};

const Label = styled("label")<LabelProps>(
  ({ readOnly }) => `
  line-height: 1.5;
  display: block;
  color: ${readOnly ? "#a3a3a3" : "#000000"};
  font-weight: 400;
`
);

type InputWrapperProps = {
  focused?: boolean;
  halfWidth?: boolean;
  width?: number;
};

const InputWrapper = styled("div")<InputWrapperProps>(
  ({ halfWidth, width }) => `
  width: ${width ? `${width}px` : halfWidth ? "200px" : "455px"};
  border: 1px solid #a3a3a3;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: #40a9ff;
  }

  &.focused {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: #ffffff;
    color: rgba(0,0,0,.85);
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <button type="button" onClick={onDelete}>
        x
      </button>
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(
  () => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: #40a9ff;
    background-color: #e6f7ff;
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

type ListboxProps = {
  halfWidth?: boolean;
  width?: number;
};

export const Listbox = styled("ul")<ListboxProps>(
  ({ halfWidth, width }) => `
  width: ${width ? `${width}px` : halfWidth ? "200px" : "455px"};
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: #ffffff;
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 9999;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: #fafafa;
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: #e6f7ff;
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

type AutoCompleteProps = {
  id: string;
  label?: string;
  options: Option[];
  field?: ControllerRenderProps<any, any>;
  fieldState?: ControllerFieldState;
  disabled?: boolean;
  halfWidth?: boolean;
  multiselect?: boolean;
  labelStyle?: SxProps<Theme>;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  virtual?: boolean;
  width?: number;
};

export const AutoComplete = ({
  id,
  label,
  options,
  field,
  fieldState,
  disabled = false,
  halfWidth = false,
  multiselect = false,
  labelStyle,
  placeholder,
  readOnly = false,
  required = false,
  virtual = false,
  width,
}: AutoCompleteProps) => {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id,
    defaultValue: multiselect ? [] : options[0],
    multiple: multiselect,
    options,
    disabled,
    readOnly,
    value: multiselect ? field?.value || [] : field?.value || null,
    getOptionLabel: (option) => option.label,
    isOptionEqualToValue: (option, value) => option.value === value.value,
    onChange: (_event, newValue: Option) => {
      field?.onChange(newValue);
    },
  });

  const parentRef = useRef<HTMLUListElement>(null);
  const rowVirtualizer = useVirtual({
    size: groupedOptions.length,
    parentRef: parentRef,
    overscan: 5,
    estimateSize: useCallback(() => 24, []),
  });
  const { virtualItems: virtualRows, totalSize } = rowVirtualizer;

  return (
    <>
      <div
        {...getRootProps()}
        style={{
          pointerEvents: disabled || readOnly ? "none" : "auto",
        }}
      >
        <Label {...getInputLabelProps()} sx={labelStyle} readOnly={readOnly}>
          {label} <span style={{ color: "red" }}>{required ? "*" : null}</span>
        </Label>
        <InputWrapper
          ref={setAnchorEl}
          className={
            focused ? "focused select_label_auto" : "select_label_auto"
          }
          halfWidth={halfWidth}
          width={width}
        >
          {multiselect
            ? value?.map((option: Option, index: number) => (
                <StyledTag
                  label={option.label}
                  {...getTagProps({ index })}
                  key={index}
                />
              ))
            : null}
          <input
            {...getInputProps()}
            placeholder={value?.length > 0 ? "" : placeholder}
            style={{
              background: disabled ? "#e7e7e7" : "#ffffff",
              color: readOnly ? "#a3a3a3" : "#000000",
              fontSize: "16px",
              fontWeight: 400,
              height: "40px",
              width: "100%",
            }}
          />
        </InputWrapper>
      </div>

      {fieldState && fieldState.error?.message && (
        <div
          role="alert"
          aria-label={fieldState.error.message}
          style={{ color: "red", fontSize: "12px", marginTop: "5px" }}
        >
          {fieldState.error.message}
        </div>
      )}

      {groupedOptions.length > 0 ? (
        virtual ? (
          <Listbox
            {...getListboxProps()}
            halfWidth={halfWidth}
            width={width}
            ref={parentRef}
            style={{
              height: virtual ? totalSize + 24 + "px" : "auto",
            }}
          >
            {virtualRows.map((virtualRow) => {
              const option = groupedOptions[virtualRow.index];

              return (
                <li
                  {...getOptionProps({ option, index: virtualRow.index })}
                  key={virtualRow.index}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: virtualRow.size + "px",
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <span>{option.label}</span>
                </li>
              );
            })}
          </Listbox>
        ) : (
          <Listbox {...getListboxProps()} halfWidth={halfWidth} width={width}>
            {(groupedOptions as Option[]).map((option, index) => (
              <li {...getOptionProps({ option, index })} key={index}>
                <span>{option.label}</span>
              </li>
            ))}
          </Listbox>
        )
      ) : null}
    </>
  );
};
