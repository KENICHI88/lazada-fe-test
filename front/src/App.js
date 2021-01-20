import './assets/styles/common.scss';

import { Switch, Route, BrowserRouter as Router, withRouter} from 'react-router-dom';
import Layout from './components/Global/Layout';

import CategoryContainer from './Pages/Category/CategoryContainer';
import ProductContainer from './Pages/Product/ProductContainer';

function App({history}) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout component={CategoryContainer} />
        </Route>
        <Route path={`/product/:slugProduct`} >
          <Layout component={ProductContainer} />
        </Route>
      </Switch>
    </Router>
    // <Layout >
    //   <CategoryContainer />
    // </Layout>
  );
}

export default (App);
