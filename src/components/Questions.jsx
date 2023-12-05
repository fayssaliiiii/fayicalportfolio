import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants'
const Questions = () => {
  // const { t } = useTranslation();
      const pricingVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
    hover: { scale: 1.1 },
  };
  return (
    <section className="container mx-auto mt-10 p-6">
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] underline-custom text-center">(FAQ)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ padding: '30px'}}>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="p-4 border rounded-md transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-100"
            variants={fadeIn('down', index + 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            
          >
            <h3 className="text-xl font-semibold mb-2 text-[#915EFF]">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const faqs = [
    {
        question: 'What is your typical approach to delivering a software project?',
        answer: 'My typical software project delivery process involves several key steps. First, I start with a detailed analysis of your requirements, followed by strategic planning and architecture design. Then, I proceed with the actual development, conduct thorough testing, and finally, deploy the solution. Post-deployment, I provide ongoing support and updates as needed.',
      },
      {
        question: 'How do you ensure the quality of your code?',
        answer: 'Ensuring code quality is a priority in my development process. I follow best coding practices, conduct code reviews, and implement thorough testing, including unit tests and integration tests. This helps maintain a high standard of code quality and ensures a robust and reliable end product.',
      },
      {
        question: 'Can you provide examples of technologies you frequently work with?',
        answer: 'Certainly! I frequently work with technologies such as Node.js, React, MongoDB, and Docker, leveraging their capabilities to build efficient and scalable solutions. My technology stack is carefully chosen based on the specific requirements of each project, ensuring optimal performance and future scalability.',
      },
      {
        question: 'How do you approach problem-solving when faced with a challenging technical issue?',
        answer: 'When confronted with a challenging technical issue, my approach involves a systematic problem-solving process. I begin by thoroughly understanding the issue, researching potential solutions, and consulting relevant resources. Collaboration with team members and leveraging my experience contribute to finding effective resolutions.',
      },
      {
        question: 'What collaboration tools do you use to keep clients informed about project progress?',
        answer: 'To keep clients informed about project progress, I use collaboration tools such as Slack, Jira, and Trello, providing transparent communication and real-time updates. These tools facilitate efficient collaboration, ensuring that clients are actively involved and informed at every stage of the development process.',
      },
      {
        question: 'How do you adapt to changing project requirements during the development process?',
        answer: 'Adapting to changing project requirements is a crucial aspect of my development approach. I prioritize flexibility and maintain open communication with clients. Through iterative development and regular feedback loops, I can seamlessly incorporate changes, ensuring the end product aligns with evolving project needs.',
      },
];

export default Questions;
