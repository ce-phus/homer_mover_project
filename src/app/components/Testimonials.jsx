import React from 'react'
import { styles } from '../styles'
import { FeedbackCard } from '.'
import { feedback } from '../constants'

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative pt-20`}>
      {/* {TODO} */}
     
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className="mb-5 text-2xl text-primary font-medium">Testimonials</h1>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        What Our Clients Say
        </p>
      </div>

      <div className='flex flex-wrap mx-3 sm:justify-start gap-20 justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card}/>
        ))}
      </div>
  </section>
  )
}

export default Testimonials