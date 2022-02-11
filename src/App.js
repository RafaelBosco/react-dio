// export default function App (){
//   return (
//     <h1>Hello World!</h1>
//   )
// }

import Item from './components/Item';
import Card from './components/Card';

const App = () => {
  return(
    // react fragment
    <>
      <h1>Minha primeira aplicação com React!</h1>
      <ul>
        <Item texto='Item 1' />
        <Item texto='Item 2' />
        {/* <Item>Item 3</Item> --> para usar com props.children*/}
      </ul>
      <Card/>
    </>
  )
}

export default App;