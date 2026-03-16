from models import Car, Motorcycle, Vehicle

def section(title: str):
    print(f"\n{'=' * 50}")
    print(f"  {title}")
    print('=' * 50)
 
 
def main():
 
    section("Creating Vehicles")
 
    car1 = Car(name="Toyota", capacity=2.0, mileage=15000, model="Camry", year=2020)
    car2 = Car(name="Ford", capacity=1.6, mileage=32000, model="Focus", year=2018)
    moto1 = Motorcycle(name="Honda", engine_cc=600, mileage=8000, model="CBR600", manual=True)
    moto2 = Motorcycle(name="Yamaha", engine_cc=1000, mileage=5000, model="MT-10", manual=True)
 
    section("All Vehicles — __str__")
 
    vehicles: list[Vehicle] = [car1, car2, moto1, moto2]
 
    for v in vehicles:
        print(v)

    section("Starting & Stopping Vehicles")
 
    car1.start()
    print(f"Started car1 — is_running: {car1.is_running}")
    car1.turn_off()
    print(f"Turned off car1 — is_running: {car1.is_running}")
 
    moto1.start()
    print(f"Started moto1 — is_running: {moto1.is_running}")
 
    section("Adding Mileage")
 
    car1.add_mileage(500)
    print(f"After adding 500km — {car1}")
 
    moto1.set_mileage(9999)
    print(f"After set_mileage — {moto1}")

    section("Polymorphism — make_sound()")
 
    for v in vehicles:
        print(f"{v.name} ({v.type}): ", end="")
        v.make_sound()
 
 
if __name__ == "__main__":
    main()