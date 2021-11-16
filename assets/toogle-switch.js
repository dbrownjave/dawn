function onSwitchToggle() {
    const offImageUrl =
        "https://cdn.shopify.com/s/files/1/0519/5215/6830/t/13/assets/main-iphone-off.png?v=18010175920206495605";
    const onImageUrl =
        "https://cdn.shopify.com/s/files/1/0519/5215/6830/t/12/assets/main-iphone-on.png?v=4836760033014477561";
    const iphone = document.getElementById("iphone");
    const imageUrl = iphone.src == onImageUrl ? offImageUrl : onImageUrl;
    iphone.src = imageUrl;
}
