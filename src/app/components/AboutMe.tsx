import Image from 'next/image'
import Logo from '../assets/logo.svg'

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className='font-bold text-3xl mb-6'>
        About Me
      </h3>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 m-6 max-w-4xl py-4 px-6 rounded-xl
      bg-white/30 backdrop-blur-md shadow-xl border">
        <Image src={Logo} alt="logo" className='w-sm'/>
        <div className="max-w-2xl flex items-center p-4 border-slate-800 text-xl">
          I'm a second-year Computer Science student in Indonesia and I've begin learning programming since 2 years ago. The language I started with was Pascal, then moved on to Python, C++, Java, and also web development utilizing HTML, CSS, and JavaScript.<br/>In addition, I've been doing 3D rendering as a hobby for the past three years with software called Blender.
        </div>
      </div>
    </div>
  )
}

export default AboutMe