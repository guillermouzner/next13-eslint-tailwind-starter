import {ModeToggle} from "@/components/mode-toggle";

export default function HomePage() {
  return (
    <>
      <div>
        <p className="mb-1 rounded-md px-2 py-1">
          <ModeToggle />
        </p>
      </div>
    </>
  );
}
