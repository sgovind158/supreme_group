'use client';
import React from 'react';
import Link from 'next/link';
import * as Yup from 'yup';
import StepInput from '@/components/client/Input/StepInput';
import TextArea from '@/components/client/Input/TextArea';
import { contactInfo } from './data';
import { useFormik } from 'formik';
import { CvaButton } from '@/components/client/Button/CvaButton';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const GetInTouch = () => {
  // Validation schema for form fields
  // Using Yup for schema validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
  });

  const formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  // Function to handle form submission
  // This function will be called when the form is submitted
  const handleFun = async (
    values: typeof formData,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const res = await fetch('/api/contact-us', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Thank you! We will keep you updated.');
        resetForm(); // Reset form fields
      } else {
        toast.error('Failed to send message.');
      }
    } catch (err) {
      toast.error('Something went wrong.');
      console.error(err);
    }
  };

  // Formik hook to manage form state and validation
  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    onSubmit: handleFun,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="get-in-touch"
      className="bg-[#0067B1] py-[50px] lg:py-[100px] 2xl:py-[205px] px-4 sm:px-6 lg:px-8 xl:px-[80px] 2xl:gap-[150px] flex items-center justify-center "
    >
      <div className=" 2xl:p-10 w-full max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-8  text-white">
        {/* Left Side */}
        <div className="order-2 md:order-1">
          <h2 className="text-[48px] font-semibold mb-10 hidden md:block">
            Get in touch
          </h2>
          <div className="w-[48px] h-[3px] bg-white mb-10 hidden md:block "></div>
          <p className="mb-10 text-2xl text-white">For general enquiries</p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactInfo.map((item) => (
              <motion.div
                variants={itemVariants}
                className="mb-[30px]"
                key={item.id}
              >
                <p className="font-semibold text-white text-[20px] mb-4">
                  {item.label} :
                </p>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-white text-[20px] hover:underline"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <p className="text-white text-[20px]">{item.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Side */}
        <form
          className="grid grid-cols-1 gap-4 order-1 md:order-2"
          onSubmit={formik.handleSubmit}
        >
          <h2 className="text-[48px] font-semibold  md:hidden ">
            Get in touch
          </h2>
          <div className="w-[48px] h-[3px] bg-white  md:hidden  "></div>

          <StepInput
            type="text"
            placeholder="Full Name"
            value={formik.values.name}
            name="name"
            formik={formik}
            touchedName={formik.touched.name}
            errorName={formik.errors.name}
          />

          <StepInput
            type="text"
            placeholder="Email"
            value={formik.values.email}
            name="email"
            formik={formik}
            touchedName={formik.touched.email}
            errorName={formik.errors.email}
          />

          <StepInput
            type="text"
            placeholder="Subject"
            value={formik.values.subject}
            name="subject"
            formik={formik}
            touchedName={formik.touched.subject}
            errorName={formik.errors.subject}
          />

          <TextArea
            placeholder="Message"
            value={formik.values.message}
            name="message"
            formik={formik}
          />

          <div className="flex justify-center items-center md:justify-start">
            <CvaButton
              type="submit"
              intent={'langageBtn'}
              className="bg-white text-black text-base font-medium px-6 py-[14px] w-[140px] rounded-[100px] text-center flex justify-center  mt-4 md:mt-[50px] "
              isLoading={formik.isSubmitting}
            >
              Send
            </CvaButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
