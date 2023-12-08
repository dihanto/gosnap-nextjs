export default function Layout({ children, navbar, suggest, content }) {
  return (
    <div className="flex justify-between">
      {navbar}
      <div className="w-1/5 max-w-[250px]"></div>
      {content}
      {children}
      {suggest}
    </div>
  );
}
