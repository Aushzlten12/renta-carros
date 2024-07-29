"use client";

import { Button } from "@/components/ui/button";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";

export function ButtonEditCar(props: ButtonEditCarProps) {
  const { carData } = props;
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <Dialog
      open={openDialog}
      defaultOpen={false}
      onOpenChange={() => setOpenDialog(!openDialog)}
    >
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Edit
          <Pencil className="w-4 h-4 ml-2" />
        </Button>
      </DialogTrigger>

      <DialogContent
        onEscapeKeyDown={() => setOpenDialog(false)}
        onPointerDownOutside={() => setOpenDialog(false)}
        onInteractOutside={() => setOpenDialog(false)}
        forceMount
      >
        <DialogHeader>
          <DialogTitle>Edit car</DialogTitle>
          <DialogDescription>
            {/* must complete the form */}
            <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
