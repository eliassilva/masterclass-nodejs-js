// eslint-disable-next-line import/prefer-default-export
export function send404(res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('Error 404: Resource not found.');
  res.end();
}
