import { Youtube, Instagram, MessageCircle, MessageCircleMore, X } from "lucide-react";

export function SocialLinksBar() {
  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/channel/UCl9Oj06KLmTyj6-kCiEQasg",
      label: "YouTube",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/kisan.saathi?igsh=dnQ4YXI2ZjQ1dTNp",
      label: "Instagram",
    },
    {
      icon: MessageCircleMore,
      url: "https://t.me/kisansaathi",
      label: "Telegram",
    },
    {
      icon: MessageCircle,
      url: "https://whatsapp.com/channel/0029Vb76f0cFCCoWhczKsK28",
      label: "WhatsApp",
    },
    {
      icon: X,
      url: "https://x.com/Saathi_Kisan",
      label: "X",
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
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-700 hover:bg-green-800 shadow-lg border border-green-600 text-white transition-all duration-300 hover:scale-125"
            title={social.label}
          >
            <IconComponent size={24} />
          </a>
        );
      })}
    </div>
  );
}
