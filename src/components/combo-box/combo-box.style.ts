import styled from 'styled-components';
import { getSizeInPX } from './combo-box.utils';

export const Wrapper = styled.div`
  position: relative;
  width: ${(props) => getSizeInPX(props.size)};
`;
export const InputField = styled.input`
  position: relative;
  width: 100%;
  font-size: 14px;
  border: 2px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  border-radius: 8px;
  padding: 0 12px;
  height: 44px;
  outline: none;

  :disabled {
    cursor: no-drop;
    opacity: 0.5;
  }

  ::placeholder {
    color: ${(props) => props.placeholderColor};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.5rem;
  position: absolute;
  top: 44px;
  z-index: 10;
  background: #fff;
  border-radius: 4px;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export const ListItem = styled.button`
  text-align: left;
  padding: 16px 8px;
  width: 100%;
  outline: none;
  border: none;
  background-color: ${(props) => props.listBgColor};
  color: ${(props) => props.listTextColor};

  &:hover {
    background: #e2e2e2;
  }

  b {
    color: ${(props) => props.highlightColor};
  }
`;
