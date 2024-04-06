import { Image, Scroll } from '../components';



const reviews = [
    {
        image: 'edwin.png',
        name: `Edwin Kwadwo Ansah`,
        school: 'KNUST',
        review: `
        Being a final year civil engineering student at Kwame Nkrumah
        University of Science and Technology (KNUST), my experiences with
        Rapid Crew Tech have truly elevated my university life. From my
        first encounter last year to my current involvement on the
        governing board, the journey has been nothing short of remarkable.
        Rapid Crew Tech has seamlessly catered to my electronics needs,
        consistently delivering top-notch products that exceed
        expectations in terms of quality and reliability. With its
        promising trajectory, I foresee Rapid Crew Tech becoming a
        household name nationwide, resonating far beyond university
        campuses.`
    },
    {
        image: 'darlington.png',
        name: `Darlington Gadjei`,
        school: 'UPSA',
        review: `
        Greetings, I am Darlington, a member of the University of
        Professional Studies, Accra (UPSA) community. My introduction to
        Rapid Crew Tech occurred during collaborative work on a separate
        project with one of the brand's administrators. Through this
        interaction, I gained firsthand insight into the ethos of the
        company, characterized by unwavering consistency and unparalleled
        customer service. While not directly involved in operational
        aspects, I oversee and moderate orders originating from UPSA,
        ranging from laptops to speakers and monitors. Rapid Crew Tech
        exemplifies excellence in service delivery and sets a benchmark
        for customer-centric operations.`
    },
    {
        image: 'Sylvia.png',
        name: `Sylvia Del`,
        school: 'LEGON',
        review: `
        I'm Sylvia, a student at the University of Ghana. Although I
        haven't made a purchase from Rapid Crew Tech yet, I've witnessed
        their swift operations and trustworthy service firsthand. Their
        "ONE DAY NAA" promotions, where deliveries are made on the same
        day, caught my attention and showcased their commitment to
        customer satisfaction. I'm eager to place my first order with
        Rapid Crew Tech and experience their exceptional service for
        myself.`
    },
    {
        image: 'jamal.png',
        name: `Jamal's Review`,
        school: 'UNIVERSITY OF CAPE COAST',
        review: `
        Being a cybersecurity enthusiast, safeguarding my digital world is
        paramount. That's why my encounters with Rapid Crew Tech have been
        nothing short of a game-changer. As a second-year BSc. Computer
        Science student at the University of Cape Coast, their presence on
        campus has been a beacon of reliability and expertise. From
        purchasing essentials like hard disks and RAM to entrusting them
        with the repair of my laptop's cooling system, Rapid Crew Tech has
        consistently delivered excellence. Their seamless service and
        swift response times have not only saved the day but have also
        instilled confidence in their capabilities. As I navigate the
        intricate landscape of cybersecurity, having Rapid Crew Tech by my
        side feels like having a trusted ally in my corner. They're not
        just a tech supplier; they're`
    },
    {
        image: 'edmond.png',
        name: `Edmond Ansah's`,
        school: 'KNUST',
        review: `
        Rapid Crew Tech has truly left an indelible mark on my university
        experience at KNUST. Their presence is not just felt here but
        reverberates across Ghanaian university campuses, a testament to
        their widespread reach and impact. What sets Rapid Crew Tech apart
        is not just their expansive network, but also their unwavering
        commitment to fast delivery times and unparalleled customer
        service. As a student at KNUST, I've witnessed firsthand their
        dedicated team members ensuring that students have access to
        quality electronics whenever needed. With their efficient
        operations and seamless service, Rapid Crew Tech has undoubtedly
        earned my trust and loyalty. They've become an integral part of
        campus life, embodying reliability and excellence in every
        interaction.`
    },
];
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
                {reviews.map( (item, index) => 
                <div key={index} className="w-[420px] min-h-[420px] max-[970px]:w-[300px] pear rounded-3xl relative group active:scale-90 transition-all duration-300 border dark:border-[#161616] dark:bg-[#111] p-3 max-[970px]:p-1">
                    <div className="image w-[150px] h-[150px] rounded-full mx-auto relative top-0 group-hover:-top-3 transition-all duration-300 z-10 scale-90">
                        <img src={`/images/${item.image}`} className="object-contain pear" />
                    </div>
                    <div className="details text-center  z-0 w-full   ">
                        <h3 className='font-bold text-2xl max-[970px]:text-xl text-blue-400 dark:text-blue-200'>{item.name}</h3>
                        <p className="p-9 text-sm max-[970px]:text-xs leading-loose pt-1.5 italic">
                            {item.review.slice(0, 400)} {item.review.length > 400 ? "..." : ""}
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