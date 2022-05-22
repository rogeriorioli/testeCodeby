import styled from 'styled-components';

export const CardContainer = styled.div`
     border: 1px solid #ebdfdf;
     width : 30%;
     display: flex;
     padding: 15px;
     flex-direction: column;
     justify-content: stretch;
     position: relative;
     @media screen and (max-width: 768px) {
       width: 48%;
       margin : 1%;
     }
     .price-container {
       color : gray;
       text-align: center;
       width: 100%;
     }
`;

export const ImageProductContainer = styled.div`
    width: 100%;
`
export const ProductTitleContainer = styled.div`
 padding: 10px 0;
  h2{
    text-align: center;
      overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  width:100%;
  }
`

export const ProductButtonContainer = styled.div`
  margin-top: 10px;
`