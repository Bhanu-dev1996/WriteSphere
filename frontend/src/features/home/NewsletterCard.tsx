import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterCard() {
  return (
    <div className="bg-primary text-primary-foreground p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary opacity-50 pointer-events-none" />
      <h3 className="font-serif text-xl relative z-10">The Weekly Insight</h3>
      <p className="text-sm opacity-90 leading-relaxed relative z-10">
        Deep dives and curated links, delivered every Sunday morning.
      </p>
      <div className="mt-2 relative z-10 space-y-2">
        <Input
          placeholder="email@address.com"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg focus:ring-2 focus:ring-white/30"
        />
        <Button className="w-full bg-white text-primary font-semibold hover:bg-white/90">
          Join 50k Readers
        </Button>
      </div>
    </div>
  );
}
