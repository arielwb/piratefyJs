

import React from 'react';

// class ListComponent extends React.Component {

//   constructor() {
//     super();  
//   }

//   render() {
//     // let data = this.props.data || [];
//     console.log(this.state)
//     console.log(this.props)
//     return (
//         <ul>
//           {
//             // data.map(
//             //   (item, key) => <li key={key}>{item}</li>)
//           }
//         </ul>
//     );
//   }
// }
const ListComponent = ({ data }) => {
  console.log(data)
  const divStyle = {
    margin: '10px auto'
  };
  
  
  return (
    <ul>
      {
        // data.map(
        //   (item, key) => <li key={key}>{item}</li>)
        <li style={divStyle}>{data}</li>
      }
    </ul>
  )
}


export default ListComponent;


