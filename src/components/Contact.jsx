import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const blinkingDot = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [1, 0.5, 1],
    },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "49a450d2-055d-4f81-a72e-5e9513d20147",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div 
        className="fixed inset-0 bg-repeat opacity-30 -z-10"
        style={{
          backgroundImage: "url('images/background.png')",
          backgroundPosition: "0 0",
          backgroundSize: "auto"
        }}
      />
      
      {/* Gradient background */}
      <div 
        className="absolute rounded-[999rem] -z-10 w-[50vw] h-[50vh]"
        style={{
          filter: "blur(15rem)",
          backgroundImage: "linear-gradient(135deg, #e5f0ff, #d0e6ff 28%, #b9e0ff 35%, #a2d6ff 45%, #8dccff 59%, #7cb7ec 69%, #728fcd 84%, #7171f2)",
          inset: "25vh auto auto 25vw"
        }}
      />
      <motion.div 
        className="max-w-2xl mx-auto pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-5xl font-serif mb-4"
          {...fadeIn}
        >
          Contact me
        </motion.h1>
        
        <motion.div 
          className="space-y-3 mb-8"
          {...fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-700">Say hello.</p>
          <p className="text-gray-700">Looking to start a project and need that magical touch? Reach out.</p>
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={blinkingDot.animate}
              transition={blinkingDot.transition}
            />
            <p className="text-gray-700">Open for new opportunities</p>
          </div>
        </motion.div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg"
          >
            Thank you! Your message has been sent successfully.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg"
          >
            Oops! Something went wrong. Please try again later.
          </motion.div>
        )}

        <motion.form 
          className="space-y-6"
          {...fadeIn}
          transition={{ delay: 0.4 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div>
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>
          
          <div>
            <motion.textarea
              whileFocus={{ scale: 1.02 }}
              name="message"
              placeholder="Your message for me"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:border-pink-300 transition-colors"
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 bg-black text-white rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;