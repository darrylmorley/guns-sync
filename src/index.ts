import { Hono } from "hono";
import guns from "./routes/guns";
import images from "./routes/images";
import { updateGunsSecheduled } from "./jobs/update-guns";

const app = new Hono();
updateGunsSecheduled.start();

app.route("/guns", guns);
app.route("/images", images);

export default app;
