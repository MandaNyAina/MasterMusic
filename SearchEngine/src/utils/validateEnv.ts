import { cleanEnv, port, str, host } from 'envalid';

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    HOST: host(),
  });
};

export default validateEnv;
