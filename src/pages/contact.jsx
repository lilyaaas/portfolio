import { useState, useRef } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Send, User, Mail, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Sparkles from "../components/ui/Sparkles";

function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col min-h-[55vh] px-5 pb-32.5 pt-16"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-125 h-75 bg-secondary/8 rounded-full blur-[120px] pointer-events-none" />

      <h2 className="font-josefin text-lg md:text-xl text-white/25 font-bold self-start mb-12 pl-[5%] md:pl-[10%] uppercase tracking-[0.2em]">
        {t("contact_title")}
      </h2>

      <div className="grow flex flex-col items-center justify-center text-center relative z-10">
        <div className="relative inline-block mb-6">
          <Sparkles>
            <h1 className="font-poppins text-[2rem] lg:text-[2.8rem] font-black text-white tracking-wide">
              <Trans
                i18nKey="contact_get_in_touch"
                components={{ span: <span className="text-gradient" /> }}
              />
            </h1>
          </Sparkles>
        </div>

        <div className="flex items-center justify-center p-6 relative overflow-hidden">
          {/* Form Card */}
          <div className="relative w-full max-w-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-md z-10 transition-all duration-500 hover:border-white/20 group/card hover:shadow-[0_0_20px_rgba(208,131,160,0.5)]">
            <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <form
              ref={form}
              className="space-y-7 relative"
              onSubmit={sendEmail}
            >
              {/* Name Field */}
              <div className="space-y-2 text-left group">
                <label
                  htmlFor="name"
                  className="text-sm font-poppins text-white/70 font-medium ml-1 transition-colors group-focus-within:text-white"
                >
                  {t("contact_name")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-white transition-colors duration-300">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    required
                    placeholder={t("contact_name")}
                    className="w-full bg-black/20 border border-white/10 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-white/40 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 placeholder:text-white/20 font-poppins"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2 text-left group">
                <label
                  htmlFor="email"
                  className="text-sm font-poppins text-white/70 font-medium ml-1 transition-colors group-focus-within:text-white"
                >
                  {t("contact_email")}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40 group-focus-within:text-white transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    required
                    placeholder={t("contact_email")}
                    className="w-full bg-black/20 border border-white/10 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-white/40 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 placeholder:text-white/20 font-poppins"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2 text-left group">
                <label
                  htmlFor="message"
                  className="text-sm font-poppins text-white/70 font-medium ml-1 transition-colors group-focus-within:text-white"
                >
                  {t("contact_message")}
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full bg-black/20 border border-white/10 text-white rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-white/40 focus:bg-black/40 focus:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 resize-none placeholder:text-white/20 font-poppins"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center w-full md:w-auto gap-3 text-white font-josefin font-bold text-sm tracking-widest uppercase px-10 py-4 rounded-full bg-linear-to-r from-primary to-secondary transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer overflow-hidden border border-white/20 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex gap-2">
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                    {isSubmitting ? t("contact_sending") : t("contact_send")}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
