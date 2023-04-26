import React from 'react';
import { connect } from 'react-redux';
import './card.css';
import { deleteProduct } from '../../redux/actions/actions';


export class Card extends React.Component{
   constructor(props){
      super(props)
      deleteProduct()
   }
   handleDelete = ()=>{
this.props.deleteProduct(this.props.id)
   }

   render(){
      return (
         <div className='cardBg'>
            <h5>{this.props.name}: </h5>
            <h5>${this.props.price}</h5>
            <button onClick= {this.handleDelete}className='cardBtn'>X</button>
         </div>
      )
   };
};

export function mapDispatchToProps(dispatch) {
   return{
      deleteProduct: (id) => dispatch(deleteProduct(id))
   }
}

export default connect(null, mapDispatchToProps)(Card);
