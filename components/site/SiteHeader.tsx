// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X } from "lucide-react";
// import { useMemo, useState } from "react";

// import { ButtonLink } from "@/components/ui/Button";
// import { cn } from "@/lib/utils";

// const nav = [
//   { href: "/", label: "HOME" },
//   { href: "/about-us", label: "ABOUT US" },
//   { href: "/blog", label: "BLOG" },
//   { href: "/vendors", label: "VENDORS" },
//   { href: "/delivery-partners", label: "DELIVERY PARTNERS" },
//   { href: "/contact-us", label: "CONTACT US" },
// ];

// export function SiteHeader({ className }: { className?: string }) {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const activeHref = useMemo(() => {
//     const exact = nav.find((n) => n.href === pathname)?.href;
//     if (exact) return exact;
//     if (pathname?.startsWith("/about")) return "/about-us";
//     if (pathname?.startsWith("/contact")) return "/contact-us";
//     if (pathname?.startsWith("/delivery")) return "/delivery-partners";
//     if (pathname?.startsWith("/vendor")) return "/vendors";
//     if (pathname?.startsWith("/blog")) return "/blog";
//     return "/";
//   }, [pathname]);

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-50 border-b border-zinc-200/70 bg-[#E8F9E7] dark:border-white/10",
//         className,
//       )}
//     >
//       <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/assets/images/logo.svg"
//             alt="YeloHub"
//             width={44}
//             height={44}
//             priority
//           />
//         </Link>

//         <div className="hidden flex-1 items-center justify-center md:flex">
//           <div className="relative">
//             <div className="absolute inset-x-0 -bottom-2 mx-auto h-8 w-[92%] rounded-b-[999px] bg-[#0B6F1C]/15" />
//             <nav className="relative flex items-center gap-8 rounded-full bg-[#0B6F1C] px-8 py-3 text-sm font-semibold text-white shadow-sm">
//               {nav.map((item) => {
//                 const isActive = item.href === activeHref;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     className={cn(
//                       "transition-opacity hover:opacity-90",
//                       isActive && "opacity-100",
//                       !isActive && "opacity-95",
//                     )}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </nav>
//           </div>
//         </div>

//         <div className="flex items-center gap-3">
//           <ButtonLink
//             href="/contact-us"
//             className="hidden bg-white px-7 text-[#0B6F1C] hover:bg-white/90 md:inline-flex"
//           >
//             LET&apos;S CONNECT
//           </ButtonLink>

//           <button
//             type="button"
//             className="inline-flex items-center justify-center rounded-full bg-white p-2 text-[#0B6F1C] shadow-sm ring-1 ring-black/5 transition hover:bg-white/90 md:hidden"
//             aria-label={open ? "Close menu" : "Open menu"}
//             onClick={() => setOpen((v) => !v)}
//           >
//             {open ? <X className="size-5" /> : <Menu className="size-5" />}
//           </button>
//         </div>
//       </div>

//       {open ? (
//         <div className="border-t border-zinc-200/70 bg-[#E8F9E7] px-4 py-4 md:hidden">
//           <div className="mx-auto max-w-6xl">
//             <nav className="grid gap-2">
//               {nav.map((item) => {
//                 const isActive = item.href === activeHref;
//                 return (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className={cn(
//                       "rounded-2xl px-4 py-3 text-sm font-semibold",
//                       isActive
//                         ? "bg-[#0B6F1C] text-white"
//                         : "bg-white/70 text-[#0B6F1C]",
//                     )}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//               <ButtonLink
//                 href="/contact-us"
//                 onClick={() => setOpen(false)}
//                 className="mt-1 justify-center bg-white px-7 text-[#0B6F1C] hover:bg-white/90"
//               >
//                 LET&apos;S CONNECT
//               </ButtonLink>
//             </nav>
//           </div>
//         </div>
//       ) : null}
//     </header>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/blog", label: "BLOG" },
  { href: "/vendors", label: "VENDORS" },
  { href: "/delivery-partners", label: "DELIVERY PARTNERS" },
  { href: "/contact-us", label: "CONTACT US" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    if (pathname === "/") return "/";
    return nav.find((item) => item.href !== "/" && pathname?.startsWith(item.href))
      ?.href;
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="w-full">
        <div className="relative flex h-[75px] w-full items-center justify-between overflow-hidden bg-[#058305] shadow-lg">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/headerBackground.svg')" }}
            aria-hidden
          />

          <div className="relative z-10 flex w-full items-center px-6">
            <Link
              href="/"
              className="ml-5 flex h-[62px] items-center bg-transparent px-2 md:ml-10 lg:ml-12 !no-underline hover:no-underline"
            >
              <Image
                src="/assets/images/logo.svg"
                alt="YeloHub"
                width={124}
                height={40}
                priority
              />
            </Link>

            <div className="hidden flex-1 justify-center md:flex md:translate-x-3">
              <nav className="flex items-center gap-9">
                {nav.map((item) => {
                  const isActive = item.href === activeHref;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative pb-1 text-[17px] font-medium text-white !no-underline hover:no-underline",
                        "after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-transform after:duration-200 after:ease-out after:content-['']",
                        isActive
                          ? "font-semibold opacity-100 after:origin-left after:scale-x-100"
                          : "opacity-90 after:origin-center after:scale-x-0 hover:opacity-100 hover:after:scale-x-100",
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="ml-auto flex -translate-x-6 items-center gap-3 pr-2 md:-translate-x-10 md:pr-4">
              <Link
                href="/contact-us"
                className="hidden rounded-full bg-white px-8 py-3 text-base font-semibold text-[#0B6F1C] !no-underline transition duration-200 hover:scale-[1.02] hover:bg-zinc-50 hover:no-underline active:scale-[0.99] md:inline-flex"
              >
                LET&apos;S CONNECT
              </Link>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/15 text-white md:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <div className="mx-auto mt-3 max-w-[1480px] rounded-3xl bg-[#0B6F1C] p-3 md:hidden">
          <nav className="grid gap-2">
            {nav.map((item) => {
              const isActive = item.href === activeHref;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-base font-semibold text-white !no-underline hover:no-underline",
                    isActive ? "bg-white text-[#0B6F1C]" : "bg-white/10",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
