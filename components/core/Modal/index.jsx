"use client";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const overlay = useRef(null);
  const wrapper = useRef(null);

  const router = useRouter();

  const close = useCallback(() => {
    router.back();
  }, [router]);

  const onClick = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (close) close();
      }
    },
    [close, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") close();
    },
    [close]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/70"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-slate-200  rounded-lg"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
