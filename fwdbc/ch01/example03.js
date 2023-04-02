function changeImage(url) {
    document.querySelector("img").setAttribute("src", url);
    document.querySelector("img").setAttribute("srcset", url);
}

changeImage(
    "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
);
