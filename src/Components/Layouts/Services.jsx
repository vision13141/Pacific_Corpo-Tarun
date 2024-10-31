import React from 'react'
import Container from '../Container'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import ServiceCard from '../Cards/ServiceCard'
import Flex from '../Flex'
import ServicesDatas from '../../Datas/ServicesDatas'
const Services = () => {
    const serviceData = ServicesDatas();
  return (
    <section className='mt-[115px] mb-[50px] '>
        <Container>
            <div className="ml-[480px] pb-3 ">
                <div className="w-[200px] py-3 border-b-2 border-dashed border-black">
                <Paragraph text='Our Services' className='font-openSans text-[16px] font-bold text-btnbgColor  text-center '/>
                </div>
            </div>
            <div className="text-center">
                <Heading as='h2' text='Insurance made simple for you' className='font-openSans font-bold text-[40px] '/>
                <Paragraph text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.' className='text-[16px text-paraColor pl-[330px] pr-[340px]'/>
            </div>
            <Flex className='ml-20 gap-x-6 justify-center pt-12'>
            {serviceData?.serviceData.map((el,index) => (
            <div className='' key={index}>
            <ServiceCard
            img={el.img}
            title={el.title}
            ptext={el.ptext}
            ctext={el.ctext}
            dtext={el.dtext}
            Btxt={el.Btxt}
            />
            </div>

            ))},
            </Flex>
            
        </Container>
    </section>
  )
}

export default Services


{/* */}
