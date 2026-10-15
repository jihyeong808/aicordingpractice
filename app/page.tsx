'use client';

import { MinimalistHero } from "@/components/minimalist-hero";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
} from "@/components/icons/social-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <MinimalistHero
        logoText="mnmlst."
        navLinks={[
          { label: "CONTACT", href: "#" },
          { label: "STORE", href: "#" },
          { label: "ABOUT US", href: "#" },
        ]}
        mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
        readMoreLink="#"
        imageSrc="/man.png"
        imageAlt="Minimalist Portrait"
        overlayText={{
          part1: "less",
          part2: "is",
          part3: "more.",
        }}
        socialLinks={[
          { icon: FacebookIcon, href: "https://facebook.com" },
          { icon: InstagramIcon, href: "https://instagram.com" },
          { icon: TwitterIcon, href: "https://twitter.com" },
          { icon: LinkedinIcon, href: "https://linkedin.com" },
        ]}
        locationText="Arlington Heights, IL"
      />
    </main>
  );
}
