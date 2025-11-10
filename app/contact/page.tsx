'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Footer } from '@/components/footer';
import { Navigation } from '@/components/navigation';
import { RevealLinks } from '@/components/Links';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <h1 className="text-center font-bold text-4xl py-20 ">
        Under Development
      </h1>
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          Have questions, suggestions, or just want to collaborate? We'd love to
          hear from you. Drop us a message and we’ll get back to you shortly.
        </motion.p>
      </section>

      {/* Contact Form + Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border-white/20"
            />
            <Input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-white/20"
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border-white/20 resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/80"
          >
            <Send size={18} />
            Send Message
          </Button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-muted-foreground">
            You can reach us anytime through the following channels. Whether
            it's a business inquiry, partnership, or just a friendly hello —
            we’ll be happy to connect.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Mail className="text-primary" />
              <a href="mailto:contact@aifinder.com" className="hover:underline">
                contact@aifinder.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-primary" />
              <a href="tel:+20123456789" className="hover:underline">
                +20 123 456 789
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-primary" />
              <span>Cairo, Egypt</span>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-primary transition"
            >
              <i className="ri-twitter-x-line text-xl"></i>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-primary transition"
            >
              <i className="ri-linkedin-box-fill text-xl"></i>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-primary transition"
            >
              <i className="ri-github-fill text-xl"></i>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Map / Visual Section */}
      <RevealLinks />
      <Footer />
    </div>
  );
}
