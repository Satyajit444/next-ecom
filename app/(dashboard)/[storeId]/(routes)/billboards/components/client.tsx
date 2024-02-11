"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Billboard } from "@prisma/client";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { columns } from "./column";

interface billboardClientProps {
  data: Billboard[];
}

export const BillboardClient: React.FC<billboardClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards(${data.length})`}
          description="Manage billboards of your store"
        />

        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus />
          Add New
        </Button>
      </div>
      <Separator />

      <DataTable columns={columns} data={data}/>
    </>
  );
};
