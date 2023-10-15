const deviceType = [
    "iPhone",
    "Samsung Galaxy",
    "Google Pixel",
    "OnePlus",
    "Huawei",
    "Xiaomi",
    "LG",
    "Sony Xperia",
    "Oppo",
    "Motorola",
    "HTC",
    "Nokia",
    "ASUS ZenFone",
    "Lenovo",
    "BlackBerry",
    "Vivo",
    "ZTE",
    "Alcatel",
    "Microsoft Surface Duo",
    "LG Wing"
]

export const DeviceTypeOptions = deviceType.map((data) => {
    return {
        label: data,
        value: data
    }
})

const userType = [
    'admin',
    'customer'
]
export const UserTypeOptions = userType.map((data) => {
    return {
        label: data,
        value: data
    }
})

const TechncianName = [
    "Emily Johnson",
    "David Smith",
    "Sarah Brown",
    "Michael Wilson",
    "Jessica Anderson",
    "James Lee",
    "Olivia Davis",
    "John Taylor",
    "Sophia Martinez",
    "William Clark",
    "Ava Rodriguez",
    "Daniel Hall",
    "Mia Jackson",
    "Benjamin Harris",
    "Isabella White"
]

export const TechnicianNameOptions = TechncianName.map((data) => {
    return {
        label: data,
        value: data
    }
})

const serviceStatus = [
    "pending",
    "in_progress",
    "awaiting_parts",
    "on_hold",
    "quality_check",
    "ready_for_pickup",
    "ready_for_appointment",
    "completed",
    "canceled",
    "scheduled",
    "payment_pending",
    "delayed",
    "closed",
    "dispatched",
    "assignToTechnican",
]
export const StatusOptions = serviceStatus.map((data) => {
    return {
        label: data,
        value: data
    }
})