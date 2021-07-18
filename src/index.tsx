import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BooksProvider } from './store/BooksProvider';

ReactDOM.render(
  <BooksProvider>
    <App />
  </BooksProvider>,
  document.getElementById('root'),
);
