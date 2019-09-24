import React from 'react'
import {Link} from 'react-router-dom'
import "./PokeInfo.scss"
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
                <img src={this.props.info.image} className="pokeinfo-img"/>
                <p className="p">{this.props.info.number}</p>
                </td>
                <td><Link 
                to={`detail/${this.props.info.id}`}
                >{this.props.info.name}</Link></td>  
                <td>{this.props.info.types.join(", ")}</td>
                <td>{this.props.info.maxHP}</td>
                <td>{this.props.info.maxCP}</td>
                <td>{this.props.info.resistant.join(", ")}</td>
            </tr>
    
        )
    }
}
export default PokeInfo