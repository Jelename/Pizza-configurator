import * as React from 'react'
import { toppings } from '../data/pizzaData'
import { connect } from 'react-redux' 
import { chooseTopping, deleteTopping } from '../actions/actions'

class PizzaToppings extends React.PureComponent {

    handleChange = (e) => {
        const value = e.target.value;
        if (e.target.checked) {
            if (this.props.topping.length <= 2) { 
                //console.log(this.props.topping)
                //console.log(value);
                this.props.chooseTopping(value);
            }
        } 
        
        // if (e.target.checked) {
        //     this.props.deleteTopping(value)
        // }
    }
      
    render() {        
        return (
            <div>
                <h2>Pick up to 3 toppings</h2>
                <p>€ 0,50 each</p>
                <div className="checkbox-group">
                    {toppings.map((item) => {
                        return (
                            <label key={item} className="form-label capitalize">
                                <input
                                    name='topping'
                                    type='checkbox'
                                    className="form-checkbox"
                                    value={item}
                                    checked={this.props.topping.indexOf(item) !== -1}
                                    onChange={this.handleChange} 
                                /> {item}
                            </label>
                        );
                    })}
                </div>
	        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      topping: state.chooseTopping
    }
  }

export default connect(mapStateToProps, { chooseTopping, deleteTopping })(PizzaToppings)