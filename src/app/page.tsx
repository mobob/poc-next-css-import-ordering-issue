import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>POC Test</h2>
      </div>
      <div>
        <Button>Button</Button>
      </div>
    </main>
  );
}
