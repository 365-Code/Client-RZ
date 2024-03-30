// export type productType = {
//     image: string,
//     name: string,
//     material: string,
//     price: string
// }

export interface CategoryType {
    name: string;
    _id?: string;
}

export interface ProductType {
    _id?: string;
    name: string;
    slug?: string;
    type: string;
    image: string;
    material?: string;
    category?: CategoryType;
    price?: string;
}

export interface ProductInputType {
    _id?: string;
    name: string;
    slug?: string;
    type: string;
    image: string;
    material?: string;
    category?: string;
    price?: string;
}

export const products = [
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269441/img_14_g9zqlq.jpg",
        name: "Makrana Brown",
        material: "Doongri",
        price: "2301"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269440/img_13_mkohum.jpg",
        name: "Makrana Lining",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269440/img_12_ka6zrh.jpg",
        name: "Brown Albeto",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269440/img_9_eh30vp.jpg",
        name: "Makrana Grey",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269440/img_10_m3zw00.jpg",
        name: "Makrana Grey Shade",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269439/img_6_bagwri.jpg",
        name: "Makrana Kumari",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269439/img_8_l51uyr.jpg",
        name: "Makrana Pink",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269438/img_1_ys0l3l.jpg",
        name: "Doongri Albeto",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://res.cloudinary.com/dhji69hny/image/upload/v1709269438/img_7_leqmpw.jpg",
        name: "Aadango",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://i.pinimg.com/originals/50/e6/a4/50e6a49bbb9b584da4a44bdd3a3571fe.jpg",
        name: "Makrana White",
        material: "Doongri",
        price: "120304"
    },
    {
        image: "https://5.imimg.com/data5/CD/PC/IW/ANDROID-11353941/product-jpeg-500x500.jpg",
        name: "Veitnam White",
        material: "Veitnam",
        price: "120304"
    },
    {
        image: "https://th.bing.com/th/id/OIP.cILVOOQtOPFvoCcrna8CdAHaGa?w=848&h=735&rs=1&pid=ImgDetMain",
        name: "Lining White",
        material: "Doongri",
        price: "120304"
    },

] as Array<ProductType>