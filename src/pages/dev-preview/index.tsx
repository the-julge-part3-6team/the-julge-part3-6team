import theme from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

const ExampleBtn = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${theme.Colors.Red[10]};
`;

const index = () => {
  return (
    <>
      <ExampleBtn>asdsa</ExampleBtn>
      <hr />
      <div>asdas</div>
      <hr />
      <div>asdas</div>
    </>
  );
};

export default index;
