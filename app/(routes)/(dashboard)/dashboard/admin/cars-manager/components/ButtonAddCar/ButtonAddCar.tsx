"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar";

export function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog
      open={openDialog}
      onOpenChange={() => setOpenDialog(!openDialog)}
      defaultOpen={false}
    >
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          Add new car
          <PlusCircle className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent
        onEscapeKeyDown={() => setOpenDialog(false)}
        onPointerDownOutside={() => setOpenDialog(false)}
        onInteractOutside={() => setOpenDialog(false)}
        forceMount
      >
        <DialogHeader>
          <DialogTitle>Add a new car</DialogTitle>
          <DialogDescription>
            Complete the form to add a new car
          </DialogDescription>
          <FormAddCar setOpenDialog={setOpenDialog} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
