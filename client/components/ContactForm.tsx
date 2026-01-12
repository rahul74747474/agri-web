import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, User, Check, AlertCircle } from 'lucide-react';
import { PrimaryButton } from './PrimaryButton';
import { GlassCard } from './GlassCard';

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: 'loading', message: 'Sending your message...' });

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: 'success',
        message:
          'Thank you! We will get back to you within 24 hours.',
      });

      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.',
      });
    }
  };

  const renderInputField = (
    label: string,
    name: keyof FormData,
    type: string = 'text',
    placeholder: string = '',
    icon?: React.ReactNode,
    isMultiline: boolean = false
  ) => {
    const hasError = errors[name];
    const value = formData[name];

    const commonClasses =
      'w-full bg-white/50 backdrop-blur-sm border rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white ' +
      (hasError ? 'border-red-300 focus:ring-red-500' : 'border-green-200/50');

    return (
      <div className="relative animate-fade-in-up" key={name}>
        {icon && (
          <div className="absolute left-3 top-3 text-green-600 pointer-events-none">
            {icon}
          </div>
        )}

        {isMultiline ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            rows={4}
            className={`${commonClasses} resize-none pl-10`}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className={`${commonClasses} pl-10`}
          />
        )}

        {hasError && (
          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <GlassCard variant="light" className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          {renderInputField(
            'Full Name',
            'name',
            'text',
            'Your name',
            <User size={18} />
          )}
          {renderInputField(
            'Phone Number',
            'phone',
            'tel',
            '10-digit phone number',
            <Phone size={18} />
          )}
        </div>

        {renderInputField(
          'Email',
          'email',
          'email',
          'your.email@example.com',
          <Mail size={18} />
        )}

        {renderInputField(
          'Message',
          'message',
          'text',
          'Tell us about your needs...',
          <MessageSquare size={18} />,
          true
        )}

        {status.type !== 'idle' && (
          <div
            className={`p-4 rounded-xl flex items-center gap-3 animate-fade-in-up ${
              status.type === 'success'
                ? 'bg-green-100 text-green-700'
                : status.type === 'error'
                  ? 'bg-red-100 text-red-700'
                  : 'bg-blue-100 text-blue-700'
            }`}
          >
            {status.type === 'success' ? (
              <Check size={20} />
            ) : status.type === 'error' ? (
              <AlertCircle size={20} />
            ) : (
              <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
            )}
            <span className="text-sm font-medium">{status.message}</span>
          </div>
        )}

        <PrimaryButton
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status.type === 'loading'}
          className={status.type === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}
        >
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </PrimaryButton>
      </form>
    </GlassCard>
  );
};
