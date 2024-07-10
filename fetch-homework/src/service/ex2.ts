export const getAllProduct = async() => {
    const respond = await fetch("http://localhost:9999/post");
    return respond.json();
}