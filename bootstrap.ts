import { build } from './app';

const port = process.env.PORT || 5111;
build.listen(port);
console.log(`Server started on port ${port} :)`);
