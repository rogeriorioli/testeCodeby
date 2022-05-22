import styled from 'styled-components';

interface CartSyleProps {
  items?: string
}

export const HeaderContainer = styled.header<CartSyleProps>`
    padding : 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ebdfdf;
    .cart {
      position: relative;
      &::before {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: green;
        color : white;
        content: '${props => props.items ? props.items : "0"}';
        position: absolute;
        right: 0;
        top : -10px;
        z-index: 9;
        text-align: center;
        line-height: 20px;
      }
     }
`;
