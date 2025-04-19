const body=document.getElementsByTagName("body")[0];
const swiperota=document.getElementById("swiperota");


swiperota.addEventListener("swiperslidechange",()=>{
    const raqam=swiperota.swiper.realIndex;
    console.log(raqam);
    switch (raqam) {
        case 0:
            body.style=
            "background: linear-gradient(105.54deg, #F4A764 -2.93%, #FFDEC2 72.14%)"; break;
            case 1:
            body.style=
            "background: linear-gradient(105.54deg, #ADB0B0 -2.93%, #E1E1E1 72.14%)"; break;
            case 2:
            body.style=
            "background: linear-gradient(105.54deg, #30A357 -2.93%, #75E39A 72.14%)"; break;
            case 3:
            body.style=
            "background: linear-gradient(105.54deg, #F24F4F -2.93%, #FFA895 72.14%)"; break;
    }
})