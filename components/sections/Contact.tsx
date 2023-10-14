"use client";

import { useState } from "react";
import Link from "next/link";

import { Copy, Mail, Phone } from "lucide-react";

import Container from "../layouts/container";
import Typography from "../typography";
import IconButton from "../icon-button";
import SocialIcons from "../social-icons";
import useWindowSize from "@/hooks/use-window-size";

import { CONTACT_INFO } from "@/constants/contactLinks";
import { CONTACT_INFO_DATA } from "@/constants/contactInfoUID";
import { copyTextToClipboard, mergeClasses } from "@/lib/utils";

type CopyValue = "email" | "phone";

const ContactSection = ({ useSocialLink }: { useSocialLink?: boolean }) => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      let timoutId: any = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timoutId);
      }, 1500);
    } catch (error) {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };

  return (
    <Container id="contact">
      <div className="flex flex-col items-center gap-4">
        <h2 className="section-header-text">Get in touch</h2>
        <Typography
          variant="subtitle"
          className="max-w-xl text-center px-4 sm:px-8 text-gray-600"
        >
          What’s next? Feel free to reach out to me if you are looking for a
          developer or simply want to connect.
        </Typography>
      </div>

      <div className="flex flex-col items-center gap-6 md:gap-12">
        <div className="flex flex-col items-center md:gap-4">
          <div className="contact-section-link">
            <Mail className="contact-section-link-icon" />
            <div className="contact-section-link-item">
              <Typography variant="h2">{CONTACT_INFO_DATA.email}</Typography>
              <IconButton
                size={width && width < 768 ? "md" : "lg"}
                onClick={() =>
                  handleCopyClick(CONTACT_INFO_DATA.email, "email")
                }
                showTooltip={isCopied && copiedValueType === "email"}
                tooltipText="Copied!"
              >
                <Copy />
              </IconButton>
            </div>
            <Link href={CONTACT_INFO.email} className="block sm:hidden">
              <Typography variant="h2">{CONTACT_INFO_DATA.email}</Typography>
            </Link>
          </div>

          <div className="contact-section-link">
            <Phone className="contact-section-link-icon" />
            <div className="contact-section-link-item">
              <Typography variant="h2">{CONTACT_INFO_DATA.phone}</Typography>
              <IconButton
                size={width && width < 768 ? "md" : "lg"}
                onClick={() =>
                  handleCopyClick(CONTACT_INFO_DATA.phone, "phone")
                }
                showTooltip={isCopied && copiedValueType === "phone"}
                tooltipText="Copied!"
              >
                <Copy />
              </IconButton>
            </div>
            <Link href={CONTACT_INFO.phone} className="block sm:hidden">
              <Typography variant="h2">{CONTACT_INFO_DATA.phone}</Typography>
            </Link>
          </div>
        </div>

        <div
          className={mergeClasses(
            useSocialLink ? "flex" : "hidden",
            "flex-col items-center gap-2"
          )}
        >
          <Typography className="text-center">
            You may also find me on these platforms!
          </Typography>
          <SocialIcons />
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
