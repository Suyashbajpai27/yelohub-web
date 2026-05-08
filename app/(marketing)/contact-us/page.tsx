// import Image from "next/image";

// import { Reveal } from "@/components/motion/Reveal";

// export default function ContactUsPage() {
//   return (
//     <div className="bg-white">
//       <section className="relative h-[320px] w-full overflow-hidden">
//         <Image
//           src="/assets/images/contactBanner.svg"
//           alt="Contact banner"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/45" />
//         <div className="relative mx-auto flex h-full w-full max-w-[1300px] items-center px-6 md:px-8">
//           <Reveal>
//             <h1 className="text-5xl font-medium text-white">Contact Us</h1>
//           </Reveal>
//         </div>
//       </section>

//       <section className="bg-[#F5F9FE] py-14 md:py-16">
//         <div className="mx-auto w-full max-w-[1300px] px-6 md:px-8">
//           <div className="rounded-3xl border border-zinc-200/70 bg-white p-6 shadow-sm md:p-10">
//             <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-12">

//               {/* LEFT: contact info card */}
//               <Reveal className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200/70 shadow-sm">
//                 {/* branded header */}
//                 <div
//                   className="relative px-8 py-10"
//                   style={{
//                     backgroundImage: "url('/assets/images/fresh-green-textured.jpg')",
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   <div className="absolute inset-0 bg-[#0B6F1C]/72" aria-hidden />
//                   <div className="relative">
//                     <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
//                       Get in touch
//                     </p>
//                     <h3 className="mt-1.5 text-2xl font-bold leading-snug text-white md:text-3xl">
//                       We&apos;d love to hear<br />from you
//                     </h3>
//                     <p className="mt-2.5 max-w-xs text-sm leading-6 text-white/80">
//                       Reach out anytime — our team usually responds within 24 hours.
//                     </p>
//                   </div>
//                 </div>

//                 {/* contact rows — flex-1 so they fill remaining height */}
//                 <div className="flex flex-1 flex-col divide-y divide-zinc-100 bg-white px-8">
//                   <ContactRow
//                     icon="/assets/images/message.svg"
//                     title="Email to get free quote"
//                     value="support@yelohub.com"
//                   />
//                   <ContactRow
//                     icon="/assets/images/location.svg"
//                     title="Visit our office"
//                     value="Omxe Metro City, Raebareli Road, Lucknow (U.P) 226301, India"
//                   />
//                   <ContactRow
//                     icon="/assets/images/phone.svg"
//                     title="Call to ask any question"
//                     value="+91-9118991115, 0522-7166547"
//                   />
//                 </div>
//               </Reveal>

//               {/* RIGHT: form card */}
//               <Reveal delay={0.1} className="flex flex-col rounded-2xl border border-zinc-200/70 bg-white p-8 shadow-sm md:p-10">
//                 <h2 className="text-[28px] font-semibold tracking-tight text-zinc-900 md:text-[30px]">
//                   Have any question?
//                 </h2>

//                 <form className="mt-6 flex flex-1 flex-col">
//                   <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                     <FieldInput label="Your Name" placeholder="Name" />
//                     <FieldInput label="Your Email" placeholder="Enter Your Email" />
//                     <FieldInput
//                       label="Your Phone Number"
//                       placeholder="Enter Your Phone Number"
//                     />
//                     <FieldSelect label="Service" />
//                     <div className="md:col-span-2">
//                       <p className="text-xs font-semibold text-zinc-500">Your Message</p>
//                       <textarea
//                         placeholder="Type Here"
//                         rows={6}
//                         className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-[#00A14E]/50 focus:ring-2 focus:ring-[#00A14E]/15"
//                       />
//                     </div>
//                   </div>

//                   <button
//                     type="button"
//                     className="mt-8 h-12 w-full rounded-full bg-[#00A14E] text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#008f44] hover:shadow-md active:translate-y-0"
//                   >
//                     Send
//                   </button>
//                 </form>
//               </Reveal>

//             </div>
//           </div>
//         </div>
//       </section>

//       <Reveal>
//         <section>
//           <div className="relative h-[450px] w-full overflow-hidden">
//             <Image
//               src="/assets/images/map.svg"
//               alt="Map"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </section>
//       </Reveal>
//     </div>
//   );
// }

// function ContactRow({
//   icon,
//   title,
//   value,
//   className,
// }: {
//   icon: string;
//   title: string;
//   value: string;
//   className?: string;
// }) {
//   return (
//     <div
//       className={["flex flex-1 items-center gap-5 py-6", className]
//         .filter(Boolean)
//         .join(" ")}
//     >
//       <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#00A14E]/10 ring-1 ring-black/5">
//         <div className="flex size-10 items-center justify-center rounded-xl bg-[#00A14E] shadow-sm">
//           <Image src={icon} alt="" width={20} height={20} />
//         </div>
//       </div>
//       <div>
//         <p className="text-[16px] font-semibold text-zinc-900">{title}</p>
//         <p className="mt-1 text-[13px] font-medium leading-6 text-zinc-600">
//           {value}
//         </p>
//       </div>
//     </div>
//   );
// }

// function FieldInput({ label, placeholder }: { label: string; placeholder: string }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-zinc-500">{label}</p>
//       <input
//         placeholder={placeholder}
//         className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm outline-none placeholder:text-zinc-400 focus:border-[#00A14E]/50 focus:ring-2 focus:ring-[#00A14E]/15"
//       />
//     </div>
//   );
// }

// function FieldSelect({ label }: { label: string }) {
//   return (
//     <div>
//       <p className="text-xs font-semibold text-zinc-500">{label}</p>
//       <select className="mt-2 h-11 w-full rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-700 shadow-sm outline-none focus:border-[#00A14E]/50 focus:ring-2 focus:ring-[#00A14E]/15">
//         <option>Select Service</option>
//         <option>Vendor</option>
//         <option>Delivery Partner</option>
//         <option>Customer Support</option>
//         <option>Other</option>
//       </select>
//     </div>
//   );
// }



// "use client";

// import { motion } from "motion/react";
// import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
// import { ReactNode } from "react";

// function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay, ease: "easeOut" }}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-[#F5F9FE] flex items-center justify-center p-4 md:p-8">
//       <main className="w-full max-w-[1240px]">
//         <Reveal>
//           <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 overflow-hidden">
//             <div className="flex flex-col lg:flex-row">
              
              
              
//               <div className="lg:w-[45%] bg-[#F9FBFF] p-8 md:p-12 lg:p-16 space-y-12 border-b lg:border-b-0 lg:border-r border-zinc-100">
//                 <div className="space-y-12">
//                   <ContactItem
//                     icon={<Mail className="h-7 w-7 text-white" />}
//                     title="Email to get free quote"
//                     value="support@yelohub.com"
//                     valueClassName="text-[#00A14E]"
//                     delay={0.1}
//                   />
//                   <ContactItem
//                     icon={<MapPin className="h-7 w-7 text-white" />}
//                     title="Visit our office"
//                     value="Omxe Metro City, Raebareli Road, Lucknow (U.P) 226301, India"
//                     valueClassName="text-[#00A14E]"
//                     delay={0.2}
//                   />
//                   <ContactItem
//                     icon={<Phone className="h-7 w-7 text-white" />}
//                     title="Call to ask any question"
//                     value="+91-9118991115, 0522-7166547"
//                     valueClassName="text-[#00A14E]"
//                     delay={0.3}
//                   />
//                 </div>
//               </div>

              
//               <div className="lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col space-y-10">
//                 <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
//                   Have any question?
//                 </h1>

//                 <form className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
//                   <div className="space-y-2">
//                     <label className="text-[13px] font-semibold text-zinc-500">Your Name</label>
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-[13px] font-semibold text-zinc-500">Your Email</label>
//                     <input
//                       type="email"
//                       placeholder="Enter Your Email"
//                       className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-[13px] font-semibold text-zinc-500">Your Phone Number</label>
//                     <input
//                       type="tel"
//                       placeholder="Enter Your Phone Number"
//                       className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-[13px] font-semibold text-zinc-500">Service</label>
//                     <div className="relative">
//                       <select className="h-12 w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 pr-10 text-sm text-zinc-600 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10">
//                         <option>Select Service</option>
//                         <option>Vendor</option>
//                         <option>Delivery Partner</option>
//                         <option>Customer Support</option>
//                       </select>
//                       <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
//                     </div>
//                   </div>

//                   <div className="space-y-2 md:col-span-2">
//                     <label className="text-[13px] font-semibold text-zinc-500">Your Message</label>
//                     <textarea
//                       rows={5}
//                       placeholder="Type Here"
//                       className="w-full resize-none rounded-lg border border-zinc-200 bg-white p-4 text-sm text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
//                     />
//                   </div>

//                   <div className="md:col-span-2">
//                     <motion.button
//                       whileHover={{ scale: 1.005, translateY: -1 }}
//                       whileTap={{ scale: 0.99 }}
//                       type="button"
//                       className="h-12 w-full rounded-lg bg-[#00A14E] text-base font-bold text-white shadow-lg shadow-[#00A14E]/20 transition-colors hover:bg-[#008f44]"
//                     >
//                       Send
//                     </motion.button>
//                   </div>
//                 </form>
//               </div>

//             </div>
//           </div>
//         </Reveal>
//       </main>
//     </div>
//   );
// }

// function ContactItem({
//   icon,
//   title,
//   value,
//   valueClassName = "",
//   delay = 0,
// }: {
//   icon: ReactNode;
//   title: string;
//   value: string;
//   valueClassName?: string;
//   delay?: number;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -20 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5, delay, ease: "easeOut" }}
//       className="flex items-start gap-6 group"
//     >
//       <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00A14E] shadow-lg shadow-[#00A14E]/20 transition-transform duration-300 group-hover:scale-110">
//         {icon}
//       </div>
//       <div className="space-y-1 mt-1">
//         <h3 className="text-lg font-bold tracking-tight text-zinc-900">
//           {title}
//         </h3>
//         <p className={`text-[15px] font-semibold leading-relaxed ${valueClassName}`}>
//           {value}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "motion/react";
import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { ReactNode } from "react";

/**
 * A reusable animation wrapper for smooth entry transitions.
 */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F9FE]">
      {/* BANNER SECTION: From your original code */}
      <section className="relative h-[320px] w-full overflow-hidden">
        {/* Note: Using standard img for compatibility. If in Next.js, swap back to <Image fill priority /> */}
        <img
          src="/assets/images/contactBanner.svg"
          alt="Contact banner"
          className="h-full w-full object-cover"
          onError={(e) => (e.currentTarget.src = "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2070")}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex h-full w-full max-w-[1300px] items-center px-6 md:px-8">
          <Reveal>
            <h1 className="text-5xl font-bold text-white tracking-tight">Contact Us</h1>
          </Reveal>
        </div>
      </section>

      {/* MAIN CONTENT: The Professional Figma-style Card */}
      <main className="mx-auto -mt-16 relative z-10 w-full max-w-[1240px] px-4 pb-20 md:px-8">
        <Reveal>
          <div className="bg-white rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.06)] border border-zinc-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* LEFT: Contact Information (Matches Figma exactly) */}
              <div className="lg:w-[45%] bg-[#F9FBFF] p-8 md:p-12 lg:p-16 space-y-12 border-b lg:border-b-0 lg:border-r border-zinc-100">
                <div className="space-y-12">
                  <ContactItem
                    icon={<Mail className="h-7 w-7 text-white" />}
                    title="Email to get free quote"
                    value="support@yelohub.com"
                    valueClassName="text-[#00A14E]"
                    delay={0.1}
                  />
                  <ContactItem
                    icon={<MapPin className="h-7 w-7 text-white" />}
                    title="Visit our office"
                    value="Omxe Metro City, Raebareli Road, Lucknow (U.P) 226301, India"
                    valueClassName="text-[#00A14E]"
                    delay={0.2}
                  />
                  <ContactItem
                    icon={<Phone className="h-7 w-7 text-white" />}
                    title="Call to ask any question"
                    value="+91-9118991115, 0522-7166547"
                    valueClassName="text-[#00A14E]"
                    delay={0.3}
                  />
                </div>
              </div>

              {/* RIGHT: Contact Form (Matches Figma exactly) */}
              <div className="lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col space-y-10">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                  Have any question?
                </h1>

                <form className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-zinc-500">Your Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-zinc-500">Your Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-zinc-500">Your Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter Your Phone Number"
                      className="h-12 w-full rounded-lg border border-zinc-200 bg-white px-4 text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[13px] font-semibold text-zinc-500">Service</label>
                    <div className="relative">
                      <select className="h-12 w-full appearance-none rounded-lg border border-zinc-200 bg-white px-4 pr-10 text-sm text-zinc-600 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10">
                        <option>Select Service</option>
                        <option>Vendor</option>
                        <option>Delivery Partner</option>
                        <option>Customer Support</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    </div>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-[13px] font-semibold text-zinc-500">Your Message</label>
                    <textarea
                      rows={5}
                      placeholder="Type Here"
                      className="w-full resize-none rounded-lg border border-zinc-200 bg-white p-4 text-zinc-900 shadow-sm transition-all outline-none focus:border-[#00A14E]/50 focus:ring-4 focus:ring-[#00A14E]/10"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <motion.button
                      whileHover={{ scale: 1.005, translateY: -1 }}
                      whileTap={{ scale: 0.99 }}
                      type="button"
                      className="h-12 w-full rounded-lg bg-[#00A14E] text-base font-bold text-white shadow-lg shadow-[#00A14E]/20 transition-colors hover:bg-[#008f44]"
                    >
                      Send
                    </motion.button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  value,
  valueClassName = "",
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  valueClassName?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex items-start gap-6 group"
    >
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00A14E] shadow-lg shadow-[#00A14E]/20 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <div className="space-y-1 mt-1">
        <h3 className="text-lg font-bold tracking-tight text-zinc-900">
          {title}
        </h3>
        <p className={`text-[15px] font-semibold leading-relaxed ${valueClassName}`}>
          {value}
        </p>
      </div>
    </motion.div>
  );
}