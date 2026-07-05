import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 text-center">
      <div>
        <p className="font-mono text-sm uppercase text-blue">404</p>
        <h1 className="mt-4 text-4xl font-bold text-primary">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md leading-8 text-secondary">
          This route is not part of the portfolio yet.
        </p>
        <LinkButton href="/" className="mt-7">Return home</LinkButton>
      </div>
    </div>
  );
}
