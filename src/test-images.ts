import { execSync } from "child_process";

const urls = [
  "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg",
  "https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg",
  "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg",
  "https://images.pexels.com/photos/3182743/pexels-photo-3182743.jpeg",
  "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg",
  "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
  "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
  "https://images.pexels.com/photos/5668802/pexels-photo-5668802.jpeg",
  "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  "https://images.pexels.com/photos/3183174/pexels-photo-3183174.jpeg"
];

for (const url of urls) {
  try {
    const res = execSync(`curl -s -I "${url}" | head -n 1`).toString();
    console.log(url, res.trim());
  } catch (e) {
    console.log(url, "Error");
  }
}
