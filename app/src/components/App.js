/**
 * Created by user on 11.12.2018.
 */

import React from 'react'
import Article from './Article'
import articles from '../fixtures'

function App() {
    return(
        <div>
            <h1>App name</h1>
            <Article article={articles[0]} foo = "bar" flag = {true}/>
        </div>
    )
}

export default App