import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = () => {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <span>support@beck.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />
                  <span>123 Design Street, NY 10001</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Store Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 6:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;