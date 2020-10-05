import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is ...'
    },
    {
        title: 'Why use React?',
        content: 'React is a fav js lib among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You make components in React'
    }
]

const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color blue',
        value: 'blue'
    },
    {
        label: 'The color yellow',
        value: 'yellow'
    }
]

const App = () => {

    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a color!" options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            {/* <Accordion items={items}/> */}
            {/* <Search /> */}
            {/* <Dropdown label="Select a color!" options={options} selected={selected} onSelectedChange={setSelected} /> */}
            {/* <Translate /> */}
        </div>
    );
}

export default App;


