import { ButtonAddCar } from "./components/ButtonAddCar";
import { ListCars } from "./components/ListCars";

export default async function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Manage your cars</h2>
        <ButtonAddCar />
      </div>
      <ListCars />
    </div>
  );
}
