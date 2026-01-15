import { Youtube, Instagram, MessageCircle, MessageCircleMore, X } from "lucide-react";

export function SocialLinksBar() {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
    {
      icon: MessageCircleMore,
      url: "https://www.telegram.org",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      url: "https://www.whatsapp.com",
      label: "WhatsApp",
      color: "hover:text-green-500",
    },
    {
      icon: X,
      url: "https://www.x.com",
      label: "X",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-6">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 text-gray-700 transition-all duration-300 hover:scale-125 ${social.color}`}
            title={social.label}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
}
