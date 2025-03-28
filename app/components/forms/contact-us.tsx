import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";
import { useTheme } from "@/app/components/context/themeContext";

const ContactUsForm = () => {
  const searchParams = useSearchParams();
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Get developer info from URL parameters
    const developerName = searchParams.get("developer");
    const developerType = searchParams.get("type");

    if (developerName && developerType) {
      setFormData((prev) => ({
        ...prev,
        message: `I would like to hire a ${developerType} developer.`,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you for your message! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      /* style={{
        boxShadow: "0px 25.42px 38.13px #666AF513,inset 0px 0px 10px #ffffff30",
      }} */
      style={{
        boxShadow: "0px 35.42px 48.13px #666AF521,inset 0px 0px 10px #ffffff30",
      }}
      className="dark:bg-white/5 bg-[#FFFFFF0D] rounded-2xl sm:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-24"
    >
      <div>
        <h5 className="capitalize text-primary font-oswald font-semibold text-3xl">
          Get in touch
        </h5>
        <p className="dark:text-[#E1E0E0] text-[#717070] mt-1">
          We are here for you! How can we help?
        </p>
        <form
          onSubmit={handleSubmit}
          className="sm:mt-14 mt-7 sm:space-y-9 space-y-5"
        >
          <input
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Enter your name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <input
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Enter your email address"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          <textarea
            rows={4}
            className="dark:bg-[#262036] bg-[#FFFFFF0D] w-full text-[#898686] p-4 border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
            placeholder="Go ahead, We are listening..."
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            required
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 bg-primary rounded-lg font-semibold sm:text-2xl text-lg ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
        {status.type && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              status.type === "success"
                ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
            }`}
          >
            {status.message}
          </div>
        )}
      </div>
      <div className="md:block hidden">
        <Image
          src="/contact-form-vector.svg"
          alt="contact us"
          width={435}
          height={310}
        />
        <div className="space-y-7 mt-11">
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaMapMarkerAlt />
            </span>
            <p>
              <a
                href="https://www.google.com/maps/dir//Nirvana+Tech+Labs+Nursery+Rd+opp.+Anand+Cinema,+Maruti+Nagar+Society+Bilimora,+Gujarat+396321/@20.7680594,72.9737598,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3be0ee691bdc222d:0x8601d0112c1f6232"
                target="_blank"
              >
                Nirvana Tech Labs
              </a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaPhone />
            </span>
            <p>
              <a href="tel:+91 7861973807">+91 7861973807</a>
            </p>
          </div>
          <div className="flex items-center justify-start gap-4">
            <span className="h-10 w-10 border border-primary text-primary rounded-full flex items-center justify-center">
              <FaEnvelope />
            </span>
            <p>
              <a href="mailto:hitnhammertechnologies0706@gmail.com">
                hitnhammertechnologies0706@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
