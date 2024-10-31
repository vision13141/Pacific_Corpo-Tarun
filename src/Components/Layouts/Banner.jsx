import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Img1 from '../../assets/img1.png'
import Heading from '../Heading'
import Paragraph from '../Paragraph'
const Banner = () => {
  return (
    <section className='relative'>
                <div className="w-50% mt-[20px] left-[780px] absolute mr-0">
                    <Image src={Img1} className=' ml-10'/>
                </div>
        <Container>
            <Flex className=''>
            <div className="w-[680px] mt-[123px] ">
                <Heading as='h1' text='We Are Ready To Make Your New Life Happier.' className='font-openSans font-bold text-[70px] pr-[70px] leading-[90px]'/>
                <div className="">
                    <Paragraph text='We work with several leading insurance companies to secure insurance coverages tailored to meet your needs.' className="font-openSans text-[20px] text-paraColor leading-[36px] mt-[54px] pr-[120px]"/>
                </div>
                <div className="mt-12">
                    <a href='#' className='font-openSans text-[20px] font-bold text-white border rounded-2xl px-7 py-2 bg-btnbgColor'>Get a Consultation</a>
                </div>
                </div>

            </Flex>

        </Container>
    </section>
  )
}

export default Banner