import React from "react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";
function Footer() {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 ">
      <div className="Grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-neutral-300">
                {resourcesLinks.map((link,index)=>(
                    <li key={index} className="hover:text-orange-500" >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-neutral-300">
                {platformLinks.map((link,index)=>(
                    <li key={index} className="hover:text-orange-500" >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-neutral-300">
                {communityLinks.map((link,index)=>(
                    <li key={index} className="hover:text-orange-500" >
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>

      </div>

      
    </footer>
  );
}

export default Footer;
