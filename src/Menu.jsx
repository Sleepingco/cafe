import React, {Component} from 'react';
import './App.css';
class Menu extends Component {
    constructor(){
        super();
    }
render(){
    console.log(this.props);
    let menustr='';
    let alMenu = this.props.menulist;
    console.log('length=',alMenu.length)
    for(let i=0;i<alMenu.length;i++){
        // console.log(i);
        // console.log(alMenu[i]);
        // console.log(alMenu[i]['name']);
        // console.log(alMenu[i]['price']);
        menustr+='<option>'+alMenu[i]['name']+', '+
        alMenu[i]['price']+'</option>';
    }
    return(
        <table>
            <thead>
                <tr>
                    <td colSpan={2} align='right'><input type='button' value={"메뉴추가"}></input>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={2}>
                        <select className='Menu' size={20} dangerouslySetInnerHTML={{__html:menustr}}>
                            
                        </select>
                    </td>    
                </tr>
                <tr>
                    <td>메뉴명<input type='text'></input></td>
                </tr>
                <tr>
                    <td>수량<input type='number' /></td>
                </tr>
                <tr>
                    <td><label>합계</label><input type="number" size="6" readOnly id="sum" /></td>
                </tr>
                <tr><td align='center'><input type="button" value="주문" id='btnorder'/><input type="button" value="취소" id='brncancel'/></td></tr>
            </tbody>
        </table>
        )
    }
}
export default Menu;