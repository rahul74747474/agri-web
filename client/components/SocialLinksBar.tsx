import { Youtube, Instagram } from "lucide-react";

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
      customIcon: "telegram",
      url: "https://t.me/kisansaathi",
      label: "Telegram",
    },
    {
      customIcon: "whatsapp",
      url: "https://whatsapp.com/channel/0029Vb76f0cFCCoWhczKsK28",
      label: "WhatsApp",
    },
    {
      customIcon: "x",
      url: "https://x.com/Saathi_Kisan",
      label: "X",
    },
  ];

  const renderCustomIcon = (type) => {
    if (type === "telegram") {
      return (
        <svg viewBox="0 0 48 48" className="w-6 h-6" fill="none">
          <path
            d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    if (type === "whatsapp") {
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
          <path
            d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
            fill="white"
          />
        </svg>
      );
    }

    if (type === "x") {
      return (
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
          <path d="M18.244 2H21l-6.517 7.455L22 22h-6.708l-5.254-7.522L3.75 22H1l7.051-8.056L2 2h6.857l4.751 6.856L18.244 2Zm-1.176 18h1.857L7.02 4H5.078l11.99 16Z" />
        </svg>
      );
    }

    return null;
  };

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
            title={social.label}
            className="flex items-center justify-center w-12 h-12 rounded-full 
                       bg-green-700 hover:bg-green-800 shadow-lg 
                       border border-green-600 text-white 
                       transition-all duration-300 hover:scale-125"
          >
            {social.customIcon
              ? renderCustomIcon(social.customIcon)
              : <IconComponent size={24} />}
          </a>
        );
      })}
    </div>
  );
}
