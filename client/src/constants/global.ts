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
export const UserTypeOptions = userType.map((data) =>{
    return {
        label: data,
        value: data
    }
})