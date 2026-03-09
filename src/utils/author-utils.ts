import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

function getAuthors() {
    // each folder under src/content/posts is a author
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const folders = fs.readdirSync(path.join(__dirname, "..", "content", "posts"));
    return folders;
}

export { getAuthors };
