## What it is used for
- Deploy several server instances in a single host to serve any requests. 
- Provide an HTML page or a JSON response for any site which is in a maintenance state.

## Configuration
Configuration is saved in `./config.json`.
- `services`: List of services that will be deployed
  - `port`: The port used by the service
  - `responseType`: Options are `text/html` and `application/json`

Running the application.
```bash
yarn
yarn start
```

## Sample of configuration
```json
{
  "services": [
    {
      "port": 3000,
      "responseType": "text/html"
    },
    {
      "port": 3001,
      "responseType": "application/json"
    },
    {
      "port": 3002,
      "responseType": "text/html"
    }
  ]
}
```