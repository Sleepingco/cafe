import React, {Component} from 'react';
import './App.css';
class Order extends Component {
    constructor(){
        super();
    }
render(){
    return(
        <table>
            <tbody>
            <tr>
                <td>
                    <select className='Order'  size={20}>
                        <option>라떼  x2 7000</option>
                        <option>아메리카노 x1 2000</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>총액<input type="number" readOnly id='price' /></td>
            </tr>
            <tr>
                <td>모바일<input type="phone" id='mobile' /></td>
            </tr>
            <tr>
                <td align='center'><input type="button" value="주문완료" id='btnsubmit'/><input type="button" value="주문취소" id='btncancel'/></td>
            </tr>
            </tbody>
        </table>
        )
    }
}
export default Order;