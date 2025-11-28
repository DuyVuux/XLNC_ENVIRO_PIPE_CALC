import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-950 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h5 className="font-bold text-white mb-4">Modules</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/modules/pipe-sizing" className="hover:text-white">
                  Pipe Sizing
                </Link>
              </li>
              <li>
                <Link href="/modules/spray-aeration" className="hover:text-white">
                  Spray Aeration
                </Link>
              </li>
              <li>
                <Link href="/modules/mixing-reaction" className="hover:text-white">
                  Mixing Reaction
                </Link>
              </li>
              <li>
                <Link href="/modules/settling-tank" className="hover:text-white">
                  Settling Tank
                </Link>
              </li>
              <li>
                <Link href="/modules/filtration" className="hover:text-white">
                  Filtration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Support</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Webinars
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Calculators
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-white mb-4">Contact</h5>
            <address className="not-italic text-sm">
              123 Industrial Way
              <br />
              Engineering City, 12345
              <br />
              <a href="mailto:info@xlnc.com" className="hover:text-white">
                info@xlnc.com
              </a>
            </address>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© 2024 XLNC Engineering System. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <a href="#" className="hover:text-white">
                EN
              </a>
              <span>/</span>
              <a href="#" className="hover:text-white">
                VN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

