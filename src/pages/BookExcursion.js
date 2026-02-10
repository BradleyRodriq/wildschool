import React, { useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Mail,
  Loader2,
} from 'lucide-react';
import { getExcursionById, excursions } from '../data/excursions';

const FORMSPREE_FORM_ID = process.env.REACT_APP_FORMSPREE_FORM_ID;
const OWNER_EMAIL = process.env.REACT_APP_OWNER_EMAIL || 'owner@example.com';

const groupSizeOptions = [
  '1–10 students',
  '11–20 students',
  '21–30 students',
  '31–40 students',
  '40+ students',
];

const timeSlots = [
  '9:00 AM – 12:00 PM',
  '1:00 PM – 4:00 PM',
  '9:00 AM – 2:00 PM (Full day)',
  'Custom (specify in notes)',
];

const BookExcursion = () => {
  const navigate = useNavigate();
  const { excursionId } = useParams();
  const resolvedExcursion = excursionId ? getExcursionById(excursionId) : null;
  const [selectedExcursion, setSelectedExcursion] = useState(resolvedExcursion);
  const [step, setStep] = useState(resolvedExcursion ? 2 : 1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    groupSize: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectExcursion = (excursion) => {
    setSelectedExcursion(excursion);
    setStep(2);
  };

  const buildEmailBody = () => {
    const lines = [
      'New Academic Excursion Booking Request',
      '----------------------------------------',
      '',
      `Excursion: ${selectedExcursion.title}`,
      `Location: ${selectedExcursion.location}`,
      `Duration: ${selectedExcursion.duration}`,
      '',
      'Contact details:',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Organization/School: ${formData.organization}`,
      `Group size: ${formData.groupSize}`,
      `Preferred date: ${formData.preferredDate}`,
      `Preferred time: ${formData.preferredTime}`,
      '',
      'Notes:',
      formData.notes || '(none)',
    ];
    return lines.join('\n');
  };

  const submitViaMailto = () => {
    const subject = encodeURIComponent(`Excursion booking: ${selectedExcursion.title}`);
    const body = encodeURIComponent(buildEmailBody());
    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  };

  const submitViaFormspree = async () => {
    const payload = {
      excursion: selectedExcursion.title,
      location: selectedExcursion.location,
      duration: selectedExcursion.duration,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      organization: formData.organization,
      groupSize: formData.groupSize,
      preferredDate: formData.preferredDate,
      preferredTime: formData.preferredTime,
      notes: formData.notes,
      _subject: `Excursion booking: ${selectedExcursion.title}`,
    };

    const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Failed to send booking request');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      if (FORMSPREE_FORM_ID) {
        await submitViaFormspree();
      } else {
        submitViaMailto();
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
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Booking request sent
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {FORMSPREE_FORM_ID
                ? "We've received your request. The owner will contact you shortly to confirm your excursion."
                : "Your email client should have opened. Send the email to complete your booking request. The owner will reply to confirm."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/academic-excursions" className="btn-primary inline-flex items-center justify-center">
                View more excursions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setSelectedExcursion(null);
                  setStep(1);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    organization: '',
                    groupSize: '',
                    preferredDate: '',
                    preferredTime: '',
                    notes: '',
                  });
                }}
                className="btn-outline"
              >
                Book another
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (step === 1 || (step === 2 && !selectedExcursion)) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Choose an excursion
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Select the local academic excursion you want to book. No payment — we'll contact you to confirm.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {excursions.map((excursion) => (
              <motion.div
                key={excursion.id}
                whileHover={{ y: -4 }}
                className="card overflow-hidden cursor-pointer group"
                onClick={() => handleSelectExcursion(excursion)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={excursion.image}
                    alt={excursion.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-1">
                    {excursion.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    {excursion.location}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                    {excursion.duration} · {excursion.groupSize}
                  </p>
                  <span className="inline-flex items-center mt-3 text-primary-600 dark:text-primary-400 font-medium text-sm">
                    Book this excursion
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-500 dark:text-gray-400 text-sm">
            Booking is free — you'll receive an email confirmation from the owner.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-6 sm:p-8"
        >
          <button
            type="button"
            onClick={() => (excursionId ? navigate('/academic-excursions') : setStep(1))}
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>

          <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
            <p className="text-sm font-medium text-primary-800 dark:text-primary-200 mb-1">
              Selected excursion
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {selectedExcursion.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              {selectedExcursion.location} · {selectedExcursion.duration}
            </p>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Fill in your details below. The owner will receive this information by email and contact you to confirm — no payment is taken online.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your name *
                </label>
                <input
                  id="booking-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email *
                </label>
                <input
                  id="booking-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Phone
              </label>
              <input
                id="booking-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input-field"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="booking-organization" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                School / organization *
              </label>
              <input
                id="booking-organization"
                type="text"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="School or organization name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="booking-groupSize" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Group size *
                </label>
                <select
                  id="booking-groupSize"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                >
                  <option value="">Select</option>
                  {groupSizeOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="booking-preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Preferred date *
                </label>
                <input
                  id="booking-preferredDate"
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label htmlFor="booking-preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Preferred time
              </label>
              <select
                id="booking-preferredTime"
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleInputChange}
                className="input-field"
              >
                <option value="">Select</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="booking-notes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Notes or special requests
              </label>
              <textarea
                id="booking-notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows={3}
                className="input-field"
                placeholder="Access needs, learning goals, questions..."
              />
            </div>

            {submitError && (
              <p className="text-red-600 dark:text-red-400 text-sm">
                {submitError}
              </p>
            )}

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:justify-between pt-2">
              <button
                type="button"
                onClick={() => (excursionId ? navigate('/academic-excursions') : setStep(1))}
                className="btn-outline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary inline-flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send booking request
                    <Mail className="w-4 h-4 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookExcursion;
