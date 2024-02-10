"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

export const BillboardClent = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div>
        <Heading
          title="Billboard "
          description="Manage billboards of your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus />
          Add New
        </Button>
      </div>
    </>
  );
};
