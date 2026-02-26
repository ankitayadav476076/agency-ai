import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import {motion} from "motion/react"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "82963697-a679-4d75-ad04-5a11661bd8ed");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Thank You For Your Submission');
        event.target.reset();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
     whileInView="visible"
    transition={{staggerChildren:0.2}}
     viewport={{ once: true }}
      id='contact'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 pb-28 scroll-mt-24 text-gray-700 dark:text-white'
    >

      <Title
        title='Reach Out To Us'
        desc='From strategy to execution, we craft digital solutions that move your business forward'
      />

      <motion.form
        initial={{ opacity: 0, y:30 }}
     whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5,delay:0.4}}
     viewport={{ once: true }}
        onSubmit={onSubmit}
        className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
      >

        {/* Name */}
        <div>
          <p className='mb-2 text-sm font-medium'>Your Name</p>

          <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <img
              src={assets.person_icon}
              alt=""
              className='w-4 h-4 opacity-60'
            />

            <input
              name="name"
              type="text"
              placeholder='Enter Your Name'
              className='w-full p-3 text-sm outline-none bg-transparent'
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <p className='mb-2 text-sm font-medium'>Email id</p>

          <div className='flex items-center pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900'>
            <img
              src={assets.email_icon}
              alt=""
              className='w-4 h-4 opacity-60'
            />

            <input
              type="email"
              name="email"
              placeholder='Enter Your Email'
              className='w-full p-3 text-sm outline-none bg-transparent'
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className='sm:col-span-2'>
          <p className='mb-2 text-sm font-medium'>Message</p>

          <textarea
            name="message"
            rows={8}
            placeholder='Enter Your Message'
            className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-600'
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-105 transition-all duration-300'
        >
          Submit
          <img src={assets.arrow_icon} alt="" className='w-4' />
        </button>

      </motion.form>

    </motion.div>
  )
}

export default Contact;