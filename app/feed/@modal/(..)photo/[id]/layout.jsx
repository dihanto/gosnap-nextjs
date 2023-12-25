import { ModalProvider } from "@/components/core/Modal/modal_context";

export default function Layout({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}
