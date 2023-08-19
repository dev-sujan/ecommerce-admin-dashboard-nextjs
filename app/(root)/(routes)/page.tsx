"use client";

import { useStoreModal } from "@/hooks/useStoreModal";
import { useEffect } from "react";

const SetupPage = () => {
  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return <div></div>;
};

export default SetupPage;
