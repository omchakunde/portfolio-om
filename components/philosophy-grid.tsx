import { philosophy } from "@/lib/data";
import { Card } from "@/components/ui/card";

export function PhilosophyGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {philosophy.map((item) => {
        const Icon = item.icon;
        return (
          <Card key={item.title}>
            <Icon className="h-6 w-6 text-blue" />
            <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
            <p className="mt-3 leading-7 text-secondary">{item.text}</p>
          </Card>
        );
      })}
    </div>
  );
}
