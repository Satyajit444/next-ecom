"use client";

import { useStoreModalStore } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModalStore();

  return (
    <Modal
      title="Store Title"
      description="Store Description"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Create the store here...
    </Modal>
  );
};
