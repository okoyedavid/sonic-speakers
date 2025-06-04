import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input.jsx";
import { Textarea } from "../ui/textarea.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
// import { useToast } from "@/hooks/use-toast";
import { Mail, User, Phone, Calendar, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "",
    message: "",
    mailingList: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // try {
    //   // Send email using the API
    //   const { error } = await window.ezsite.apis.sendEmail({
    //     from: "support@ezsite.ai",
    //     to: ["booking@djbeats.com"],
    //     subject: `New Booking Inquiry from ${formData.name}`,
    //     html: `
    //       <h2>New Event Booking Inquiry</h2>
    //       <p><strong>Name:</strong> ${formData.name}</p>
    //       <p><strong>Email:</strong> ${formData.email}</p>
    //       <p><strong>Phone:</strong> ${formData.phone}</p>
    //       <p><strong>Event Date:</strong> ${formData.eventDate}</p>
    //       <p><strong>Event Type:</strong> ${formData.eventType}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${formData.message}</p>
    //       <p><strong>Mailing List:</strong> ${
    //         formData.mailingList ? "Yes" : "No"
    //       }</p>
    //     `,
    //   });

    //   toast({
    //     title: "Message Sent!",
    //     description: "Thank you for your inquiry. We'll get back to you soon!",
    //   });

    //   // Reset form
    //   setFormData({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     eventDate: "",
    //     eventType: "",
    //     message: "",
    //     mailingList: false,
    //   });
    // } catch (error) {
    //   console.error("Error sending message:", error);
    //   toast({
    //     title: "Error",
    //     description: "Failed to send message. Please try again.",
    //     variant: "destructive",
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  return (
    <Card className="bg-black/50 border-purple-500/20 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Book Your Event
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-12 bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-12 bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="pl-12 bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
              <Input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="pl-12 bg-black/30 border-purple-500/30 text-white focus:border-purple-400"
              />
            </div>
          </div>

          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="w-full p-3 bg-black/30 border border-purple-500/30 rounded-md text-white focus:border-purple-400 focus:outline-none"
            required
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday Party</option>
            <option value="Naming Ceremony">Naming Ceremony</option>
            <option value="End of Year Party">End of Year Party</option>
            <option value="Competition">Competition</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Other">Other</option>
          </select>

          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-purple-400" />
            <Textarea
              name="message"
              placeholder="Tell us about your event..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="pl-12 bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400 resize-none"
            />
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="mailingList"
              name="mailingList"
              checked={formData.mailingList}
              onChange={handleChange}
              className="w-4 h-4 text-purple-600 bg-black/30 border-purple-500/30 rounded focus:ring-purple-500"
            />

            <label htmlFor="mailingList" className="text-sm text-gray-300">
              Subscribe to our mailing list for updates and special offers
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 text-lg font-semibold"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
