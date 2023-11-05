import './app-filter.css';

const AppFilter = () => {
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For promotion'},
        {name: 'moreThen1000', label: 'Salary more than 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button 
            className='btn btn-light'
            type='button'
            key={name}>
                {label}
        </button>
        )
    })

    return (
         <div className='btn-group'>
            {buttons}
            {/* <button 
                className='btn btn-light'
                type='button'>
                    All employees
            </button>
            <button 
                className='btn btn-outline-light'
                type='button'>
                    For promotion
            </button>
            <button 
                className='btn btn-outline-light'
                type='button'>
                    Salary more than 1000$
            </button> */}
         </div>
    );
}

export default AppFilter;