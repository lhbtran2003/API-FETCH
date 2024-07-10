//này e lười tạo mới quá nên thôi lấy dữ liệu cũ xài đỡ nha thầy, coi như post vs product là 1 nhe ^^
export const createProduct = async(data: {}) => {
    const response = await fetch("http://localhost:9999/post",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
 } )
 return response.json();
}