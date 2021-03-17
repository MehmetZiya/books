import { createContext, useState } from 'react' ;

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books] = useState(
        [
            {
                id:1,
                name: "1984",
                author: "George Orwell",
                img: "https://img.iskultur.com.tr/2021/01/1984.png",
                pages : 352,
                category: "Modern Klasikler",
                price: 9.80
             },
            {
                id:2,
                name: "Ateş Yakmak",
                author: "Jack London",
                img: "https://img.iskultur.com.tr/2019/04/ates-yakmak-1.png",
                pages : 64,
                category: "Modern Klasikler",
                price: 5.60
            },
            {
                id:3,
                name: "Altıncı Koğuş",
                author: "Anton Pavloviç Çehov",
                img: "https://img.iskultur.com.tr/2017/08/altinci-kogus.png",
                pages : 72,
                category: "Modern Klasikler",
                price: 4.90
            },
            {
                id:4,
                name: "Amok Koşucusu",
                author: "Stefan Zweig",
                img: "https://img.iskultur.com.tr/2017/01/amok15.jpg",
                pages : 64,
                category: "Modern Klasikler",
                price: 4.90
             },
            {
                id:5,
                name: "Martin Eden",
                author: "Jack London",
                img: "https://img.iskultur.com.tr/2014/08/martin-eden-1.png",
                pages : 528,
                category: "Modern Klasikler",
                price: 17.50
            },
            {
                id:6,
                name: "Sineklerin Tanrısı",
                author: "William Golding",
                img: "https://img.iskultur.com.tr/2008/10/Sineklerin-Tanrisi.png",
                pages : 272,
                category: "Modern Klasikler",
                price: 11.20
            },
            {
                id:7,
                name: "Ölü Canlar",
                author: "Nikolay Vasilyeviç Gogol",
                img: "https://img.iskultur.com.tr/2010/09/olu-canlar.png",
                pages : 484,
                category: "Dünya Klasikleri",
                price: 15.40
             },
            {
                id:8,
                name: "Goriot Baba",
                author: "Honoré de Balzac",
                img: "https://img.iskultur.com.tr/2019/07/goriot-baba.png",
                pages : 288,
                category: "Dünya Klasikleri",
                price: 10.50
            },
            {
                id:9,
                name: "Eylül",
                author: "Mehmet Rauf",
                img: "https://img.iskultur.com.tr/2020/05/EYLUL.png",
                pages : 268,
                category: "Türk Edebiyatı Klasikleri",
                price: 9.80
            },
            {
                id:10,
                name: "Bize Göre ve Bir Seyahatin Notları",
                author: "Ahmet Haşim",
                img: "https://img.iskultur.com.tr/2019/10/bize-gore.png",
                pages : 144,
                category: "Türk Edebiyatı Klasikleri",
                price: 7.00
             },
            {
                id:11,
                name: "Falaka",
                author: "Ahmet Rasim",
                img: "https://img.iskultur.com.tr/2019/06/FALAKA.jpg",
                pages : 352,
                category: "Türk Edebiyatı Klasikleri",
                price: 7.00
            },
            {
                id:12,
                name: "Kuyucaklı Yusuf",
                author: "Sabahattin Ali",
                img: "https://img.iskultur.com.tr/2020/01/kuyu.jpg",
                pages : 236,
                category: "Türk Edebiyatı Klasikleri",
                price: 5.60
            },
        ]
    )
    const values = {books}       
    return (
        <BookContext.Provider value= {values}  >
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider ;