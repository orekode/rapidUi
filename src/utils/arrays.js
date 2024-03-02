
const removeImage = (index) => {
    const clone_images = images.filter((_, i) => i !== index ); // adds all items in images to clone_images except image with same index as index of image to be deleted
    console.log(index, images, clone_images);
    set_images([...clone_images]);
}