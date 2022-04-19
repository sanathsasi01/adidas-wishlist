import '../index.css'

function Suggestions(props) {
    return (
        <div className='suggestions-container'>
                <p>- You may also like -</p>
                <ul>
                    { props.suggestions.length ? props.suggestions.map(suggestion => <li key={suggestion.searchterm}> <button onClick={ () => props.setSearchTerm(suggestion.searchterm) } > {suggestion.searchterm} </button>  </li> ) : <pre>no suggestions available :(</pre> }
                </ul>
        </div>
    )
}

export default Suggestions;