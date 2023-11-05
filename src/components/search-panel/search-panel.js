import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term)   // выполняет действие в app
    }

    render() {
        return (
            <input 
                type='text'
                className='form-control search-input'
                placeholder='Find an employee'
                value={this.state.term}
                onChange={this.onUpdateSearch}/> // отслеживаем событие
        )
    }
}

export default SearchPanel;