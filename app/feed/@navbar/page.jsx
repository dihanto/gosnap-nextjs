"use client";
import {
  EnvelopeSimple,
  HeartStraight,
  HouseLine,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react/dist/ssr";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavbarLink from "@/components/navbar/navbar-link";

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/register");
  };

  return (
    <div className="w-1/5 max-w-[250px] text-sm  fixed  h-screen  border-r-[1px]  border-slate-300">
      <h1 className="text-left ml-10 mt-5 text-2xl"> Gosnap </h1>
      <NavbarLink href={"/feed"} icon={HouseLine} tag={"Home"} />
      <NavbarLink href={"#"} icon={MagnifyingGlass} tag={"Search"} />
      <NavbarLink href={"#"} icon={EnvelopeSimple} tag={"Message"} />
      <NavbarLink href={"#"} icon={HeartStraight} tag={"Notification"} />
      <NavbarLink href={"/post"} icon={Plus} tag={"Create"} />
      <div className="ml-5 py-4 flex items-center">
        <button onClick={handleLogout}>Log out</button>
      </div>
    </div>
  );
}
