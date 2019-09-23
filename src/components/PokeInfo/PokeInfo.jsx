import React from 'react'
import {Link} from 'react-router-dom'
import listToParagraph from '../../util/listToParagraph'

// function PokeInfo (props){
// }
class PokeInfo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <tr>
                <td>
                <img src={this.props.info.image} style={{display : "inline-block", width: "40px", height: "30px"}}/>
                <td>{this.props.info.number}</td>               
                </td>
                <td><Link 
                to={`detail/${this.props.info.id}`}
                >{this.props.info.name}</Link></td>  
                <td>{listToParagraph(this.props.info.types)}</td>
                <td>{this.props.info.maxHP}</td>
                <td>{this.props.info.maxCP}</td>
                <td>{listToParagraph(this.props.info.resistant)}</td>
            </tr>
    
        )
    }
}
export default PokeInfo