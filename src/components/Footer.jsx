import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#123557] py-12 mt-10">
      <div className="container mx-auto px-4 md:px-6 border-b border-gray-400 border-t py-12 w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3">
            <img
              src="/assets/icons/logowhite.svg"
              alt="HABOT"
              className="h-12 mb-4"
            />
            <p className="text-gray-300 font-light px-4">© R Singhania</p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Terms</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Data privacy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/accessibility"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Related</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/find-buyer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Find Buyer
                  </a>
                </li>
                <li>
                  <a
                    href="/feedback"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:justify-center items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src="/assets/icons/Linkedin.svg" alt="" srcset="" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" "
            >
              <img src="/assets/icons/Twitter.svg" alt="" srcset="" />

              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src="/assets/icons/Facebook.svg" alt="" srcset="" />

              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <img src="/assets/icons/Instagram.svg" alt="" srcset="" />

              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
