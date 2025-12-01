import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex items-center justify-center w-screen h-screen ">
      <Button
        className="hover:cursor-pointer"
        variant={"destructive"}
        size={"lg"}
      >
        Click Me
      </Button>{" "}
    </div>
  );
}
