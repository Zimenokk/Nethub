export const tinyImagesUploader = (articleId, blobInfo, progress) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", `https://localhost:7001/v1/articles/${articleId}/images`);

    xhr.upload.onprogress = (e) => {
      progress((e.loaded / e.total) * 100);
    };

    xhr.onload = () => {
      if (xhr.status === 403) {
        reject({ message: "HTTP Error: " + xhr.status, remove: true });
        return;
      }

      if (xhr.status < 200 || xhr.status >= 300) {
        reject("HTTP Error: " + xhr.status);
        return;
      }

      const json = JSON.parse(xhr.responseText);

      if (!json || typeof json.location != "string") {
        reject("Invalid JSON: " + xhr.responseText);
        return;
      }

      resolve(json.location);
    };

    xhr.onerror = () => {
      reject(
        "Image upload failed due to a XHR Transport error. Code: " + xhr.status
      );
    };

    const formData = new FormData();
    formData.append("file", blobInfo.blob(), blobInfo.filename());

    xhr.setRequestHeader(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjMiLCJVc2VybmFtZSI6InR3ZWVrZXIiLCJuYmYiOjE2NTQ5MDAxNTEsImV4cCI6MTY1NDk2OTY5MSwiaWF0IjoxNjU0OTAwMTUxfQ.wirhKhkQk4Rho-qABQhJVvdGXi8wKrXMi3HrG48HDVY"
    );

    xhr.send(formData);
  });
