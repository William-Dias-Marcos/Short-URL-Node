export const logger = {
  debug: (message: string, data?: unknown) => {
    if (process.env.DEBUG === "true") {
      console.debug(`\x1b[35m[DEBUG]\x1b[0m ${message}`); // Magenta
      if (data !== undefined) {
        console.dir(data, { depth: null, colors: true });
      }
    }
  },
  info: (message: string) => {
    console.log(`\x1b[36m[INFO]\x1b[0m ${message}`); // Ciano
  },
  success: (message: string) => {
    console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`); // Verde
  },
  warn: (message: string) => {
    console.warn(`\x1b[33m[WARN]\x1b[0m ${message}`); // Amarelo
  },
  error: (message: string, error?: unknown) => {
    console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`); // Vermelho
    if (error) {
      console.error(error);
    }
  },
};
