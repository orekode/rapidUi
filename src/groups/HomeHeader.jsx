

import { Button, Image } from '../components';


const HomeHeader = () => {
  return (
    <Image.Background src="/images/celebrate.png">
        <section className=" grid grid-cols-12 max-[965px]:grid-cols-6 spacing">
          <div className="col-span-6 flex items-center">
            <div className="max-[965px]:max-w-[500px] max-[965px]:text-center max-[965px]:mx-auto bg-white dark:bg-[#0e0e0e] p-3 rounded-full transition-none">
              <h1 className=" h capitalize font-light text-6xl max-[1345px]:text-5xl  max-[560px]:text-4xl max-[425px]:text-3xl">
                Your one stop <span className="dark:text-blue-300 text-blue-500">shop for affordable devices</span>
              </h1>
              <p className='max-w-[400px]  max-[965px]:mx-auto py-3'>Browse our collection of products, find the best fit for you, make an order and enjoy the rapid experience</p>

              <Button.Md>Shop Now</Button.Md>

            </div>
          </div>

          <div className="col-span-6 max-[965px]:row-start-1  max-[965px]:mb-6">
            <Image.Background src="/images/g7.png" className="object-contain">
              <div className="min-h-[70vh]  max-[700px]:min-h-[320px]">
                
              </div>
            </Image.Background>
          </div>
        </section>
    </Image.Background>
  )
}

export default HomeHeader