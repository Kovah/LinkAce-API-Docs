The LinkAce API is a clearly structured REST API to access and modify the data stored in your LinkAce setup. All data must be sent via JSON and JSON is used to return any data or messages.

The source of this API documentation can be found [on Github](https://github.com/Kovah/LinkAce-API-Docs).

## Usage
### Generating an API key

To use the API, you have to generate an API key in the LinkAce user settings. Please notice that API tokens changed with v2 of LinkAce and can be created multiple times for various clients or applications. API tokens will in this case be differentiated by their name.

![Preview of the user settings](/images/linkacev2_user_api_tokens.png)

### Using the API key

It highly depends on the system you use to work with the LinkAce API. In this example we do a simple request via Curl. We will create a new link.

* Replace `https://your-linkace-url.com` with your actual domain you use to access your LinkAce.
* Replace `YOUR-API-KEY-HERE` with the API key you got from the user settings.
* Fill the data JSON block with the actual data of the link you want to save.

```bash
curl --request POST \
  --url https://your-linkace-url.com/api/v2/links \
  --header 'accept: application/json' \
  --header 'Content-Type: application/json' \
  --header 'authorization: Bearer YOUR-API-KEY-HERE' \
  --data '{
    "url":"https://duckduckgo.com",
    "title":"DuckDuckGo",
    "description":"",
    "lists":[],
    "tags":[],
    "visibility":1,
    "check_disabled":false
    }'
```

After sending the request with the HTTP status `200`, you will get a response that may look like this:

```json
{
  "id": 1,
  "url": "https://duckduckgo.com",
  "title": "DuckDuckGo",
  "description": "",
  "visibility": 1,
  "user_id": 1,
  "icon": "fa fa-link",
  "updated_at": "2020-03-09T19:33:23.000000Z",
  "created_at": "2020-03-09T19:33:23.000000Z",
}
```

## Compatibility with various clients

Please notice that the clients acting with the LinkAce API need to send proper requests. This includes:
- a `Content-Length` header, if the transfer is not chunked,
- a `Content-Type` header with the value of `application/json`,
- a `Accept` header with the value of `application/json`.
