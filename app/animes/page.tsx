import { Button } from "@/components/ui/button";

export default function Animes() {
    return (
      <section className="flex p-10 gap-4">
        <Button variant={"default"}>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Tertiary</Button>
        <Button variant={"text"}>Text</Button>
        <Button variant={"success"}>Sucess</Button>
        <Button variant={"danger"}>Danger</Button>
      </section>
    );
  }