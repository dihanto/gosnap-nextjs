export default function Layout({ children, modal, navbar, suggest }) {
  return (
    <div className="flex justify-between">
      {navbar}
      <div className="w-1/5 max-w-[250px]"></div>
      <div>
        {children}
        {modal}
      </div>
      {suggest}
    </div>
  );
}
