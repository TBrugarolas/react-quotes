import QuoteButton from './components/QuoteButton';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h1 className="text-center mb-4">Quote of the Day</h1>
              <QuoteButton />
              <QuoteDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;