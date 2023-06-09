# docker-swagger-ui-change-title
Swagger UI の Dockerイメージにて、HTMLのタイトルを変更するサンプル

## Feature
- Docker
- Swagger UI

## Usage
- Dockerfileよりイメージをビルドし、起動してください。
```
docker build . -t swagger-ui-sample
docker run --rm -d -p 8080:8080 swagger-ui-sample:latest
```

## NOTE
- swagger-initializer.js にて、動的に `Title` タグを編集しています。
- `MutationObserver` で DOM の変更を監視し、Swagger UI のタイトルの値を `Title` の値に注入しています。

```js
      // custom code start.
      const observer = new MutationObserver(function() {
        const titleElement = document.getElementsByClassName('title').item(0);

        // change document title with api title.
        if (titleElement && titleElement.firstChild.data.trim()){
          document.title = titleElement.firstChild.data.trim() + ' - ' + document.title;
          observer.disconnect();
        }
      });

      const config = { 
        attributes: true, 
        childList: true, 
        characterData: true,
        subtree: true
      };

      observer.observe(document.body, config);
```