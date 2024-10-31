import Container from '../Container'
import Image from '../Image'
import Logo1 from "../../assets/logo1.png"
import Flex from '../Flex'
import List from '../List'

const NavBar = () => {
  return (
    <>
    <section className='mt-10'>
        <Container>
            <Flex className=''>
            <div className="w-[280px] mt-2">
                <Image src={Logo1} className='text-center'/>
            </div>
            <div className="w-[690px] ml-[102px]">
              <ul className='flex justify-center gap-x-[32px]'>
                <List href='#' text='Home' className='font-openSans text-[16px] text-center pt-5 '/>
                <List href='#' text='Pages' className='font-openSans text-[16px] text-center pt-5 '/>
                <List href='#' text='Services' className='font-openSans text-[16px] text-center pt-5 '/>
                <List href='#' text='Portfolio' className='font-openSans text-[16px] text-center pt-5 '/>
                <List href='#' text='Blog' className='font-openSans text-[16px] text-center pt-5 '/>
                <List href='#' text='Contact Us' className='font-openSans text-[16px] text-center pt-5 '/>
                
              </ul>

            </div>
            <div className="w-[290px] mt-4">
               <a href='#' className='ml-[100px] font-openSans font-bold text-[16px] bg-btnbgColor rounded-2xl px-4 py-2 text-white'>Call Now</a>
            </div>
            </Flex>


        </Container>
    </section>
    </>
  )
}

export default NavBar