"use client"
import { ReactNode } from "react"
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

type EmblaOptionsType = Parameters<typeof useEmblaCarousel>[0];

interface ScrollerProps {
    children: ReactNode[];
    options?: EmblaOptionsType;
    autoPlay?: boolean;
    className?: string;
}
const Scroller = ({
    children, 
    options={ loop: true, align: "start" },
    autoPlay=false, 
    className =""} : ScrollerProps) => {

    const plugins = autoPlay ? [Autoplay({delay:4000})] : [];
    const [emblaRef] = useEmblaCarousel(options, plugins);
  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
        <div className="flex gap-4">
           {children}
        </div>

    </div>
  )
}

export default Scroller