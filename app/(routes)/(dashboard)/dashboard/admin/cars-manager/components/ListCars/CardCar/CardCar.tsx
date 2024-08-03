"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { Fuel, Gauge, Gem, Trash, Upload, Users, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardCarProps } from "./CardCar.types";
import { ButtonEditCar } from "./ButtonEditCar";
import axios from "axios";

export function CardCar(props: CardCarProps) {
  const { car } = props;
  const router = useRouter();

  const deleteCar = async () => {
    try {
      await axios.delete(`/api/car/${car.id}`);
      toast({
        title: "Car deleted 😃",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  const handlePublishCar = async (publish: boolean) => {
    try {
      await axios.patch(`/api/car/${car.id}`, { isPublish: publish });
      if (publish) {
        toast({
          title: "Car published 😀",
        });
      } else {
        toast({
          title: "Car unpublish 😣",
        });
      }
      router.refresh();
    } catch (error) {
      toast({
        title: "Something went wrong.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg min-w-[250px]">
      <Image
        src={car.photo}
        alt={car.name}
        width={500}
        height={600}
        className="mx-auto rounded-lg pt-6"
      />
      {car.isPublish ? (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-green-700/90 rounded-t-lg">
          Published
        </p>
      ) : (
        <p className="absolute top-0 right-0 w-full p-1 text-center text-white bg-red-300/90 rounded-t-lg">
          Not Published
        </p>
      )}

      <div className="relative p-3">
        <div className="flex flex-col mt-1 mb-1 gap-y-2">
          <p className="text-xl">{car.name}</p>
          <p>{car.priceDay}$ /day</p>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          <p className="flex items-center gap-2">
            <Gem className="h-4 w-4" strokeWidth={1} />
            {car.type}
          </p>

          <p className="flex items-center gap-2">
            <Wrench className="h-4 w-4" strokeWidth={1} />
            {car.transmission}
          </p>

          <p className="flex items-center gap-2">
            <Users className="h-4 w-4" strokeWidth={1} />
            {car.people}
          </p>

          <p className="flex items-center gap-2">
            <Fuel className="h-4 w-4" strokeWidth={1} />
            {car.engine}
          </p>

          <p className="flex items-center gap-2">
            <Gauge className="h-4 w-4" strokeWidth={1} />
            {car.cv} CV
          </p>
        </div>

        <div className="flex justify-between mt-3 gap-x-4">
          <Button variant="outline" onClick={deleteCar}>
            Delete
            <Trash className="h-4 w-4 ml-2" />
          </Button>
          <ButtonEditCar carData={car} />
        </div>

        {car.isPublish ? (
          <Button
            className="w-full mt-3"
            variant="outline"
            onClick={() => handlePublishCar(false)}
          >
            Unpublish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            className="w-full mt-3"
            onClick={() => handlePublishCar(true)}
          >
            Publish
            <Upload className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
