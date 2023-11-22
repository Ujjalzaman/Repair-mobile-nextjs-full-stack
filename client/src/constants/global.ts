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

const deviceIssue = [
    "Screen Damage",
    "Battery Problems",
    "Charging Port Issues",
    "Software and Operating System Problems",
    "Water Damage",
    "Camera Malfunctions",
    "Audio Issues",
    "Button or Touchscreen Problems",
    "Connectivity Issues",
    "Data Recovery",
    "Device Won't Turn On",
    "Slow Performance",
    "Device Lock or Password Issues",
    "Signal Reception Problems",
    "Malware or Virus Removal",
    "Component Replacement",
    "Device Cleaning",
    "Device Upgrades",
    "Insurance Claims",
    "Customer Education",

]
export const deviceIssueOptions = deviceIssue?.map((data) => {
    return {
        label: data,
        value: data
    }
})

export const DeviceTypeOptions = deviceType?.map((data) => {
    return {
        label: data,
        value: data
    }
})

const userType = [
    'admin',
    'customer'
]
export const UserTypeOptions = userType?.map((data) => {
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

export const TechnicianNameOptions = TechncianName?.map((data) => {
    return {
        label: data,
        value: data
    }
})

const serviceStatus = [
    "in_progress",
    "awaiting_parts",
    "on_hold",
    "ready_for_pickup",
    "completed",
    "fixed",
    "scheduled",
    "payment_pending",
    "dispatched",
    "assignToTechnican"
]
export const StatusOptions = serviceStatus?.map((data) => {
    return {
        label: data,
        value: data
    }
})