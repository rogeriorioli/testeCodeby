import styled from 'styled-components';

export const CartContainer = styled.div`
    border : 1px solid #ccc;
    width: 100%;
`;

export const CarItem = styled.div`
    border-bottom : 1px solid #ccc;
    width: 100%;
    display : flex;
    padding :15px;
    align-items: center;
    .image-container {
       margin-right: 15px;
    }

`;

export const CartFooter = styled.div`
    display : flex;
    justify-content: flex-end;
    padding: 15px;
    span {
      font-weight: bold;
    }
`

