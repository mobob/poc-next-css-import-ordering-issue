import { Button } from "@radix-ui/themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl flex-col w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className={`mb-3 text-2xl font-semibold`}>POC Test</h2>
        <p>
          If things are working, there should two simple blue buttons at the
          bottom of this page.
        </p>
      </div>
      <div>
        <div className="m-5">
          <Button>Not a submit Button</Button>
        </div>
        <div className="m-5">
          <Button type="submit">Submit Button</Button>
        </div>
      </div>
    </main>
  );
}
