import { useDispatch } from 'react-redux';

function QuoteButton() {
  const dispatch = useDispatch();

  const newQuote = async () => {
    try {
      const response = await fetch(
        "https://react-quotes-9wiq.onrender.com/api/quote"
      );

      const data = await response.json();

      dispatch({
        type: 'NEW_QUOTE',
        payload: { text: data.quote }
      });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <button
      className="btn btn-primary justify-content-center"
      onClick={newQuote}
    >
      Get New Quote
    </button>
  );
}

export default QuoteButton;