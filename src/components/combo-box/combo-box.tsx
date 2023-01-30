import { useEffect, useRef, useState } from 'react';
import { InputField, ListItem, ListWrapper, Wrapper } from './combo-box.style';
import { IDataItem } from './combo-box.types';
import PropTypes from 'prop-types';
import React from 'react';

export const ComboBox = ({
  size,
  options,
  placeholder,
  backgroundColor,
  borderColor,
  textColor,
  placeholderColor,
  isDisable,
  listBgColor,
  listTextColor,
  highlightColor,
  ...props
}) => {
  const autocomplete = useRef();
  const [optionsData, setOptionsData] = useState<Array<IDataItem>>([]);
  const [value, setValue] = useState('');
  const [query, setQuery] = useState(value);
  const [isShow, setIsShow] = useState(false);

  const handleInputChange = (val: string) => {
    if (val === '') {
      setOptionsData([]);
    } else {
      setOptionsData([
        ...options.filter(
          (item) => item.title.toLowerCase().indexOf(val.toLowerCase()) > -1
        )
      ]);
    }

    setValue(val);
    setQuery(val);
    props.onChange(val);
  };
  const handleClickOutSide = (e) => {
    if (
      autocomplete.current &&
      !(autocomplete.current as HTMLDivElement)?.contains(e.target)
    ) {
      setIsShow(false);
    }
  };
  const highlightSearchText = (text: string) => {
    const pattern = new RegExp('(' + query + ')', 'gi');
    return text.replace(pattern, `<b>${query}</b>`);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);

  useEffect(() => {
    optionsData.length !== 0 ? setIsShow(true) : setIsShow(false);
  }, [optionsData]);

  return (
    <Wrapper ref={autocomplete} size={size}>
      <InputField
        type="search"
        placeholder={placeholder}
        isSearch={true}
        value={query}
        backgroundColor={backgroundColor}
        borderColor={borderColor}
        textColor={textColor}
        placeholderColor={placeholderColor}
        onChange={(e) => handleInputChange(e.target.value)}
        disabled={isDisable}
        onFocus={() => {
          setIsShow(true);
          setOptionsData(options);
          props.onFocus();
        }}
      />
      {isShow && (
        <ListWrapper>
          {optionsData.map((item, index) => (
            <ListItem
              onClick={() => {
                setQuery(item.title);
                setIsShow(false);
                setValue(item.title);
              }}
              listBgColor={listBgColor}
              listTextColor={listTextColor}
              highlightColor={highlightColor}
              key={item.id}
            >
              {
                <div
                  dangerouslySetInnerHTML={{
                    __html: highlightSearchText(item.title)
                  }}
                />
              }
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
};

ComboBox.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  textColor: '#000',
  placeholderColor: null,
  size: 'medium',
  isDisable: true,
  placeholder: '',
  listBgColor: '#fff',
  listTextColor: '#000',
  onChange: null,
  onBlur: null,
  onFocus: null
};

ComboBox.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string,
  listBgColor: PropTypes.string,
  listTextColor: PropTypes.string,
  highlightColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  isDisable: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
