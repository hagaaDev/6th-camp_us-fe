import styled, { css } from 'styled-components';
import { Input, Select, Rate } from 'antd';

/* PC design */
const Container = styled.div`
  position: relative;
  width: 40%;
  min-width: 480px;
  height: 100%;
  padding: 0 75px 0 20px;
  overflow-y: hidden;
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  padding: 22px 0 32px 0;
`;

const Form = styled.form`
  position: relative;
`;

const InputContent = styled(Input)`
  max-width: 300px;
`;

const InputTitle = styled.div`
  font-size: 14px;
  line-height: 22px;
  color: #333333;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SelectAddress = styled(Select)`
  width: 98px;
  height: 32px;
  margin-left: 8px;
`;

const RateContent = styled(Rate)``;

const CategoryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Button = styled.button`
  width: 166px;
  height: 40px;
  color: white;
  background: #73d13d;
  border-radius: 2px;
  border: 0;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;

  ${(props) =>
    props.isResultOpen &&
    css`
      bottom: -70px;
    `}

  & button {
    width: calc(50% - 4px);
  }
`;

/* Mobile design */

const MobileForm = styled.form`
  position: fixed;
  background-color: #73d13d;
  overflow: hidden;
  z-index: 1;
  width: 100%;

  & * {
    font-weight: 600;
  }
`;

const MobileFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ bg }) => (bg ? '#fff' : 'none')};

  width: calc(100% - 10px);
  margin: auto;
  margin-bottom: 10px;

  &:first-child {
    margin-top: 10px;
  }

  & .ant-select-selector,
  .ant-input {
    border: 0 !important;
  }
`;
const MobileGrayBox = styled.div`
  background-color: #f8f8f8;
  padding: 6px;
  white-space: nowrap;
  transition: transform 0.5s;
  overflow-x: auto;
  &::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-track {
    background-color: transparent;
    height: 1px;
  }
`;

const MobileInputContent = styled(Input)`
  max-width: calc(100% - 132px);
`;

const MobileSelectAddress = styled(Select)`
  width: calc(45% - 5px);
  height: 32px;
`;

const MobileRateContent = styled(Rate)`
  margin-right: 10px;
  min-width: 140px;
`;

const MobileCategoryWrap = styled.div`
  width: max-content;
  display: flex;
  justify-content: start;

  & div.sc-hBUSln {
    display: inline-block;
    width: fit-content;
    padding: 4px 20px;
    height: auto;
    margin-bottom: 0;
  }
`;

const MobileButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  width: calc(10% + 10px);

  & svg {
    color: #73d13d;
    font-weight: bold;
    font-size: 18px;
  }
`;

const MobileButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  margin-right: 10px;
`;

const MobileResultArea = styled.div`
  width: calc(100% - 10px);
  min-height: calc(100vh - 194px);
  background-color: #f8f8f8;
  margin: auto;
  margin-top: 144px;
`;

const MobileResultDefault = styled.div`
  min-height: inherit;
  text-align: center;
  color: #bbbbbb;
  font-size: 0.9rem;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  align-items: center;

  & span {
    font-size: 1.3rem;
    margin-right: 4px;
  }
`;

const ChangeViewBtn = styled.button`
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  background-color: #73d13d;
  color: #fff;
  position: fixed;
  z-index: 1;
  bottom: 20px;
  right: 20px;
  font-size: 22px;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 12%);
  border-radius: 4px;
`;

const TopBtn = styled.button`
  border: none;
  outline: none;
  background-color: #e1e5e9;
  color: #222;
  width: 100%;
  padding: 12px 0;

  & span {
    color: #73d13d;
    margin-right: 4px;
  }
`;

export const style = {
  Container,
  Header,
  Form,
  InputContent,
  InputTitle,
  SelectAddress,
  RateContent,
  CategoryWrap,
  FlexBox,
  Button,
  ButtonWrap,
  MobileFlexBox,
  MobileGrayBox,
  MobileForm,
  MobileInputContent,
  MobileSelectAddress,
  MobileRateContent,
  MobileCategoryWrap,
  MobileButton,
  MobileButtonWrap,
  MobileResultArea,
  MobileResultDefault,
  ChangeViewBtn,
  TopBtn,
};
