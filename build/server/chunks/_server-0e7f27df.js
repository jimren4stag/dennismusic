import mysql from 'mysql';
import './index-2b68e648.js';

mysql.createPool({
  host: "localhost",
  user: "root",
  password: "pass"
});
async function POST({ request, cookies }) {
  await request.json();
}

export { POST };
//# sourceMappingURL=_server-0e7f27df.js.map
