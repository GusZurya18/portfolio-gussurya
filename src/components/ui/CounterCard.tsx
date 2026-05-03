import { useScrollReveal, useCountUp } from "@/hooks/use-animations";

interface CounterCardProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const CounterCard = ({ end, suffix = "", label, delay = 0 }: CounterCardProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const count = useCountUp(end, 2000, 0, isVisible);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="p-8 border border-border group hover:bg-foreground hover:border-foreground transition-all duration-500"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="text-display-md font-black group-hover:text-background transition-colors duration-500">
        {count}{suffix}
      </span>
      <p className="text-muted-foreground mt-2 group-hover:text-background/70 transition-colors duration-500">
        {label}
      </p>
    </div>
  );
};

export default CounterCard;
