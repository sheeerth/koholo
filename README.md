To run project you need have a docker services

```bash

git clone https://github.com/sheeerth/koholo.git
cd koholo
docker-compose up -d --build
docker-compose up
```

Request example 

```bash
      curl --location --request POST 'localhost:8080/command' \
      --header 'Content-Type: application/json' \
      --data-raw '{
        "command": "ls",
        "params": [
          "-a",
          "-l"
        ]
      }'
```
