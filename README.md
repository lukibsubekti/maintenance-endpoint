# What is it used to?
- Deploy several server instances in a single host to serve any requests. 
- Provide an HTML page or a JSON response for any site which is in a maintenance state.

# How to configure and run?
Configuration is saved in `./config.json`.
- `services`: List of services that will be deployed
  - `port`: The port used by the service
  - `responseType`: Options are `text/html` and `application/json`

Running the application.
```bash
yarn install
node index.js
```