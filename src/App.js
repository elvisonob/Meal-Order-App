import { Fragment } from 'react';
import Header from './component/Layout/Header';
import MealsSummary from './component/Meals/MealsSummary';
import Meals from './component/Meals/Meals';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
