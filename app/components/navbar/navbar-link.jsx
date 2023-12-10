import Link from "next/link";

export default function NavbarLink({ href, icon: Icon, tag }) {
  return (
    <>
      <div className="ml-5 py-4 mt-3 flex items-center">
        <Icon size={32} className="mr-4" />
        <Link href={href}>{tag}</Link>
      </div>
    </>
  );
}
