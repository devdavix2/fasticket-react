import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Import the ChevronDown icon
import { Button } from "./components/ui/button";

const faqs = [
  {
    id: 1,
    question: "How do I book event tickets?",
    answer:
      "You can book tickets for events by browsing our event listings and selecting the event you'd like to attend. Once you've selected an event, follow the steps to complete your purchase.",
  },
  {
    id: 2,
    question: "Can I get a refund for my tickets?",
    answer:
      "Refunds are available for certain events depending on the event's refund policy. Please check the event details or contact customer support for more information.",
  },
  {
    id: 3,
    question: "How do I access my tickets after purchase?",
    answer:
      "Once you've purchased your tickets, you will receive an email with a confirmation and a link to access your tickets. You can also view your tickets in your account under 'My Tickets'.",
  },
  {
    id: 4,
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and bank transfers. You can select your preferred payment method during checkout.",
  },
  {
    id: 5,
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team via the 'Contact Us' page on our website. We are available 24/7 to assist you with any inquiries or issues.",
  },
];

export function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="space-y-6 flex flex-col items-center"> {/* Changed to flex-col for column layout */}
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-300 pb-4 w-full max-w-xl"
          >
            <div
              className="flex items-center justify-between cursor-pointer text-lg font-semibold"
              onClick={() => toggleFaq(faq.id)}
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${openFaq === faq.id ? "rotate-180" : ""}`}
                size={20}
              />
            </div>
            {openFaq === faq.id && (
              <div className="text-sm text-gray-600 mt-2">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
