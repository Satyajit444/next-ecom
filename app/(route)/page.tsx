"use client";

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function setUpPage() {
  const isOpen = useStoreModalStore((state) => state.isOpen);
  const onOpen = useStoreModalStore((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <>This is the root page</>;
}
