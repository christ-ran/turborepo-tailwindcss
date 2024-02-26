import { Button } from "@repo/ui";

export default function Page(): JSX.Element {
  return (
    <main className="h-screen flex items-center justify-center">
      <div>
        <Button>
          <h1>Turborepo with Tailwind</h1>
        </Button>
      </div>
    </main>
  );
}
