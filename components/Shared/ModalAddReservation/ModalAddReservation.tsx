import { Button } from "@/components/ui/button";
import { ModalAddReservationProps } from "./ModalAddReservation.types";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Car } from "@prisma/client";
import { useState } from "react";
import { CalendarSelector } from "./CalendarSelector";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export function ModalAddReservation(props: ModalAddReservationProps) {
  const { car } = props;
  const [open, setOpen] = useState(false);
  const onReserveCar = async (car: Car, dateSelected: DateRange) => {
    const response = await axios.post("/api/checkout", {
      carId: car.id,
      priceDay: car.priceDay,
      startDate: dateSelected.from,
      endDate: dateSelected.to,
      carName: car.name,
    });

    window.location = response.data.url;
    toast({
      title: "Car reserved 😎",
    });
  };

  const [dateSelected, setDateSelected] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    ),
    to: addDays(
      new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      5
    ),
  });

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button variant="outline" className="w-full mt-3">
          Book a vehicle
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent onEscapeKeyDown={() => setOpen(false)}>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Select the dates you want to rent a car
          </AlertDialogTitle>
          <AlertDialogDescription>
            <CalendarSelector
              setDateSelected={setDateSelected}
              carPriceDay={car.priceDay}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onReserveCar(car, dateSelected)}>
            Book a vehicle
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
