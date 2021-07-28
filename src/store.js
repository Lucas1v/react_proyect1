import { createStore } from "redux";

const quotes = [
    {
        id: 0,
        frase: "If you can dream it, you can achieve it.",
        color: "green",
        autor: "Zig Ziglar"
    },
    {
        id: 1,
        frase: "hatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.",
        color: "grey",
        autor: "Johann Wolfgang von Goethe"
    },
    {
        id: 2,
        frase: "The mind is everything. What you think you become.",
        color: "blue",
        autor: "Buddha"
    }
];

const initialState = {
    quote: quotes[Math.floor(Math.random() * 3)]
};

const reducerQuote = (state = initialState, action) => {
    switch(action.type) {
        case "NEXTQUOTE":
            if(state.quote.id === 2){
                return {
                    quote: quotes[0]
                }
            }else{
                return {
                    quote: quotes[state.quote.id + 1]
                }
            }
        default:
            return state
    }
}

export default createStore(reducerQuote);