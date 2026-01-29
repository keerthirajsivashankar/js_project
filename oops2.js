// Hey man! This is "Object-Oriented Design" (OOD).
// Interview Q: "Design a Parking Lot that can handle Cars and Trucks."

console.log("===============================");
console.log("--- 1. THE CLASSES (Blueprints) ---");
console.log("===============================");

// 1. Base Class for any Vehicle
class Vehicle {
  constructor(licensePlate) {
    this.licensePlate = licensePlate;
  }
}

// 2. Child Classes
class Car extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate);
    this.type = "Car";
    this.spotsNeeded = 1;
  }
}

class Truck extends Vehicle {
  constructor(licensePlate) {
    super(licensePlate);
    this.type = "Truck";
    this.spotsNeeded = 3; // Trucks are huge!
  }
}

// 3. The Parking Lot (The Logic Core)
class ParkingLot {
  constructor(totalSpots) {
    this.capacity = totalSpots;
    this.spots = new Array(totalSpots).fill(null); // Empty spots
    this.occupiedCount = 0;
  }

  // Helper: Find consecutive empty spots for big vehicles
  findSpots(needed) {
    let consecutive = 0;

    for (let i = 0; i < this.capacity; i++) {
      if (this.spots[i] === null) {
        consecutive++;
        // If we found enough space, return the starting index
        if (consecutive === needed) {
          return i - needed + 1;
        }
      } else {
        consecutive = 0; // Reset if we hit a car
      }
    }
    return -1; // No space found
  }

  park(vehicle) {
    const spotIndex = this.findSpots(vehicle.spotsNeeded);

    if (spotIndex === -1) {
      console.log(
        `❌ FAILED: No space for ${vehicle.type} (${vehicle.licensePlate})`,
      );
      return false;
    }

    // Fill the spots
    for (let i = 0; i < vehicle.spotsNeeded; i++) {
      this.spots[spotIndex + i] = vehicle.licensePlate;
    }

    this.occupiedCount += vehicle.spotsNeeded;
    console.log(
      `✅ PARKED: ${vehicle.type} (${vehicle.licensePlate}) at spot ${spotIndex}`,
    );
    return true;
  }

  printStatus() {
    console.log(
      `\n🅿️ Status (${this.occupiedCount}/${this.capacity}):`,
      this.spots,
    );
  }
}

console.log("\n===============================");
console.log("--- 2. THE SIMULATION ---");
console.log("===============================");

const lot = new ParkingLot(5); // Small lot with 5 spots

const car1 = new Car("ABC-123");
const car2 = new Car("XYZ-999");
const truck1 = new Truck("BIG-TRUCK"); // Needs 3 spots!

lot.park(car1);
lot.park(car2);
lot.printStatus();
// [ "ABC-123", "XYZ-999", null, null, null ]

lot.park(truck1);
// Should fit in the last 3 spots
lot.printStatus();
// [ "ABC-123", "XYZ-999", "BIG-TRUCK", "BIG-TRUCK", "BIG-TRUCK" ]

const car3 = new Car("FAIL-CAR");
lot.park(car3);
// Should fail (Lot is full)
