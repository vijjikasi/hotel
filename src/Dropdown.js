import React from 'react'

const App = () => {
  return (
    <div className={{childSelect}}>
        <p>CHILDREN (Age 12y and below)</p>
        <ul className={{group}}>
            <li className={{childActive}}>0</li>
            <li className={{child}}>1</li>
            <li className={{child}}>2</li>
            <li className={{child}}>3</li>
            <li className={{child}}>4</li>
            <li className={{child}}>5</li>

        </ul>
    </div>

    <div className={{childAgeDropdowns}}>
    </div>

  )
}

export default App