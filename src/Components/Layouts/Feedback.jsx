import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Img5 from '../../assets/img5.jpg'
import Paragraph from '../Paragraph'
import Qleft from '../../assets/qleft.png'
import Flex from '../Flex'
import { TiTick } from "react-icons/ti";
const Feedback = () => {
  return (
    <section className='mt-[120px]'>
        <Container>
            <div className="relative">
                <Image src={Img5} className='w-full ml-9 absolute'/>
                <div className="absolute w-[380px] border-hidden rounded-2xl mt-[75px] ml-[150px] bg-white shadow-md hover:shadow-xl cursor-pointer">
                    <Image src={Qleft} className='pt-10 ml-[50px]'/>
                    <Paragraph text='This platform is one of the best companies I have dealt with in Indonesia. They’re always happy to help, and i wouldn’t hesitate to recommend them.' className='font-semibold text-paraColor ml-[50px] mt-[25px] pr-[130px] leading-[35px]'/>
                    <span className='font-openSans font-bold text-[20px] ml-[50px] mt-[35px]'>Daniel Anderson</span>
                    <Flex>
                        <TiTick className='ml-[50px] mt-[1px] bg-[#c7f0df] text-[#36B37E] rounded-full text-[25px]'/>
                        <span className='italic pb-10 ml-1'>Verified customer</span>
                    </Flex>
                </div>
            </div>

        </Container>
    </section>
  )
}

export default Feedback