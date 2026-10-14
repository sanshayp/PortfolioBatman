import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function getBasePath() {
  if (process.env.GITHUB_ACTIONS !== "true" || !process.env.GITHUB_REPOSITORY) {
    return "/";
  }

  const [owner, repository] = process.env.GITHUB_REPOSITORY.split("/");
  if (!owner || !repository) return "/";

  return repository.toLowerCase() === `${owner.toLowerCase()}.github.io`
    ? "/"
    : `/${repository}/`;
}

export default defineConfig({
  base: getBasePath(),
  plugins: [react()],
});

