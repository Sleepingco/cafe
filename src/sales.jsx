import React, {Component} from 'react';
import './App.css';
class Sales extends Component {
    constructor(){
        super();
    }
render(){
    return(
        <table>
            <tbody>
            <tr>
                <td>
                    <select  size={20}>
                        <option value="44445555" >[23/05/25 13:30] 44445555 9500원</option>
                        <option value="77778888">[23/05/25 13:35] 7778888 12000원</option>
                        <option value="" >[23/05/25 13:45] -9500원</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>총매출액<input type="number" id='total' /></td>
            </tr>
            </tbody>
        </table>
        )
    }
}
export default Sales;