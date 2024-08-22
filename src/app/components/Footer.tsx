export default function Footer() {
    return (
      <div className="bg-secondary text-white p-6 px-10">
        <div className="px-12">
            <div className="flex justify-between items-center">
            <div className="flex flex-col items-start justify-center">
            <h4>Ambassador Mall</h4>
            <p className="font-light text-sm text-gray-300">XP Property Management</p>
            </div>
            <div className="flex justify-between gap-8 text-sm">
                <p>Follow Us</p>
                <ul className="flex justify-between">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
            </div>
            <hr className="h-px my-8 bg-white bg-opacity-5 border-0 "/>
        </div>
        <div className="px-12 py-10 flex justify-between text-gray-200 text-xs">
            <div className="flex flex-col justify-between gap-8">
                <p className="text-gray-400 text-sm">Subscribe</p>
                <div className="w-full">
                    <input type="text" placeholder="Your Email" className="bg-transparent border-b p-2 border-white border-opacity-50 text-white"/>
                    <button className="bg-gray-300 bg-opacity-5 relative bottom-2 text-white px-5 py-2 rounded-lg">Send</button>
                </div>
                <p>Subscribe to our newsletter to receive news feeds.</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-gray-400">Discover</p>
                <ul className="flex flex-col gap-3">
                    <li>Offices</li>
                    <li>Commercial</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-gray-400">Quick Links</p>
                <ul className="flex flex-col gap-3">
                    <li>About</li>
                    <li>Services</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-gray-400">Contact Us</p>
                <ul className="flex flex-col gap-3">
                    <li>ge@ambassador.com</li>
                    <li>(+251)938787767</li>
                </ul>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-gray-400">Our Location</p>
                <ul className="flex flex-col gap-3">
                    <li>4 kilo, ARADA Addis Ababa</li>
                    <li>Commercial</li>
                </ul>
            </div>
        </div>
        <div className="">
            <hr className="bg-white h-px my-8  bg-opacity-5 border-0 "/>
            <p className="text-center text-gray-400 text-sm">© 2024 Ambassador Mall. All rights reserved</p>
        </div>
      </div>
    );
}