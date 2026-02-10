import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle, MapPin, Phone } from 'lucide-react';

const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID;
const OWNER_EMAIL = process.env.REACT_APP_OWNER_EMAIL || 'owner@example.com';

const Contact = () => {
  const location = useLocation();
  const state = location.state || {};
  const [formData, setFormData] = useState(() => ({
    name: '',
    email: '',
    subject: state.subject || '',
    message: state.message || '',
  }));

  useEffect(() => {
    if (state.subject || state.message) {
      setFormData((prev) => ({
        ...prev,
        ...(state.subject != null && { subject: state.subject }),
        ...(state.message != null && { message: state.message }),
      }));
    }
  }, [state.subject, state.message]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildEmailBody = () => {
    return [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      if (FORMSPREE_FORM_ID) {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            _subject: formData.subject || 'Contact form submission',
          }),
        });
        if (!res.ok) throw new Error('Failed to send');
      } else {
        const subject = encodeURIComponent(formData.subject || 'Contact from website');
        const body = encodeURIComponent(buildEmailBody());
        window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
      }
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Message sent
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              {FORMSPREE_FORM_ID
                ? "We've received your message and will get back to you soon."
                : "Your email client should have opened. Send the email to complete your message."}
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Have a question or want to book an excursion? Send us a message and we’ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="card p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Get in touch</h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  info@wildschool.com
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  +1 (555) 123-4567
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                  123 Education St, Learning City
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                      className="input-field"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      autoComplete="email"
                      className="input-field"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="What is this about?"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field"
                    placeholder="Your message..."
                  />
                </div>
                {submitError && (
                  <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary inline-flex items-center"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <Mail className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
