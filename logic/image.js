async function generateImage(prompt) {
  const res = await fetch("https://backend.craiyon.com/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  const data = await res.json();
  if (data.images && data.images.length > 0) {
    return `data:image/jpeg;base64,${data.images[0]}`;
  } else {
    return null;
  }
}
