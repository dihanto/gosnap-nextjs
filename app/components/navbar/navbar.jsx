/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  EnvelopeSimple,
  HeartStraight,
  HouseLine,
  MagnifyingGlass,
  Plus,
} from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <div className="w-1/5 max-w-[250px] text-sm  fixed  h-screen  border-r-[1px]  border-slate-300">
      <p className="text-left ml-10 mt-5 text-2xl"> Gosnap </p>
      <div className="ml-5 py-4 mt-3 flex items-center">
        <HouseLine size={32} className="mr-4" />
        <Link href={"/dashboard"}>Home</Link>
      </div>
      <div className="ml-5 py-4 flex items-center">
        <MagnifyingGlass size={32} className="mr-4" />
        <a href="#">Search</a>
      </div>
      <div className="ml-5 py-4 flex items-center">
        <EnvelopeSimple size={32} className="mr-4" />
        <a href="#">Message</a>
      </div>
      <div className="ml-5 py-4 flex items-center">
        <HeartStraight size={32} className="mr-4" />
        <a href="#">Notification</a>
      </div>
      <div className="ml-5 py-4 flex items-center">
        <Plus size={32} className="mr-4" />
        <Link href={"/post"}>Create</Link>
      </div>
      {/* <Logout onToken={onToken} onProfilePicture={onProfilePicture}/> */}
    </div>
  );
}
