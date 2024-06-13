// Main class to run service
// Open Terminal and run npm start

import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(3000, () => {
  logger.info("App start");
});
