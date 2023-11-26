function imgslider(item){
    document.querySelector('.image')=item;
}
const mainImage = document.querySelector('#mainImage');
const rightCircle = document.querySelector('.right_circle');
const colorArray = ['#005b35', '#e6bbbd', '#a2266d']
function changeMainImage(value){
    mainImage.setAttribute('src', "./assests/img"+value+".png")
    rightCircle.style.backgroundColor= colorArray[value-1];
} 
