
import Navigation from './comp/Navigation';
import UpNav from './comp/UpNav';
import Banner from './comp/Banner';
import ProductList from './comp/ProductList';
import ContactForm from './comp/ContactForm';
function App() {
  return (
    <div style={{backgroundColor:'#000'}}>
      <UpNav></UpNav>
      <Navigation></Navigation>
      <Banner></Banner>
      <ProductList></ProductList>
      <ContactForm></ContactForm>
    </div>
  );
}

export default App;
