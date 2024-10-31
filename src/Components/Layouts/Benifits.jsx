import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
import BenifitDatas from '../../Datas/BenifitDatas'
import BenifitsCard from '../Cards/BenifitsCard'
import Flex from '../Flex'

const Benifits = () => {
    const benfData = BenifitDatas();

  return (
    <section className='mt-[755px] mb-[50px] '>
        <Container>
        <div className="ml-[490px] pb-3 ">
                <div className="w-[200px] py-3 border-b-2 border-dashed border-black">
                <Paragraph text='Your Benefits' className='font-openSans text-[16px] font-bold text-btnbgColor  text-center '/>
                </div>
            </div>
            <div className="text-center">
                <Heading as='h2' text='We’re Your Right Insurance Advocate' className='font-openSans font-bold text-[40px] '/>
                <Paragraph text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.' className='text-[16px text-paraColor pl-[330px] pr-[340px]'/>
            </div>
            <Flex className='ml-20 gap-x-6 justify-center pt-12'>
            {benfData?.benfData.slice(0,3).map((el,index) => (
            <div className='' key={index}>
            <BenifitsCard
            img={el.img}
            title={el.title}
            ptext={el.ptext}
            ctext={el.ctext}
            dtext={el.dtext}
            />
            </div>

            ))},

            </Flex>
            <Flex className='ml-20 gap-x-6 justify-center mt-10'>
            {benfData?.benfData.slice(3,6).map((el,index) => (
            <div className='' key={index}>
            <BenifitsCard
            img={el.img}
            title={el.title}
            etext={el.etext}
            ftext={el.ftext}

            />
            </div>

            ))},

            </Flex>
        </Container>
    </section>
  )
}

export default Benifits