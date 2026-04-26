import { Link } from "wouter";
import bluePeakLogo from "@assets/BluePeak_with_slogan_(cropped)_1777118658193.png";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/">
              <div className="inline-block bg-white rounded-lg p-4 mb-6">
                <img src={bluePeakLogo} alt="BluePeak Digital" className="h-28 object-contain" />
              </div>
            </Link>
            <p className="text-secondary-foreground/60 text-sm max-w-sm">
              We help home service companies attract more customers with consistent, done-for-you content—so they grow their reputation and pipeline without the stress of doing marketing themselves.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-secondary-foreground/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary-foreground/80 hover:text-white transition-colors">Services & Pricing</Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/80 hover:text-white transition-colors">About Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@bluepeakdigital.co" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  hello@bluepeakdigital.co
                </a>
              </li>
              <li>
                <a href="https://bluepeakdigital.co" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  bluepeakdigital.co
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} BluePeak Digital. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/about" className="text-secondary-foreground/60 hover:text-white text-sm transition-colors">Privacy</Link>
            <Link href="/about" className="text-secondary-foreground/60 hover:text-white text-sm transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
