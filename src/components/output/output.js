// import styled from 'styled-components';
// import * as MUI from '@material-ui/core';
// import { useRef } from 'react';

// const StyledOutput = styled.div`
//   position: relative;
//   box-shadow: inset 5px 5px 8px rgba(0, 0, 0, 0.263),
//     inset -3px -3px 10px rgba(255, 255, 255, 0.201);
//   width: 100%;
//   margin-top: 2rem;
//   background-color: slategray;
//   border: 1 px solid darkblue;
//   color: white;
//   padding: 3rem;
//   font-size: 1.2rem;
//   border-radius: 0.5rem;
//   h2 {
//     span {
//       text-decoration: underline;
//       color: #80ffb7;
//     }
//   }
// `;

// const StyledLi = styled.li`
//   font-size: 1.6rem;
//   margin-left: 2rem;
//   margin-top: 1rem;
//   padding-left: 1rem;
// `;

// const StyledLoader = styled(MUI.CircularProgress)`
//   position: absolute;
//   transform: translate(50%, 50%);
// `;

// const outputHeaderEle = new useRef(null);

// const Output = ({ results, visibility, isLoading, spanText }) => {
//   const resultsList = results.map((item, key) => {
//     return (
//       <StyledLi key={key}>
//         {item.word} ({item.numSyllables} syll.)
//       </StyledLi>
//     );
//   });

//   return (
//     <StyledOutput className={visibility === true ? '' : 'hide'}>
//       <h2 ref={outputHeaderEle}>
//         Words that rhyme with{' '}
//         <span>{isLoading ? <StyledLoader /> : spanText}</span>
//       </h2>
//       <ol>{resultsList}</ol>
//     </StyledOutput>
//   );
// };

// export default Output;
