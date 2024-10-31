import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import TestiMoDatas from '../../Datas/TestiMoDatas'
import TestiMoCard from '../Cards/TestiMoCard'

const Testimonial = () => {
    const testMData = TestiMoDatas();
  return (
    <section>
        <Container>
        <div className="ml-[485px] pb-3 mt-[120px] ">
                <div className="w-[200px] py-3 border-b-2 border-dashed border-black">
                <Paragraph text='Testimonial' className='font-openSans text-[16px] font-bold text-btnbgColor  text-center '/>
                </div>
        </div>
        <div className="text-center">
                <Heading as='h2' text='What Our Customer Have To Says' className='font-openSans font-bold text-[40px] '/>
                <Paragraph text='We share common trends, strategies ideas, Opinion, short & log stories from the team behind company' className='text-[16px text-paraColor pl-[370px] pr-[360px]'/>
        </div>
        <Flex className='gap-x-4'>
            {testMData?.testMData.map((el,index) => (
                <div className="" key={index}>
                    <TestiMoCard
                        title={el.title}
                        img={el.img}
                        ptext={el.ptext}
                        stext={el.stext}
                    />
                </div>
            ))}


        </Flex>
        </Container>
    </section>
  )
}

export default Testimonial