import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

const ContactUsForm = () => {
  const searchParams = useSearchParams();
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
    const service = searchParams.get("service");
    const type = searchParams.get("type");
    const developer = searchParams.get("developer");

    if (service && type) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in ${service} services. Specifically looking for: ${type}`,
      }));
    } else if (developer) {
      setFormData((prev) => ({
        ...prev,
        message: `I want to hire a ${developer}`,
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
          message:
            "Thank you for your message! We've sent it to hitnhammertechnologies0706@gmail.com and will get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error sending your message. Please try again or contact us directly at hitnhammertechnologies0706@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      style={{
        boxShadow: "0px 25.42px 38.13px #666AF513,inset 0px 0px 10px #ffffff30",
      }}
      className="bg-white/5 rounded-2xl sm:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-24  "
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
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg "
            placeholder="Enter your name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          <input
            className="w-full h-14 px-4 dark:bg-[#262036] bg-[#FFFFFF0D] border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg "
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
            className="dark:bg-[#262036] bg-[#FFFFFF0D] w-full  p-4 border border-primary [box-shadow:0px_4px_20px_#8B68FF25] rounded-lg"
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
            className="w-full bg-[#6C42F8] text-white py-4 rounded-lg text-lg font-semibold hover:bg-[#5533C8] transition-colors"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>

        {status.type && (
          <div
            className={`mt-4 p-4 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
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
                href="https://www.google.com/maps/place/Nirvana+Tech+Labs/@20.768061,72.973713,407m/data=!3m1!1e3!4m6!3m5!1s0x3be0ee691bdc222d:0x8601d0112c1f6232!8m2!3d20.768061!4d72.973713!16s%2Fg%2F11d_z79lt1?hl=en&entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                HitNHammer
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






