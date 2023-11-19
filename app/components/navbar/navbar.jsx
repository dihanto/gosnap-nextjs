/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import images from "../assets/asset";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-1/5 max-w-[250px] text-sm  fixed  h-screen  border-r-[1px]  border-slate-300">
      <p className="text-left ml-10 mt-5 text-2xl"> Gosnap </p>
      <div className="ml-5 py-4 mt-3 flex">
        <Image src={images.home} alt="home" className="scale-90 mr-4" />
        <Link href={"/dashboard"}>Home</Link>
      </div>
      <div className="ml-5 py-4 flex">
        <Image src={images.search} alt="search" className="scale-90 mr-4" />
        <a href="#" className="my-auto">
          Search
        </a>
      </div>
      <div className="ml-5 py-4 flex">
        <Image src={images.explore} alt="explore" className="scale-90 mr-4" />
        <a href="#" className="my-auto">
          Explore
        </a>
      </div>
      <div className="ml-5 py-4 flex">
        <Image src={images.message} alt="message" className="scale-90 mr-4" />
        <a href="#" className="my-auto">
          Message
        </a>
      </div>
      <div className="ml-5 py-4 flex">
        <Image
          src={images.notification}
          alt="notification"
          className="scale-90 mr-4"
        />
        <a href="#" className="my-auto">
          Notification
        </a>
      </div>
      <div className="ml-5 py-4 flex">
        <Image src={images.create} alt="create" className="scale-90 mr-4" />
        <Link href={"/post"}>Create</Link>
      </div>
      {/* <Logout onToken={onToken} onProfilePicture={onProfilePicture}/> */}
    </div>
  );
}
