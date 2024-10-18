import { createRoot } from 'react-dom/client';
import Recipe from './app/components/Recipe';
import { StrictMode } from 'react';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

export const App = () => {
  return (
      // компонент Recipe принимает пропс с названием блюда
      <Recipe name='Сырные палочки' />
  )
}; 

root.render(
    <StrictMode>
        <App />
    </StrictMode>
); 