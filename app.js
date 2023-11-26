function imgslider(item){
    document.querySelector('.image')=item;
}
const mainImage = document.querySelector('#mainImage');
function changeMainImage(value){
    mainImage.setAttribute('src', "./assests/img"+value+".png")
} 
