import styled from 'styled-components';

export const AddProductsToCartContainer = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border : 1px solid #ebdfdf;
    padding: 5px;
    background-color : skyblue;
    position: absolute;
    top : 100px;
    left: 0;
    right: 0;
    margin: auto;
    opacity : 0; 
    z-index: 999999;
    border-radius: 20px;
    transition : all 0.5s;
    &.isVisible {
      opacity : 1;
      transition : all 0.5s;
    }

`;
