import Paragraph from '../Paragraph'
import Image from '../Image'

import Flex from '../Flex'
import { FaArrowRight } from "react-icons/fa";
const ServiceCard = ({img,title,ptext,ctext,dtext,Btxt}) => {
  return (
    <>
    <section>
  
    <div className="w-[370px] mt-24 shadow-2xl border-hidden overflow-hidden bg-white transition-transform duration-500 hover:-translate-y-16 cursor-pointer">
      <Image src={img} className='ml-32 mt-10'/>
      <Paragraph text={title} className='font-bold text-[25px] text-center mt-9'/>
      <Paragraph text={ptext} className='text-center text-[16px] text-paraColor pr-[70px] pl-[65px] mt-5'/>
      <Paragraph text={ctext} className='text-center text-[16px] text-paraColor pr-[80px] pl-[80px] mt-5'/>
      <Paragraph text={dtext} className='text-center text-[16px] text-paraColor pr-[80px] pl-[80px] mt-5'/>
      <Flex className='justify-center mt-[30px] mb-12 '>
          <span className='font-openSans font-bold text-[16px] cursor-pointer'>{Btxt}</span>
          <FaArrowRight className='text-[14px] mt-[7px] ml-1 cursor-pointer'/>
      </Flex>
      </div>


    </section>
    
    </>
  )
}

export default ServiceCard