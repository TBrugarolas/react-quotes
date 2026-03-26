import { useDispatch } from 'react-redux';


function QuoteButton() {
  const nextQuote = "This is a new quote!";
  const dispatch = useDispatch();

  const newQuote = () => {
    dispatch({
      type: 'NEW_QUOTE',
      payload: { text: nextQuote }
    });
  };

  return (
    <button className="btn btn-primary justify-content-center" onClick={newQuote}>
      Get New Quote
    </button>
  );
}

export default QuoteButton;