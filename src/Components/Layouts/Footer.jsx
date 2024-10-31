import React from 'react'
import Container from '../Container'
import Image from '../Image'
import Logo1 from '../../assets/logo1.png'
import Paragraph from '../Paragraph'
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin  } from "react-icons/fa";
import Flex from '../Flex'
import List from '../List'
const Footer = () => {
  return (
    <section className='mt-[125px] mb-[120px]'>
        <Container>
            <Flex className='gap-x-[160px]'>
            <div className="w-[265px]">
                <Image src={Logo1}/>
                <Paragraph text='Build a modern and creative website with crealand' className="text-[16px] text-paraColor pt-[28px] pr-10"/>
                <Flex className='mt-[35px] gap-x-2'>
                    <button type='#' className="border p-2 rounded-full bg-gray-300  hover:bg-gray-400">
                    <FaGoogle className='text-[20px] text-paraColor '/>
                    </button>
                    <button type='#'className="border p-2 rounded-full bg-gray-300  hover:bg-gray-400">
                    <FaTwitter className='text-[20px] text-paraColor'/>
                    </button>
                    <button type='#' className="border p-2 rounded-full bg-gray-300  hover:bg-gray-400">
                    <FaInstagram className='text-[20px] text-paraColor'/>
                    </button>
                    <button type='#' className="border p-2 rounded-full bg-gray-300  hover:bg-gray-400">
                    <FaLinkedin className='text-[20px] text-paraColor'/>
                    </button>
                    
                </Flex>
            </div>
            <Flex>
                <div className='w-[130px]'>
                    <Paragraph text='Products'className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                    <List href='#' text='Landingpage' className='pb-5 '/>
                    <List href='#' text='Features' className='pb-5'/>
                    <List href='#' text='Documentation' className='pb-5'/>
                    <List href='#' text='Referral Program' className='pb-5  text-[16px]'/>
                    <List href='#' text='Pricing' className=''/>
                    </ul>
                </div>
                <div className='w-[117px] ml-[100px]'>
                <Paragraph text='Services'className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                    <List href='#' text='Documantation' className='pb-5'/>
                    <List href='#' text='Design' className='pb-5'/>
                    <List href='#' text='Themes' className='pb-5'/>
                    <List href='#' text='Illustrations' className='pb-5'/>
                    <List href='#' text='UI Kit' className='pb-5'/>
                    </ul>
                </div>
                <div className='w-[101px] ml-[100px]'>
                    <Paragraph text='Company'className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                    <List href='#' text='About' className='pb-5'/>
                    <List href='#' text='Terms' className='pb-5'/>
                    <List href='#' text='Privacy Policy' className='pb-5'/>
                    <List href='#' text='Careers' className='pb-5'/>
                    </ul>
                </div>
                <div className='w-[117px] ml-[100px]'>
                    <Paragraph text='More'className='font-bold text-[18px] pb-[35px]'/>
                    <ul>
                    <List href='#' text='Documantation' className='pb-5'/>
                    <List href='#' text='License' className='pb-5'/>
                    <List href='#' text='Changelog' className='pb-5'/>
                    </ul>
                </div>


            </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer