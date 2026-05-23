const modal = document.getElementById("galleryModal");
const modalImage = document.getElementById("modalImage");

function openGallery(smallImg, largeImg) {

    modal.style.display = "flex";

    modalImage.src = smallImg;

    document.getElementById("smallBtn").onclick = () => {
        modalImage.src = smallImg;
    };

    document.getElementById("largeBtn").onclick = () => {
        modalImage.src = largeImg;
    };
}

function closeGallery() {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target === modal) {
        closeGallery();
    }
};
