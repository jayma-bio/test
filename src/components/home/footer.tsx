import { cn } from "@/lib/utils";
import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import NextJsIcon from "../icons/next-js-icon";
import TsIcon from "../icons/ts-icon";
import TailwindIcon from "../icons/tailwind-icon";
import VercelIcon from "../icons/vercel-icon";
import ShadcnIcon from "../icons/shadcn-icon";
import OpenAiIcon from "../icons/open-ai-icon";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <div
      className={cn(
        "w-full h-[20vh] bg-gray-900/5 backdrop-blur-sm flex items-center justify-between border-t px-10 py-2",
        className
      )}
    >
      <div>content 2</div>
      <div className="">
        <Dock className="flex items-center">
          <DockIcon className="">
            <NextJsIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <TsIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <TailwindIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <VercelIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <ShadcnIcon className="size-5" />
          </DockIcon>
          <DockIcon className="">
            <OpenAiIcon className="size-5" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};
