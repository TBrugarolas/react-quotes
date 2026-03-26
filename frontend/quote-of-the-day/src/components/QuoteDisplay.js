import React from 'react';
import { useSelector } from 'react-redux';

function QuoteDisplay() {
  const curr_quote = useSelector(state => state.curr_quote);

  return (
    <div className="container mt-3">
      <p className="lead">{curr_quote ? curr_quote.text : 'No quote available'}</p>
    </div>
  );
}

export default QuoteDisplay;
