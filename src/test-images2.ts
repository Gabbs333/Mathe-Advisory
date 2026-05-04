import { execSync } from "child_process";

const urls = [
  "https://images.pexels.com/photos/3734193/pexels-photo-3734193.jpeg",
  "https://images.pexels.com/photos/2034932/pexels-photo-2034932.jpeg",
  "https://images.pexels.com/photos/2733471/pexels-photo-2733471.jpeg",
  "https://images.pexels.com/photos/1594917/pexels-photo-1594917.jpeg",
  "https://images.pexels.com/photos/1769391/pexels-photo-1769391.jpeg",
  "https://images.pexels.com/photos/4144365/pexels-photo-4144365.jpeg",
  "https://images.pexels.com/photos/2443425/pexels-photo-2443425.jpeg",
  "https://images.unsplash.com/photo-1542318835-15d2a6a68e83",
  "https://images.unsplash.com/photo-1577416412292-747c6607f055", // modern building in Africa
  "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4", 
  "https://images.unsplash.com/photo-1595180415306-38cc08c325c3", 
  "https://images.unsplash.com/photo-1597503738090-fe2688002bb5"
];

for (const url of urls) {
  try {
    const res = execSync(`curl -s -o /dev/null -w "%{http_code}" "${url}"`).toString();
    console.log(url, res.trim());
  } catch (e) {
    console.log(url, "Error");
  }
}
