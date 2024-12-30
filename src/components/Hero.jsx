import {motion } from 'framer-motion';
import { styles } from '../styles';
import {ComputersCanvas} from './canvas';
import {deskSetup} from "../assets";

const Hero = () => {
  const textColor = 'E0E0E0';
  return (
    <section className=" ">
      <div className={`${styles.paddingX} pt-20  inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF6542]' />
          <div className={`${styles.tealGradient} w-1 sm:h-80 h-40`}/>
         
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#FF6542]'>Waseem Abbasi</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Cross Platform,<br className='sm-block hidden'/> Responsive and High Quality Mobile Applications.
          </p>
        </div>
      </div> 
      
      {/* <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
           <motion.dev 
           animate={{
            y:[0,24,0]
           }}
           transition={{
            duration:1.5,
            repeat:Infinity,
            repeatType:'loop'
           }} 
           className='w-3 h-3 rounded-full bg-secondary mb-1'
           
           />

          </div>
          </a> 
      </div> */}
      {/* <div className="flex justify-center w-full items-center ">
  <img
    src={deskSetup}
    alt="setUp"
    className="rounded-2xl h-[50%] object-cover w-[70%]"
  />
</div> */}
    </section>
    
  )
}

export default Hero