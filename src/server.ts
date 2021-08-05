import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/v2/imageIds", () => {
      return {
        data: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      };
    });
  },
});
