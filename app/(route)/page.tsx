"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

export default function setUpPage() {
  return (
    <>
      {/* <UserButton /> */}

      <Modal title="Test" description="About test" isOpen onClose={() => {}}>
        Modal
      </Modal>
    </>
  );
}
