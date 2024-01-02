export function InventoryState(int) {
    switch (int) {
        case 1:
            return "Available"
        case 2:
            return "Reserved"
        case 3:
            return "In Use"
        default:
            return "Invalid"
    }
}