import styled from 'styled-components';


export const Title = styled.h1`
  font-size: 1.5em;
  text-align: start;
  color: white;
  width: auto;
  display: inline-block;
  padding-right: 80px;
`;

export const Price = styled.span`
  font-size: 1.5em;
  text-align: end;
  color: white;  
  padding-right: 15px;
`;

export const Change = styled.span`
  /* Adapt the colours based on primary prop */
  color: ${props => props.val > 0 ? "green" : "red"};
  font-size: 1em;
  text-align: start;
`;

export const SubTitle = styled.h2`
  font-size: 1em;
  text-align: start;
  color: white;
`;

export const Description = styled.span`
  font-size: 12px;
  text-align: start;
  color: white;
`;

export const Wrapper = styled.section`
  padding: 1em 4em 2em 4em;
  background: black;
  margin-bottom: 15px
`;

export const Input = styled.input.attrs({
    type: "text",
    padding: props => props.size || "1em"
})`
color: ;
font-size: 12px;
border: 2px solid green;
border-radius: 22px 0px 0px 22px;
padding: ${props => props.padding};
width: 20%;
`;

export const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? "green" : "white"};
  color: ${props => props.primary ? "white" : "green"};

  font-size: 12px;
  padding: 10px;
  border: 2px solid green;
  border-radius: 0px 22px 22px 0px;
`;

export const PriceLetreiro = styled.span`
  font-size: 12px;
  padding-right: 10px;
`;

export const ChangeLetreiro = styled.span`
  /* Adapt the colours based on primary prop */
  color: ${props => props.val > 0 ? "green" : "red"};
  font-size: 12px;
`;