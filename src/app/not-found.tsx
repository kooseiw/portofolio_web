import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found!",
};

export default function NotFound() {
  return (
    <h1 className="mt-32 text-center text-white text-5xl font-bold">
      404 - Page Not Found
    </h1>
  );
}
