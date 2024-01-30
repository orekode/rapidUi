import { Image, Scroll } from '../components';



const Reviews = () => {
  return (
    <section className="">
        <Image.Background src="/images/celebrate.png">
            <div className="text-center py-12">
                <h1 className="text-6xl ">Client Reviews</h1>
            </div>
        </Image.Background>

        <div className=" px-12 ">
            <Scroll.Side>
                {Array.from({length: 10}).map( (item, index) => 
                <div key={index} className="w-[420px] min-h-[420px] max-[970px]:w-[300px] pear relative group active:scale-90 transition-all duration-300 border dark:border-[#161616] dark:bg-[#111] p-3 max-[970px]:p-1">
                    <div className="image w-[150px] h-[150px] rounded-full mx-auto relative top-0 group-hover:-top-3 transition-all duration-300 z-10 scale-90">
                        <img src="/images/profile.jpeg" className="object-contain pear" />
                    </div>
                    <div className="details text-center  z-0 w-full   ">
                        <h3 className='font-bold text-2xl max-[970px]:text-xl text-blue-400 dark:text-blue-200'>Adeniyi David Shalom</h3>
                        <p className="p-9 text-sm max-[970px]:text-xs leading-loose pt-1.5 italic">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, ipsum sapiente dignissimos similique omnis unde eius soluta aliquam, quibusdam repellat incidunt inventore accusantium ea earum nam facilis laborum autem dolore consequuntur exercitationem! Quis similique reiciendis, at repellendus inventore deserunt maxime, in asperiores atque ad dignissimos, rerum distinctio explicabo molestias cupiditate.
                        </p>
                    </div>
                </div>
                )}
            </Scroll.Side>
        </div>
  </section>
  )
}

export default Reviews