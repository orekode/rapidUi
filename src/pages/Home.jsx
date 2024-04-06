
import { Link } from 'react-router-dom';
import { Button, Footer, LeftRightBanner, PageScroller } from '../components';
import { Categories, HomeHeader, Nav, Products, Reviews } from '../groups';

const Home = () => {

  return (
    <div className=''>

      <HomeHeader />

      <section className="spacing">

        <Categories.Popular />
        
      </section>

      <section className="spacing">
        <div className="text-center">
          <h1 className="text-4xl">Trending Products</h1>
          <p className="max-w-[400px] mx-auto text-sm my-3">
            We have made the ideal list of products for you to choose from,
            you want to see more? Visit the shop page to see all our products
          </p>
          <div className="mx-auto w-max">
            <Link to="/shop">
              <Button.Md>Shop Page</Button.Md>
            </Link>
          </div>
          
        </div>

        <Products.Trending />
      </section>

      <section className="spacing">
        <LeftRightBanner title={'Free Delivery For Orders On Campus.'} />
      </section>

      <Reviews />

    </div>
  )
}

export default Home