import React from 'react';

import Hello from './hello';
import SearchBar from './searchBar';
import Motivation from './motivationLine';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <SearchBar/>
                <Motivation/>
            </div>
        )
    }
}

export default Main;