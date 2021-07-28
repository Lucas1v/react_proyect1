import React from "react";
import { connect } from "react-redux";



const Quote = ({quote, nextQuote}) => (
    <div id="principal" style={{backgroundColor: quote.color}}>
        <div id="quote-box">
            <div id="segunda">
                <span id="text" style={{color: quote.color}}>{quote.frase}</span>
                <span id="author" style={{color: quote.color}}>- {quote.autor}</span>
                <a style={{backgroundColor: quote.color}} href="https://twitter.com/intent/tweet" rel="noreferrer" target="_blank" className="redes" id="tweet-quote">tw</a>
                <a style={{backgroundColor: quote.color}} href="https://twitter.com/intent/tweet" rel="noreferrer"target="_blank" className="redes" id="tum-quote">tum</a>
                <button style={{backgroundColor: quote.color}} id="new-quote" target="_blank" onClick={() => nextQuote()}>New quote</button>
            </div>
            <a target="_blank" href="https://github.com/Lucas1v" id="creator" rel="noreferrer">by cuby</a>
        </div>
    </div>
)
const mapStateToPops = state => ({
    quote : state.quote
})

const mapDispatchToProps = dispatch => ({
    nextQuote() {
        dispatch({
            type: "NEXTQUOTE"
        });
    }
})

export default connect(mapStateToPops, mapDispatchToProps)(Quote);
