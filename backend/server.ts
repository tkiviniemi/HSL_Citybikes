import app from './index';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Backend running on port: ${PORT}`);
});
