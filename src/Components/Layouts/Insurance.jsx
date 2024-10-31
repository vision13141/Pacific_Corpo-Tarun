import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import Flex from '../Flex'
import InsuranceCard from '../Cards/InsuranceCard'
import InsuranceDatas from '../../Datas/InsuranceDatas'
const Insurance = () => {
  const insuData = InsuranceDatas();
  return (
    <section>
      <Container>
      <div className="ml-[485px] pb-3 ">
                <div className="w-[200px] py-3 border-b-2 border-dashed border-black">
                <Paragraph text='Our Tips For You' className='font-openSans text-[16px] font-bold text-btnbgColor  text-center '/>
                </div>
            </div>
            <div className="text-center">
                <Heading as='h2' text='Reinventing Your Protection' className='font-openSans font-bold text-[40px] '/>
                <Paragraph text='We share common trends, strategies ideas, opinion, short & log stories from the team behind company' className='text-[16px text-paraColor pl-[370px] pr-[360px]'/>
            </div>
            <Flex className='gap-x-6'>
              {insuData?.insuData.map((el,index) => (
                <div className="" key={index}>
                  <InsuranceCard
                  img={el.img}
                  img2={el.img2}
                  title={el.title}
                  ptext={el.ptext}
                  />
                </div>

              ))}
            </Flex>

      </Container>
    </section>
  )
}

export default Insurance

