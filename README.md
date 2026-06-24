# SSE
Example of Server-Sent Events.

The server sends a continuous stream of:
- Messages at random times
- Custom `ping` events every second

## Usage
1. Place server and client in the same web server (e.g., an Apache web server).
2. Run the server: `php server/sse.php`
3. Start the client in the same web server

## Tools
Server: PHP
Client: JavaScript / CSS3 / Water.css / HTML5

## Author
MDN ([original repo](https://github.com/mdn/dom-examples/tree/main/server-sent-events)).  
Code reorganisation and styling by Arturo Mora-Rioja.