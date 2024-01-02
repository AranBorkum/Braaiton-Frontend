export function BookingStage(int) {
    switch (int) {
        case 1:
            return "Reserved"
        case 2:
            return "Booked"
        case 3:
            return "Required Returning"
        case 4:
            return "Returned"
        case 5:
            return "Complete"
        case 6:
            return "Cancelled"
        default:
            return "Invalid"
    }
}