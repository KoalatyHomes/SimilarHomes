## Server API

### Get restaurant info
  * GET `/api/similarListings/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `200`

**Returns:** JSON

```json
    { "_id": "ObjectId()", 
    "Image_url" : "String url", 
    "Price" : "Number", 
    "Address" : "String address", 
    "Region" : "String", 
    "Bedroom_num" : "Number", 
    "Bathroom_num" : "Number", 
    "Square_footage" : "Number", 
    "Description" : "String", 
    "Mortgage" : "Number", 
    "New" : "boolean", 
    "Price_change" : "Number"}
```

### Add listing
  * POST `/api/listings`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    { 
    "Image_url" : "String url", 
    "Price" : "Number", 
    "Address" : "String address", 
    "Region" : "String", 
    "Bedroom_num" : "Number", 
    "Bathroom_num" : "Number", 
    "Square_footage" : "Number", 
    "Description" : "String", 
    "Mortgage" : "Number", 
    "New" : "boolean", 
    "Price_change" : "Number"}
```


### Update listing info
  * PATCH `/api/listings/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    { "_id": "ObjectId()", 
    "image_url" : "String url", 
    "price" : "Number", 
    "address" : "String address", 
    "region" : "String", 
    "bedroom_num" : "Number", 
    "bathroom_num" : "Number", 
    "square_footage" : "Number", 
    "description" : "String", 
    "mortgage" : "Number", 
    "new" : "boolean", 
    "price_change" : "Number"}
```

### Delete listing from users liked list
  * DELETE `/api/likedListings/:id/`

**Path Parameters:**
  * `id` likedListing id

**Success Status Code:** `204`
