import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term,setTerm] = useState('programming');
    const [results, setResults] = useState([]);

    // console.log(results);

    //useEffect Hook is used for component lifecycle handling, just like componentDidMount.. used in class based components.
    // [] is used for running the function only once (when it gets rendered for the first time)
    // useEffect(()=>{
    //     console.log('hmm');
    // },[]);

    // if you don't provide anything, it will run everytime the component re-renders + first time
    // useEffect(()=>{
    //     console.log('hmm');
    // },);

    // it will run the first time + everytime 'data' has changed since the last render
    // useEffect(()=>{
    //     console.log('hmm');
    // },[data]);


    // we cannot directly use async await inside useEffect.
    useEffect(()=>{
        // console.log('Make an API call everytime term changes');
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            if(term)
            {
                setResults(data.query.search);
            }
        }

        if(term && !results.length)
        {
            search();
        }

        //this is used for API throttling, since we were calling the API everytime the user types a char.
        const timeoutID = setTimeout(()=>{
            search();
        }, 3000)


        //useEffect calls this function first, everytime the components re-renders
        return () => {
            // console.log('CLEAN');
            clearTimeout(timeoutID);
        }

    },[term]);


    const onInputChange = (e) => {
        console.log(e.target.value);
        setTerm(e.target.value);
    }

    const renderedResults = results.map((res)=>{
        return (
        <div className="item" key={res.pageid}>
            <div className="right floated content">
                <a className="ui button" href={`http://en.wikipedia.org?curid=${res.pageid}`}>GO!</a>
            </div>
            <div className="content">
                <div className="header">
                    {res.title}
                </div>
                <span dangerouslySetInnerHTML={{ __html: res.snippet }}></span>
            </div>
        </div>
        )
    })

    return (
        <div className="ui form">
            <div className="field">
                <label>Enter search term</label>
                <input value={term} onChange={onInputChange} className="input" />
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;