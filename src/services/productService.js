export async function getProducts() {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Couldnt get");
  }

  return await response.json();
}
