export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black/80 text-white backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_-10%,rgba(0,161,78,0.22),transparent_60%),radial-gradient(900px_circle_at_110%_40%,rgba(255,255,255,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] via-transparent to-transparent" />
      </div>
      <div className="mx-auto w-full max-w-[1500px] px-6 pb-10 pt-10 md:px-8">
        <div className="relative grid gap-10 md:grid-cols-5">
          <div className="text-sm text-white/85">
            <div className="font-semibold text-white">Registered Office Address:</div>
            <div className="mt-4 space-y-2 text-[13px] leading-5 text-white/70">
              <div>Gurugram Business Park | DIP 1</div>
              <div>Central Plaza Building Retail N 63 India.</div>
              <div>CIN : U511KASDERFDSF09</div>
              <div>Telephone: 011-344556783 / 099-98214300</div>
            </div>
          </div>

          <div className="text-sm text-white/85">
            <div className="font-semibold text-white">Mail Us:</div>
            <div className="mt-4 text-[13px] leading-5 text-white/70">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </div>
          </div>

          <div className="text-sm text-white/85">
            <div className="font-semibold text-white">CONSUMER POLICY</div>
            <div className="mt-4 space-y-2 text-[13px] text-white/70">
              <div>Cancellation &amp; Returns</div>
              <div>Terms Of Use</div>
              <div>Security</div>
              <div>Privacy</div>
            </div>
          </div>

          <div className="text-sm text-white/85">
            <div className="font-semibold text-white">HELP</div>
            <div className="mt-4 space-y-2 text-[13px] text-white/70">
              <div>Payments</div>
              <div>Shipping</div>
              <div>Cancellation &amp; Returns</div>
            </div>
          </div>

          <div className="text-sm text-white/85">
            <div className="font-semibold text-white">ABOUT</div>
            <div className="mt-4 space-y-2 text-[13px] text-white/70">
              <div>CONTACT Us</div>
              <div>About Us</div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="text-base">🛍️</span>
              <span>Become a seller</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="text-base">⭐</span>
              <span>Advertise</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="text-base">🎁</span>
              <span>Gift Cards</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="text-base">🛟</span>
              <span>Help Center</span>
            </div>
          </div>

          <div className="text-[13px] text-white/70">abcd@gmail.com</div>
        </div>

        <div className="relative mt-4 text-xs text-white/45">
          © {new Date().getFullYear()} YeloHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

