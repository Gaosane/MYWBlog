import { authorsConfig } from "../config";

function getAuthors() {
    return authorsConfig.map((a) => a.folder);
}

export { getAuthors };
