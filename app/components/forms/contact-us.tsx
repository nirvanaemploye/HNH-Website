import React, { useState, useEffect } from "react";
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
    const developer = searchParams.get("developer");
    const type = searchParams.get("type");
    if (developer && type) {
      setFormData((prev) => ({
        ...prev,
        message: `I want to hire a ${type} developer for ${developer}`,
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
  );
};

export default ContactUsForm;
