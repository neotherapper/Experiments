import axios from "axios";

try {
  const { data: html } = await axios.get(
    "https://en.wikipedia.org/wiki/World_Wide_Web"
  );
  console.log(html);
} catch (e) {
  console.error(e);
}
