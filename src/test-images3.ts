import { execSync } from "child_process";

const urls = [
  "https://images.pexels.com/photos/10313462/pexels-photo-10313462.jpeg", 
  "https://images.pexels.com/photos/5668783/pexels-photo-5668783.jpeg",
  "https://images.pexels.com/photos/2034932/pexels-photo-2034932.jpeg",
  "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg",
  "https://images.unsplash.com/photo-1541880468925-50e50f555d8f",
  "https://images.unsplash.com/photo-1520111162627-ef3d7fa85b19"
];

for (const url of urls) {
  try {
    const res = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`).toString();
    console.log(url, res.trim());
  } catch (e) {
    console.log(url, "Error");
  }
}
