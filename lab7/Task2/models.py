class Vehicle:
    def __init__(self , name : str , type : str , capacity : float):
        self.name = name
        self.type = type
        self.capacity = capacity
        self.mileage = 0
    
    def add_mileage(self , km : float) -> None:
        self.mileage += km

    def set_mileage(self , km : float) -> None:
        self.mileage = km

    def make_sound(self) -> None:
        print('Wuuuuu')

    def __str__(self) -> str:
        return f"vehicle {self.name} is a {self.type} , engine capacity is : {self.capacity} . Mileage : {self.mileage}"
    
class Car(Vehicle):
    def __init__(self , name : str , capacity : float , mileage : float , model : str , year : int):
        super().__init__(name , "car" , capacity)
        self.model = model
        self.year = year
        self.is_running = False
        self.set_mileage(mileage)

    def start(self) -> None:
        self.is_running = True

    def turn_off(self) -> None:
        self.is_running = False

    def make_sound(self) -> None:
        print('Beep beep')

    def __str__(self):
        return f"{super().__str__()} . Model name is {self.model} . Made in {self.year} . \
            It is {'running' if self.is_running else 'not running'}"


class Motorcycle(Vehicle):
    def __init__(self , name : str , engine_cc : float , mileage : float , model : str , manual : bool):
        super().__init__(name , "moto" , engine_cc)
        self.manual = manual
        self.is_running = False
        self.model = model

    def start(self) -> None:
        self.is_running = True

    def turn_off(self) -> None:
        self.is_running = False

    def make_sound(self) -> None:
        print("Wrrrnnnnnn")

    def __str__(self):
        return f"{super().__str__()} . Model name is {self.model} . \
            It is {'running' if self.is_running else 'not running'}"
    