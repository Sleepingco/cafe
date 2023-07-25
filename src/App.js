import './App.css';
import Menu from './Menu';
import Order from './order';
import Sales from './sales';
function App() {
  let arMenu = [{name:'Latte',price:3000},
                {name:'Mocca',price:3500},
                {name:'Americano',price:2500}];
  return (
    <table align='center'>
      <caption>카페 버전 0.1</caption>
      <tr>
        <td><Menu menulist={arMenu}/></td>
        <td><Order /></td>
        <td><Sales /></td>
      </tr>
    </table>
  );
}

export default App;
